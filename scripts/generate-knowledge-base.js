const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const outputPath = path.join(root, 'ai-training', 'schoolsite-pro-knowledge.md');
const context = { window: {} };
vm.createContext(context);

for (const relativePath of ['js/docs.js', 'js/data.js']) {
  const sourcePath = path.join(root, relativePath);
  vm.runInContext(fs.readFileSync(sourcePath, 'utf8'), context, { filename: relativePath });
}

const docs = context.window.SCHOOL_SITE_DOCS || [];
const tools = context.window.SCHOOL_SITE_TOOLS || [];
const release = context.window.SCHOOL_SITE_RELEASE || {};
const releaseNotes = context.window.SCHOOL_SITE_RELEASE_NOTES || [];

function text(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'object' && value.text) return text(value.text);
  return '';
}

function renderListItem(item, indent = '') {
  if (typeof item === 'string' || typeof item === 'number') return `${indent}- ${item}`;
  if (!item || typeof item !== 'object') return '';
  const lines = [`${indent}- ${text(item.text)}`];
  if (Array.isArray(item.subitems)) {
    for (const child of item.subitems) lines.push(renderListItem(child, `${indent}  `));
  }
  return lines.filter(Boolean).join('\n');
}

function renderBlock(block) {
  if (typeof block === 'string' || typeof block === 'number') return String(block);
  if (!block || typeof block !== 'object') return '';

  switch (block.type) {
    case 'paragraph':
      return text(block.text);
    case 'image':
      return block.caption ? `Image: ${block.caption}` : (block.alt ? `Image: ${block.alt}` : '');
    case 'list':
    case 'ordered': {
      const items = Array.isArray(block.items) ? block.items : [];
      return items.map((item, index) => {
        if (block.type === 'ordered') {
          const rendered = renderListItem(item).replace(/^- /, '');
          return `${index + 1}. ${rendered}`;
        }
        return renderListItem(item);
      }).filter(Boolean).join('\n');
    }
    case 'table': {
      const headers = Array.isArray(block.headers) ? block.headers : [];
      const rows = Array.isArray(block.rows) ? block.rows : [];
      const output = [];
      if (headers.length) {
        output.push(`| ${headers.map(text).join(' | ')} |`);
        output.push(`| ${headers.map(() => '---').join(' | ')} |`);
      }
      for (const row of rows) output.push(`| ${row.map(text).join(' | ')} |`);
      return output.join('\n');
    }
    case 'section':
      return renderBlocks(block.blocks);
    default:
      return text(block.text || block.value);
  }
}

function renderBlocks(blocks) {
  if (!Array.isArray(blocks)) return renderBlock(blocks);
  return blocks.map(renderBlock).filter(Boolean).join('\n\n');
}

function renderDocument(doc) {
  const output = [`## ${doc.title || doc.id}`];
  if (doc.summary) output.push(doc.summary);
  if (doc.image?.caption) output.push(`Image: ${doc.image.caption}`);
  for (const section of doc.body || []) {
    if (Array.isArray(section)) {
      const heading = text(section[0]);
      const body = renderBlocks(section[1]);
      if (heading) output.push(`### ${heading}`);
      if (body) output.push(body);
    } else {
      const body = renderBlock(section);
      if (body) output.push(body);
    }
  }
  return output.join('\n\n');
}

function renderTool(tool) {
  const output = [`### ${tool.name || 'Unnamed tool'}`];
  if (tool.category) output.push(`Category: ${tool.category}`);
  if (tool.desc) output.push(tool.desc);
  if (tool.details) output.push(tool.details);
  for (const item of tool.content || []) {
    const body = renderBlock(item);
    if (body) output.push(body);
  }
  return output.join('\n\n');
}

const sections = [];
sections.push('# SchoolSite Pro Knowledge Base');
sections.push('This file is generated from `js/docs.js` and `js/data.js`. Use it as the primary product-help source. It describes documented SchoolSite Pro workflows for ArcGIS Pro and does not replace official licensing or account support.');
sections.push(`Product: ${release.productName || 'SchoolSite Pro'}\nRequirements: ${release.requirements || 'See the current documentation'}\nCurrent release: ${release.version || 'Unknown'} (${release.releaseDate || 'Unknown date'})`);

sections.push('## Documentation');
let currentSection = '';
for (const doc of docs) {
  if (doc.section && doc.section !== currentSection) {
    sections.push(`## ${doc.section}`);
    currentSection = doc.section;
  }
  sections.push(renderDocument(doc));
}

sections.push('## Toolkit');
for (const tool of tools) sections.push(renderTool(tool));

sections.push('## Release notes');
for (const note of releaseNotes) {
  sections.push(`### Version ${note.version || 'Unknown'} (${note.date || 'Unknown date'})`);
  if (note.description) sections.push(note.description);
  if (Array.isArray(note.features)) sections.push(note.features.map(feature => `- ${feature}`).join('\n'));
}

const output = `${sections.filter(Boolean).join('\n\n')}\n`;
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Generated ${path.relative(root, outputPath)} from ${docs.length} documents, ${tools.length} tools, and ${releaseNotes.length} release notes.`);
