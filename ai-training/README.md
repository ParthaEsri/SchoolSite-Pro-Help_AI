# AI knowledge base

`schoolsite-pro-knowledge.md` is generated from the structured documentation in `js/docs.js` and toolkit and release data in `js/data.js`.

To regenerate locally:

```powershell
node .\scripts\generate-knowledge-base.js
```

The GitHub Actions workflow regenerates and commits the Markdown file when either source file changes on `main`.

## Chatbase setup

Use the raw GitHub URL for `ai-training/schoolsite-pro-knowledge.md` as the Chatbase URL source, or upload the generated Markdown file as a document. After a push, refresh or resync that Chatbase source. If the Chatbase plan supports scheduled crawling, enable it for the raw file URL.

The generated file is the text source for the agent. Keep the existing agent instructions for response behavior, source priority, uncertainty, and licensing support boundaries.
