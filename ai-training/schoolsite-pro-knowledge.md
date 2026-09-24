# SchoolSite Pro Knowledge Base

This file is generated from `js/docs.js` and `js/data.js`. Use it as the primary product-help source. It describes documented SchoolSite Pro workflows for ArcGIS Pro and does not replace official licensing or account support.

Product: SchoolSite Pro
Requirements: ArcGIS Pro 3.3.0+
Current release: 1.9.7 (September 16, 2026)

## Documentation

## Start here

## Welcome to SchoolSite Pro

### SchoolSite Pro for ArcGIS Pro 3.3+

SchoolSite Pro is the planning tool developed and used in-house by MGT staff and also empowers school planners with GIS experience to create student forecasts and attendance-area redistricting plans.

It runs as an extension for Esri’s  ArcGIS Pro and helps planners compare planning scenarios with GIS data for analysis and decision-making.

### Get started

- Get started
- Release Notes
- Frequently asked questions

### Manage your data

- Create your own data
- Import and validate your data

### Redistricting

- A tour of the redistricting ribbon
- Create a new redistricting plan
- Redistrict based on current resident students
- Redistrict based on resident students and current enrollment
- Redistrict based on a forecast
- Redistrict by changing boundaries and schools
- Share your redistricting plan

### The Statistics Window

- Statistics Window Tabs

### Forecasts

- A tour of the forecast ribbon
- Create a new forecast
- Modify forecast factors
- Generate a forecast report
  - Include maturation data in your forecast
  - Include historical student data in your report
- Configure the look of your map
- Enrollment forecast report
- Development summary report
- Project summary report

## Get Started

Installation, system requirements, licensing, and the basic SchoolSite Pro interface.

SchoolSite Pro is the latest professional desktop GIS school planning application from Davis Demographics. The sections below introduce basic elements of the user interface.

### Overview of the SchoolSite ribbon

Image: SchoolSite Pro runs as an extension inside ArcGIS Pro.

### Installation & System requirements

SchoolSite Pro works as a configuration to ArcGIS Pro. You must install ArcGIS Pro first in order to install SchoolSite Pro. Please visit Esri’s  website for detailed instructions on how to install ArcGIS Pro, including system requirements and Esri’s  licensing information.

SchoolSite Pro system requirements generally follow the same requirements as specified for ArcGIS Pro in terms of required memory, CPU, and graphics abilities. Please refer to Esri’s  documentation and whenever possible, use a computer that exceeds the minimum requirements.

SchoolSite Pro currently works with Windows 10 or Windows 11 and is built for the latest version of ArcGIS Pro. It will most likely work with previous minor releases. For example, if SchoolSite Pro is built on ArcGIS Pro 3.3 then it should work with any 3.x release such as 3.0 or the not yet released 3.3 or 3.4 in the future.

You can download the latest version of SchoolSite Pro from this website, look for the Download SchoolSite Pro button in the top banner.

### Licensing for SchoolSite Pro

SchoolSite Pro uses a single-user licensing model on a subscription basis. A license ID and activation password are required in order to use SchoolSite Pro. You can obtain these with your SchoolSite Pro subscription.

### Frequently Asked Questions

- What kind of data do I need in order to use SchoolSite Pro?
- Where can I obtain data?
- How should I organize my data?
- What are study areas?

## Manage data

## Manage your data

Prepare, create, import, and validate the district data used by SchoolSite Pro.

Image: Data Setup validates the datasets used by SchoolSite Pro.

### Manage your data | SchoolSite Pro for ArcGIS Pro 3.3+

The heart of SchoolSite Pro is your districtâ€™s data. After your data has been created, the SchoolSite Pro Data Setup tool can help ensure your dataâ€™s compatibility with the rest of the software.

Use the pages below to build the source GIS datasets, then validate them before creating plans and forecasts.

### Create Your Own Data

- How to create your own data
- Create study areas
- Create students
- Create schools
- Create tracts
- Create assessor data
- Create trustee areas
- Create streets

### Import and Validate Your Data

- An overview of the Data Setup tool
- Data checks made for Redistricting
- Data checks made for Forecasts
- Data checks made for SchoolSite Locator

## Organizing your data

A practical structure for GIS data, school years, maps, forecasts, and redistricting plans.

Image: A school-year folder structure keeps source data and planning outputs organized.

### This organizational layout including Windows folders, and geodatabases accomplishes the following:

- Organizes data by school year to provide for archiving older data for easy access.
- Organizes data by functions including map data geodatabases in one location as well as map documents and annual SchoolSite Pro forecasts (and possible redistricting plans) in other easily recognizable locations.
- Provides for easy copying of main data sets (streets, study areas, schools, etc.) into future years for ongoing updates and maintenance.

### Brief Rationale

First and foremost, all map data holdings should be stored within an Esri geodatabase format. We do not suggest that your long-term data be in shapefile format due to editing and other limitations within the ArcGIS software.

Data should, if possible, be stored on a shared network file server for access by different users as well as the likely possibility of nightly data backups as part of typical IT data strategy. In the example diagram, we have indicated a network drive as S:\ with a GIS_DATA folder.

Data is stored by "school year" so that the most recent updated mapping and other data can be easily located and a logical progression of historical data can be created. These folders under GIS_DATA are indicated by SY_1920 (ie. school year 2019-2020), SY_2021 (school year 2020-2021), etc. As a new year approaches in July, a new folder can be created in Windows Explorer or ArcCatalog and certain data copied into the new folder for ongoing update and maintenance.

Under each school year folder, we have created additional folders which organize our data holdings by type. Data types include our geodatabases (GDB folder), map documents that we create within ArcGIS Pro (Map_Docs folder), layer files that we also create in ArcGIS Pro and that are used to quickly add new symbolized layers within map documents (Layers folder), and our SchoolSite Pro forecasts and redistricting plans which are stored under the SchoolSite Pro folder.

### GDB Folder

Under the GDB folder are several Esri geodatabases (typically file geodatabases over other types of geodatabases for performance and data size considerations). The Basemap.GDB geodatabase contains the Main feature dataset. The Main feature dataset contains the feature classes that are typically updated on an ongoing basis by the school district including streets, study areas (and the inherent school attendance zones through attribute codes), school locations and development tracts. A topology set of rules are setup for streets (ie. streets must not have dangles) and a separate set of topology rules are setup for study areas (ie. study area polygons must not have gaps or must not have overlaps). If desired from an editing "comfort" standpoint, the streets (and streets topology) can be copied from one geodatabase to another for editing purposes and then copied back after accuracy validation. An Address Locator for student geocoding purposes against the reference data such as streets is maintained in the Basemap geodatabase. It should be remembered to "rebuild" the address locator if any editing has been accomplished on the reference street data.

The Students_100519.GDB geodatabase contains all items related to the geocoding of students including the original data table extract (in this example rawstudent.txt) from the district's student information system (SIS). The date of the student extract from the SIS in this example is 10/05/2019. Additional student geocoding during other times of the year, if necessary and desired, are placed within additional Student geodatabases with appropriate date related names. All geocoded students are placed within the geodatabase as the feature class, StudentsAll.

The Misc.GDB geodatabase contains feature classes that typically do not change (ie. lakes, railroads, etc) or are obtained and updated by other agencies (ie. parcels). This geodatabase can be used to store a variety of feature classes.

### Map_Docs Folder

This folder contains all of the map documents (.mxd) that you might create within ArcGIS Pro during the course of the year. For further organizational purposes, you might consider creating subfolders for each individual map document which might contain the .mxd as well as supporting files that are created during analysis or specific mapping purposes within that map document.

This possible sub-folder structure allows you to quickly remove or delete selected map documents that are no longer needed (by deleting the subfolder) including all of the supporting files associated with the map document. This is a good way to keep your map documents and any associated files organized.

If you wish to keep any map documents that are critical for year-to-year mapping tasks you can copy the .mxd to the next year's Map_Docs folder using Windows Explorer or ArcCatalog and correct the data source pathnames for the layers in the map document to the new location of the feature classes.

### Layers Folder

The same discussion for the Map_Docs folder holds true for the Layers folder. See above discussion.

### SchoolSite Pro Folder

The SchoolSite Pro folder can be organized in a variety of ways. One solution is to create a subfolder for redistricting plans and a second subfolder for forecasts. Each folder would contain a SchoolSite Pro geodatabase with the appropriate items. By maintaining your forecasts and redistricting plans under the SchoolSite Pro folder in a particular school year, the user can always go back to revisit (ie. open within SchoolSite Pro) the forecasts or boundary plan options considered in previous years.

## What are Study Areas?

Study Areas are the geographic building blocks used to collect data and model attendance boundaries.

Image: Study Areas provide the geographic units used for student and boundary analysis.

### What Are Study Areas?

Study Areas are the building blocks of a school district. Study Areas are geographically defined, following logical boundaries of a neighborhood and are used for gathering data.

SchoolSite Pro does not use separate datasets for each set of school attendance areas. Using a unique field coding method, all attendance areas are stored within the Study Area dataset. By using these building blocks or Study Areas, various groupings of these areas can be used to simulate attendance area changes and can be useful for deciding where to open or close schools.

Districts with established study areas will need to make sure the study areas are in an Esri-supported format, such as a geodatabase, shapefile, or coverage. If your district does not have existing study areas, you will need to divide your district into study areas based on one or more of the criteria described below.

### Study Area Boundary Line Criteria

1. Current school attendance areas
2. All major streets (existing or future)
3. All railroads
4. All drainage channels or waterways
5. Lines between developed and undeveloped portions of the district
6. Lines between different types of zoning
7. Unusual terrain features and impediments to pedestrian traffic
8. City limit lines
9. Different types of housing such as old versus new, apartment versus single family
10. Census geography

### Planning guidance

Study areas should be small enough to allow flexibility in modifying boundaries. Davis Demographics suggests no more than 50-75 students per study area.

Although the number of study areas per district varies, the general rule of thumb is that more study areas equals more flexibility. Urban districts will require more study areas due to population density. The opposite is the case for rural areas.

Study area boundaries in established neighborhoods, however, should never change once established. Study areas in undeveloped portions of the district can be split as development occurs and road circulation patterns become evident. Any changes to study areas should be accomplished prior to students moving into the area.

### Related topics

- How to Create Your Own Data
- Where Can I Obtain Data?

## Redistricting

## SchoolSite Pro Redistricting Plans

Create, compare, modify, analyze and share attendance-boundary scenarios.

Image: The Assign ribbon contains the core redistricting controls.

### SchoolSite Pro Redistricting Plans | SchoolSite Pro for ArcGIS Pro 3.3+

Welcome to the SchoolSite Pro Redistricting Extension. With this extension, you can report on demographic data about your students, modify attendance areas, and create updated maps and demographics reports.

Using a Study/Planning Area map of the District, alternative school boundary plans can initially be developed based on either existing attendance areas, by closest school, by capacity or by a maximum number of students. Study Areas can then be individually reassigned to other school locations to balance student population by residence and site capacities. Additional sites can be added simulating the opening of a new school or surplus sites can be deleted simulating the closing of a school. As boundaries are modified, classroom requirements to house students at each site are reported by grade level. The user can immediately see the effects on facility needs with each plan. The effect of class size reduction at various grade levels has never been easier!

## A tour of the redistricting ribbon

Use the Statistics Window and Assign ribbon to inspect and change attendance areas.

Image: The following is a brief tour of the basics of Redistricting in SchoolSite Pro.

### A tour of the redistricting ribbon | SchoolSite Pro for ArcGIS Pro 3.3+

Before attempting to redistrict, it is helpful to view the current resident student population by grade for each school. The SchoolSite Redistricting Extension allows for viewing statistics via the Statistics Window. The Statistics Window presents the data in a tabular format and can either remain floating or be docked like the Contents Pane.

### Choose Schools and Grades to View

To access this feature, click on the Show Statistics in the Assign ribbon.

1. From the Redistricting Toolbar, choose Show Statistics in the Assign ribbon.
2. To create a report for all schools in the District, click on the blue Select All hyperlink under the section "Schools".
3. Be sure the Grade Distribution button is selected under the section "Statistics Type".
4. For this example, check mark the grade range K-6 in the Grade Ranges box. The grades included in the ranges will automatically be checked. To display only grades K and 6, click Select None in the top right corner, then check grades K and 6 in the Grades section and the table should automatically update.

Image: The Current Statistics Window shows current statistics based on boundaries shown.

If you want to modify these boundaries, start by reassigning study areas. Study Areas are geographically defined, following logical boundaries of a neighborhood and are used for gathering data. In SchoolSite, attendance area changes are simulated by assigning study areas to different school attendance areas. See topic "Changing Boundaries Between Schools" for more information.

### Turn on Labels

1. Contents Pane > Right click on Boundary Plan > Label.
2. Your map now displays the names of your school attendance areas!

Image: Turn on labels for the boundary plan.

Image: The map displays the names of the school attendance areas.

### Modifying Boundaries

To simulate boundary changes between attendance areas, begin an assigning session from within the Assign ribbon.

1. From the Redistricting Plan select the Assign ribbon > Start Assignment.
2. To reassign study areas from existing schools select, from the Assign ribbon and Assign Tools group, the drop-down arrow below "Assign study areas to:" and select the school you wish to assign study area(s). In this case, select Harding ES.
3. Next, in the Select drop down menu choose Select by Lasso.
4. Click and draw a loop within the study areas to be reassigned to Harding ES. The plan should appear similar to the screenshot below.

Image: Use the lasso to select study areas to reassign.

Image: The selected study areas are highlighted in bright blue before reassignment.

Please note: Selecting study areas that are already assigned to Harding ES will not change after reassigning them to Harding ES.

To see how the reassignment of the selected study areas would affect that school, open the Statistics Table and click on the Proposed Tab.

To view only the statistics for the selected study areas, click on the Selected Tab.

Image: The selected study areas are highlighted in bright blue.

Image: The selected tab shows the statistics for the current selection.

### Commit the Modification

1. If the changes are acceptable, commit the change. In the Assign Tools group, click on Assign Studyareas. The statistics window and map will update.
2. If you are certain you want to make your changes permanent, click on Save Assignments in the Assign group.
3. When finished, stop the edit session by clicking Stop from the Assign group. Please note: Once you choose to Save Assignments or Stop Assigning, you can no longer undo edits.
4. If necessary click on Show Statistics, the Current Residence Tab reflects the update.
5. To review the original statistics when the plan was first created, click on the Original Residence tab.

Image: Use the assignment tools to commit boundary changes and save the plan.

## Create a new redistricting plan

Three supported plan types: current residence, resident + current enrollment, and forecast-based planning.

### Create a new redistricting plan | SchoolSite Pro for ArcGIS Pro 3.3+

To begin a new redistricting plan, on the SchoolSite ribbon, click Create, then Plan.

Image: The Create dockpane will display.

Three types of plans can be created in SchoolSite Pro:

### Type 1: Create a plan based on the current residence

A redistricting plan based on current resident students displays the number of students residing within each attendance area whether or not they are enrolled in the area?s assigned school.

As attendance areas are modified, all students residing in the selected areas are moved to the newly assigned school of attendance.

This selection is most useful for facility planning and for understanding the true impact of student population distribution in relation to school locations.

Image: Current residence plan results show resident students in each attendance area.

### Type 2: Create a plan based on enrollment

A plan based on resident and enrolled students displays statistics for both the current resident student population of each attendance area (same as the Current Resident Student plan) as well as the estimated enrollment totals at each school.

Changes in enrollment totals as attendance areas are modified are determined by a pre-defined set of rules based on each student?s program, grade, and current school of enrollment.

### Type 3: Create a plan based on forecasts

A redistricting plan based on projected resident students displays the current and forecasted resident student population of each attendance area.

The statistics presented in this plan illustrate the true growth and decline of the student population within areas of the District and are useful for school opening and closure analysis as well as defining attendance areas that match forecasted resident population with school site capacities around the District.

This is the proper method for long-term facility and attendance area planning.

Image: Forecast-based plans help evaluate long-range facility and attendance-area planning.

### Copy a redistricting plan

You can also create new plans by copying an existing redistricting plan.

This is useful if you want to make some initial basic changes to the boundaries that will apply to all scenarios, and then create variations on top of those changes.

Copying a Plan is just like copying a map in ArcGIS Pro. From the Catalog pane, open the Maps section and find the map that contains your Plan.

Image: Open the Maps section to find the map containing your redistricting plan.

If you are unsure which maps have Plans, click the Open button from the SchoolSite ribbon to get a specific list of SchoolSite Plans and Forecasts.

Image: Use the Open dialog to identify maps with plans and forecasts.

Right-click the map that contains the Plan that you would like to copy and choose Copy. Then, right-click on the Maps folder and click Paste.

Image: Choose Copy on the plan map, then Paste in the Maps folder.

A copy of your Plan will appear with the same name and the number ?1? at the end.

Image: The copied plan appears with the same name and a suffix of 1.

At this time, you can now rename your Plan by simply renaming the map as you would any other map in ArcGIS Pro.

Image: Rename the plan map in ArcGIS Pro to match your new scenario.

SchoolSite Pro will understand that this map contains a plan and will update the Plan?s tables accordingly to update the Plan?s name.

## Redistrict based on current resident students

Create a plan using current resident student population by school type.

Image: A residence-based plan uses current resident students by school type.

### Redistrict based on current resident students | SchoolSite Pro for ArcGIS Pro 3.3+

To create a new redistricting plan based on current resident students, on the SchoolSite ribbon, click Create, then Plan. A Create dockpane will display. Make sure the Residence tab is selected. Type in the name of your plan and select the type of Plan you wish to create by selecting your District’s Elementary, Middle, Intermediate or High School boundaries. You can also choose to include additional student types in your plan. Click the Finish button when done. The plan will take a few minutes to create. Plan creation for larger school districts take additional time based upon the number of study areas, number of students, number of fields on the student attribute table and the processing power of your computer.

## Redistrict based on resident students and current enrollment

Estimate where students are likely to attend after boundary changes using current enrollment rules.

### Redistrict based on resident students and current enrollment | SchoolSite Pro for ArcGIS Pro 3.3+

Prior releases of SchoolSite only allowed users to see changes in the resident student population totals as attendance boundaries were redrawn.

All students living within a selected study area were moved to the new school of assignment regardless of the students' classification or school of enrollment. This is the method used in plans created based on current resident students and plans based on forecasted resident students.

While this method is valuable for long term facility planning it does little to answer the common question of 'Where students are most likely to attend school following a boundary change?' Because of open enrollment and special schools with no assigned attendance boundaries (i.e. charter schools, magnet schools, academies etc), determining where a student is likely to attend school following redistricting can be rather difficult.

Creating a redistricting plan based on current resident students and current enrollment makes finding the answer to this common question much easier. This plan type will take into consideration the students' grades (Is the student within the traditional K through 12 grade range or is the student in a special Pre-Kindergarten or Adult program?), the type of school they attend (traditional elementary, middle, or high school, or school with no attendance area such as charter school or academy), and whether or not the student lives within the district boundary, before determining if a student would move as the result of a boundary change.

To make this possible SchoolSite Pro uses a series of rules or assumptions to govern how students are treated during the redistricting process when using a plan that is set up using both current resident students and current enrollment.

Assumptions/Software Rules for Redistricting by Enrollment:

1. What happens to a student enrolled at their resident school during a boundary change? It is assumed that any student living in an area of proposed attendance boundary change who is currently enrolled in their resident school will be assigned to the new school of residence.
2. What happens to a student who is not enrolled in their school of residence during a boundary change? Any student living in an area of proposed attendance boundary change that is enrolled in a school other than their resident school will be assumed to continue to be enrolled at that other school. Students living in an area not affected by a proposed attendance boundary change will continue to attend their current school of enrollment, even if the school they are attending is involved in a boundary change. (i.e. students who are transferring into a school will be allowed to continue to transfer in).
3. What happens to a student enrolled in a district-wide non-attendance boundary school? Students living in a study area who are enrolled in a school without an assigned attendance boundary (i.e. magnet, charter, academy, etc.) will assume to always be enrolled at that school regardless if their study area is reassigned.
4. What happens to a student when a new school is opened? In the case of a school opening with a new attendance boundary, it is assumed that all students in the new proposed attendance boundary who are enrolled at their resident school will be reassigned to the new school. All students not enrolled in their resident school in this area will continue with their current school.
5. What happens to a student when a school is closed? In the case of school closure, it is assumed that all students enrolled in the school being closed will be reassigned back to their school of residence. [Note: Students who are attending the closed school and have been previously excluded from the redistricting process (i.e. students residing outside of the District, special education students etc.) will be left for the District to decide how to reassign these students to other sites.]

The end result is a plan that will allow users to see not only the resident student population totals of each attendance area following redistricting but also the estimated enrollment totals of each school as well. An additional tab is included to show the estimated enrollment totals at each school and can be used to help in short term planning.

Comparing the two sets of numbers gives the user the added advantage of seeing how the District's open enrollment policy and non-attendance area facilities are affecting facility usage as the resident student population numbers of an attendance area can differ greatly from the enrollment totals of the school that an attendance area is serving.

## Redistrict based on a forecast

Create a redistricting plan from an existing forecast.

### Redistrict based on a forecast | SchoolSite Pro for ArcGIS Pro 3.3+

Please Note: You must first create a forecast before creating a redistricting plan based on a forecast.

To create a new redistricting plan based on a forecast, on the SchoolSite ribbon, click Create, then Plan. A Create dockpane will display. Make sure the Forecast tab is selected.

Image: Select the Forecast tab to begin a forecast-based redistricting plan.

Type in the name of your plan and select the type of Plan you wish to create by selecting your District's Elementary, Middle, Intermediate or High School boundaries. You will then select an existing forecast.

Image: Choose an existing forecast and then finish creating the redistricting plan.

Click the Finish button when done. The plan will take a few minutes to create. Plan creation for larger school districts take additional time based upon the number of study areas, number of students, number of fields on the student attribute table and the processing power of your computer.

## Redistrict by changing boundaries and schools

Reassign Study Areas, add or close schools, and immediately see facility impacts.

### Redistrict by changing boundaries and schools | SchoolSite Pro for ArcGIS Pro 3.3+

Using a Study/Planning Area map of the District, alternative school boundary plans can initially be developed based on either existing attendance areas, by closest school, by capacity or by a maximum number of students.

Study Areas can then be individually reassigned to other school locations to balance student population by residence and site capacities. Additional sites can be added simulating the opening of a new school or surplus sites can be deleted simulating the closing of a school.

As boundaries are modified, classroom requirements to house students at each site are reported by grade level. The user can immediately see the effects on facility needs with each plan. The effect of class size reduction at various grade levels has never been easier!

Image: An overview of the Assign ribbon.

Image: An overview of the Appearance ribbon.

Additional topics:

- Change boundaries between schools
- Add a new school
- Add an existing school
- Close schools
- Reassign schools

## Share your redistricting plan

Export plan outputs and prepare results for stakeholders.

### Share your redistricting plan | SchoolSite Pro for ArcGIS Pro 3.3+

SchoolSite Pro and Esri offer multiple ways to share your redistricting plan.

The best way to publish and share your redistricting plan online is by sharing it as a web map or as a web layer. Sharing your data as a web map means that your plan is uploaded online as a whole map, preserving things like layer symbology and including all layers within that map. Sharing your data as a web layer means that your plan is uploaded online as a single layer of data. A web map is composed of web layers.

To do this, go to the first share ribbon. In the Share As section, select either Web Map or Web Layer. A dockpane will appear.

Image: Select Web Map or Web Layer from the Share ribbon to publish the plan.

ArcGIS Online or ArcGIS Enterprise options:

Share as Web Map:

- Name (a unique name of an item that doesn’t already exist on your ArcGIS Online content)
- Summary (a quick summary of the data you are uploading)
- Tags (tags help you quickly find the data in the future)
- Select your desired configuration
- Pick a folder location or create a new one in your ArcGIS online content.
- Choose who you will share this data with.
- After all the required information is filled out, click Analyze. You can proceed to Share if there are no errors and if only warnings exist. Errors will need to be fixed before sharing.
- Click Share.

Here is more information about sharing as a web map:

- Share a web map

Share as a Web Layer:

- Name (a unique name of an item that doesn’t already exist on your ArcGIS Online content)
- Summary (a quick summary of the data you are uploading)
- Tags (tags help you quickly find the data in the future)
- Select your desired layer type. Feature is most common.
- Pick a folder location or create a new one in your ArcGIS online content.
- Choose who you will share this data with.
- After all the required information is filled out, click Analyze. You can proceed to Publish if there are no errors and if only warnings exist. Errors will need to be fixed before sharing.
- Click Publish.

Here is more information about publishing as a web layer:

- Web feature layer overview
- Introduction to sharing web layers

Local export options:

- Export Plan: Export your attendance areas as a feature layer. The results will be located in your project’s default geodatabase.
- Export Statistics: Button is enabled when the stats window is open. Export your SchoolSite Plan’s statistics table in Excel format. The results will be located in your project’s main folder.
- Export Plan as Study Areas: Export your current boundaries in study area format. The results will be located in your project’s default geodatabase.

## The Statistics Window

Inspect student counts and attendance-area totals while developing a plan.

Image: Configure the Statistics Window to monitor plan totals while editing.

### The Statistics Window | SchoolSite Pro for ArcGIS Pro 3.3+

The Statistics Window is a powerful tool that can help you generate reports about your district and view the changes that you’ve made during redistricting.

Configure the statistics table

The Statistics Window allows you to analyze your boundary scenarios based on various student attributes such as grade, ethnicity, loading standards, and projected student residence.

The settings you choose will be displayed in the statistics table.

To access the Statistics Window, go to the redistricting ribbon and click Statistics Window.

Image: The latest Statistics Window table shows the available school, grade, range, and statistic selections.

The Statistics Tab window is divided into four main sections: Select Schools, Select Grades, Select Grade Ranges, and Select Statistic Type.

Select Schools

From the list, choose which schools to display statistics for by checking the box next to each school name. To select all school names, click Select All. To unselect all school names, click on Select None.

These checked schools only affect the schools displayed in the resident tabs of the statistics window. If a plan is created based upon “Current Resident Students and Current Enrollment” the Estimated Enrollment tab will always display all schools including those without attendance boundaries.

Select Grades and Grades Ranges

Selecting grades only applies to the grades you wish to display in the Residence Tab of the statistics window. Residence redistricting can theoretically encompass any grades or grade ranges you desire during the boundary planning process since residency is not concerned with the school of attendance.

You can specify any number of grades or grade ranges you wish as you make resident boundary changes. If a plan is created based upon “Current Resident Students and Current Enrollment” the Estimated Enrollment tab will always display all grades for each school.

Enter the grade ranges you wish to see summarized. Examples of grade ranges would include “K-5, 6-8” or “K-8”.

Statistics Types

This section allows you to report the number of students in each of the selected schools based on various attributes. The Grade Distribution option (default option) reports the number of students in each grade selected. Statistic types only display in the resident tabs of the statistics window. The Estimated Enrollment tab only displays individual grades and grade ranges.

- Grade Distribution: This will allow you to select the individual grades and grade ranges (in the Select Grades section) to display in the statistics window.
- Capacity: This is taken from the “CAPACITY” field in your Schools dataset. It displays the current capacity for each school.
- % Capacity: This reflects the percentage of capacity compared to summarized grade ranges.
- Student Attribute: By default, the grade field is always summarized, but you can summarize any field that you have in your student data such as ethnicity, school of enrollment, gender, ESL, etc. Click on Other Student Attribute and select a field from the student data you want to summarize from the drop-down menu.

Caution: You should not summarize a field that has a lot of unique values, such as student ID. Currently, the limit to the maximum number of unique values allowed in a field to summarize is 150. If you have a fairly large student data set it will take a very long time to summarize and the resulting report will not produce much usable information. Fields such as ethnic and special education will give you valuable information and will take minimal time to summarize.

You can deselect any additional attributes you may have selected by clicking on the grade distribution button again.

Please note: This section will be grayed out if the plan is based on forecasted student data.

Show grades / Show ranges / Display percentage: These three options give you the option of how you want to summarize the “other student attributes”. The statistics window will show the number of students by grade by the selected attribute or totaled by grade range or as a percent of that school’s total population.

Please note: This section will be unavailable if the plan is based upon forecasted student data.

Other Information

Forecast Year

If you created your plan based on forecast data, you can select the pull-down menu in the Statistics tab, and select any year of the forecast to report (including maturation) to view it in the Statistics Window. This is useful for creating one future boundary plan and quickly viewing the forecasted number of students for this plan in various future years.

Image: Use the forecast year drop-down to review future-year plan results.

Please note: If your Statistics Window has no grade ranges specified, then the Projection Summary Report will display either PK-12 or K-12 by default, depending on whether or not you chose to include PK students during plan creation.

## Statistics Window Tabs

Different tabs expose different views of district student data.

Image: Current Residence shows the resident counts before assignments are applied.

### Statistics Window Tabs | SchoolSite Pro for ArcGIS Pro 3.3+

The Statistics Window has multiple tabs. Each tab displays your district’s data in a different way. The numbers in each tab can help you better understand the number of students in your district.

Current residence tab

The Current Residence Tab allows you to preview the statistics before making changes to a plan. The first tab, current residence, shows the number of students by residence before you assign any selected study areas. Once you assign the selected study areas however, the current residence window updates to reflect the adjustment.

Image: Current Residence shows resident counts before changes are applied.

Proposed residence tab

The Proposed Residence Tab displays the changes in resident enrollment based on changes in selected study area assignments. They represent what the changes would be to the plan before you actually commit the changes. After you assign the changes, the current residence will update to reflect what was in the proposed residence.

Image: Proposed Residence previews the impact of pending assignments before they are committed.

Selected tab

The Selected Tab shows the number of students living in the study areas currently selected and waiting to be reassigned. It indicates the number of students in all selected study areas. The difference between current resident school numbers and proposed resident school numbers is the number of students in the Selected tab.

Image: Selected shows students in the currently selected study areas waiting to be reassigned.

Original residence tab

The Original Residence tab displays the statistics before any changes were made. The student numbers in this tab remain static regardless of any assignments made to the plan. It represents the original baseline number of student when the plan was first created.

Image: Original Residence preserves the baseline counts before plan edits.

Residence net change tab

For Redistricting by Current Students

The Net Change tab calculates the total difference between the Original Residence and the Current Residence tab. The total change will always equal zero as some schools gain students and some schools lose students.

Redistricting by projected students

The net change is a combination of projected enrollment changes from the base year of the projection to the year you are currently showing, as well as any boundary changes that will add students or remove students from a given school. In this case the net change will not equal zero; it will reflect the total increase or decrease from the base year to the year being displayed.

Image: Net change compares the base year to the current plan scenario.

The Statistics Window: Estimated Enrollment

Please Note: This tab will only be populated for plans based on current students and current enrollment.

The Estimated Enrollment Tab displays theoretical school enrollment totals as study areas are reassigned. Students are recalculated based upon the grade range specified in the create plan wizard as well as based upon the predefined rules that govern reassignments for plans based on current resident students and current enrollment.

## Forecasts

## Student Forecasts

Project resident and enrollment changes using birth rates, mobility, housing and historical transfer patterns.

### Overview

Using factors such as birth rates, student mobility, and information about future housing developments, SchoolSite can accurately predict changes to both the resident student population as well as provide enrollment forecasts as well by taking into account historical transfer patterns.

### An overview of the Forecast ribbon

Image: The Forecasting ribbon provides access to forecast setup, factor editing, and reporting tools.

### SchoolSite Forecast Key Functions

- Locate potential future school sites
- Determine future school capacity requirements
- Analyze future school attendance boundaries
- Create an unlimited set of projection scenarios based on various factors like birth data, historical enrollment, future development, etc.
- Update projection variables through a spreadsheet-like interface
- 3, 5, 7, or 10 year projections by grade level along with optional “build-out”/maturation projections for long range planning
- Projections and reports are created by study areas, existing attendance zones, user-defined sub-districts, or district wide
- Projections summarized by any grade configuration (K-5, K-6, 7-8, 6-8, etc.)
- Dynamically display enrollment projections in ArcGIS through color shading and map labelling
- Enrollment projections are automatically linked to the Redistricting Extension
- Generate reports to aid in future staffing decisions based on historical data

### Forecast Help Articles

- A tour of the forecast ribbon
- Create a new forecast
- Modify forecast factors
- Generate a forecast report
  - Include maturation data in your forecast
  - Include historical student data in your report
- Configure the look of your map
- Enrollment forecast report
- Development summary report
- Project summary report

## A tour of the forecast ribbon

Understand the forecasting ribbon, factor editing, reports and map display.

Image: The forecast tour introduces setup, reporting, and factor editing.

### Overview

The following is a brief tour of the basics of Forecasts in SchoolSite Pro. You can install sample data from Davis Demographics in order to follow along.

To view forecast reports, modify factors, refresh forecast, and export forecasts, choose the green Forecasting ribbon.

### Forecast Reports

Begin by creating a district wide report:

Click on the Forecasting ribbon, then Forecast Reports. The Setup Tab should display by default. If the View tab is displayed, click on the Setup tab.

1. Display forecast by: choose the radio button labeled District summary.
2. Which district do you want to display? choose the radio button labeled District wide.
3. Grade ranges: choose K-12.
4. How many years of projection to display? click the radio button 10 years.

When you finish with the above steps, your screen should look like the following example:

Image: Forecast setup with district summary, district wide display, and 10-year projection results.

To see the report you have set up, click on the View tab. You may have to adjust the size of the window to see the last few years of the projection.

Image: The district summary shows a straight pass-through projection for the base year 2022.

The district summary above shows the results of a straight pass-through projection for the base year 2022. Next, we will change the birth rate, mobility and residential housing trends and view the results.

### Modify Variables - Birth Rates/K Factors

Click Modify Factors in Forecasting ribbon and choose K Factors. Two dockpanes will display: a setup dockpane and a table dockpane.

In the setup dockpane under Specify study areas to display, choose the radio button All study areas.

There are two ways to edit your K Factors:

- Method 1: Edit by selecting entire column
- Method 2: Edit by selecting individual cells

In the table dockpane, right click on the YEAR1 column name and choose Calculate Field to change the value of the first year of forecasts for all study areas district wide. You can also click on the Calculate button at the top of the table to select the field you would like to change.

Type in the value 1.05 in the box next to YEAR1 and click the Apply button. The values for all study areas in the column will change as illustrated. This factor applies a multiplier of 1.05 (a 5% increase) to the Kindergarten class for the first year of projections for all study areas.

Image: Updated K-factors show the effect of increasing the Kindergarten cohort in year one of the projection.

Double click on the cell you would like to change, and press enter. The Refresh Forecast button will appear in the Forecasting ribbon to update the map.

To view the results of modifying your K Factors, click on the tabs Forecast Reports > View. After allowing the program to calculate the results, you will notice the change in projections as the years progress. Modifying the K Factors affects only the Kindergarten class, however those changes are propagated through the projection by the Kindergarten class matriculation.

You can reset your report to its default values by going back to Modify Factors > K factors > Set Up > Use default values.

Next, we will see the results of modifying a mobility (or cohort) factor for the district.

### Modify Variables - Mobility Factors

Click Modify Factors in Forecasting ribbon and choose Mobility Factors.

1. Grades to display: check grades 1-6.
2. Specify study areas to display choose All study areas.
3. Calculate Mobility type 1.1 in the box next to MF 1. Repeat this step for columns MF2, MF3, MF4, MF5, and MF6, all with the value 1.1.

Mobility rates affect each year of the projections. The mobility factors are multiplied by each grade which in turn produces the number of students for the next grade the following year. For example, if you have 100 1st grade students in 2010 and multiply that number by a 1.1 (10%) mobility rate, there will be 110 2nd grade students in 2017. In other words, each grade's incoming class is modified by the appropriate mobility factor regardless of the class size.

To view the results, click on the Report Tab and view the projection district wide again. Notice the change in projections again. Grades 7-12 will remain with the default 1.00 mobility rate.

Please note: We are applying this same cohort factor for every study area across the district. There are options to apply different cohorts or mobility factors to different study areas or attendance areas within the district.

### Modify Variables - Student Yield Factors and Development

Click Modify Factors in Forecasting ribbon and choose Student Yield Factors.

1. Specify types to display check only the box next to Type 1. Type 1 represents Single Family Dwelling Units in this example.
2. Modify student yield factors: type in the values shown below.

Image: This example assumes a specific student yield for each housing type.

In this example, we are assuming that 0.2527 K-6 students will be generated for every Type 1 Single Family Detached (SFD) Unit. In addition, 0.1371 7-8 students and 0.1733 9-12 students will be generated from each new housing unit.

## Create a new forecast

Create a residential forecast with optional tract and assessor data.

Image: Create a forecast by naming the map, selecting student types, and choosing a base year.

### Overview

To create a forecast, on the SchoolSite ribbon, click Create then Forecast.

Type in the name of your forecast and select the student types you wish to include in the forecast, such as Resident, Special Education, Independent Study, Charter, and Other.

Select the base forecast date and then finish the wizard to generate the forecast map.

### Create the forecast

Image: The Create Forecast form is used to name the forecast and select the population included in the model.

Image: A completed forecast setup includes the name, student types, and base forecast date.

Once the forecast has completed, it will be added to the table of contents as a map and displayed in light blue.

To modify factors such as birth rates, mobility, student yield, and housing assumptions, click Modify Factors on the Forecasting ribbon.

### Optional tract and assessor data

Tract data describes the location and phasing for planned residential development within the District. Including tract data allows your forecast to account for future housing development and generate development summary or project summary reports.

If you imported tract data in Data Setup, you can choose to use it in your forecast by checking Use Tract Data and selecting which tract dataset to include.

Assessor data contains parcel information that has been geocoded to a street network. Including assessor data allows maturation and build-out information to be added to the forecast. This information is used in projected housing units and student yield calculations.

The housing types in the assessor file should match the housing types defined in the tract dataset. Once all fields are properly filled in, click Finish to create the forecast.

### Copy a forecast

You can also create a new forecast by copying an existing forecast. This is useful when you want to make initial base changes that should apply to all later variations.

From the Catalog pane, open Maps, find the map that contains the forecast, right-click it, choose Copy, then right-click the Maps folder and choose Paste. A copy of the forecast will appear with the same name and a number appended.

You can then rename the forecast map as needed. SchoolSite Pro will update the forecast tables and name references automatically.

## Modify forecast factors

Adjust the variables that drive residential forecasting and housing projections.

### Overview

SchoolSite gives you the ability to create factors for 10-year forecasts through the Modify Factors command on the Forecasting ribbon.

To access the Modify Factors dockpane, open your forecast map and click Forecasting ribbon > Modify Factors.

There are different factors that you can modify for your 10-year projections. To choose which factor to modify, click the drop-down menu under Specify variable and select one of the following options:

### Available factors

- PK and K Factors (Birth Rates)
- Distributed Enrollment
- Mobility Factors
- Student Yield Factors
- Projected Housing Units
- Maturation
- Student Counts

### How to use the dockpane

Each factor contains a setup section and a table of values for the selected geography and grade range. You can review assumptions by study area, adjust factors, and then refresh the forecast to update the projection map and reports.

Some factors affect the Kindergarten cohort, mobility by grade, housing yield assumptions, or the development-based maturation model. Adjusting the factors lets you test alternative scenarios before finalizing boundary or staffing decisions.

## Generate a forecast report

Configure and export forecast results by geography, grades and projection years.

### Overview

Forecast Reports button on the Forecasting ribbon allows you to set up, generate, view, and export the results of your forecasts.

On the Forecasting ribbon, click Forecast Reports. A dockpane will display.

There are two tabs in the dockpane: Setup, and View.

The setup tab appears first by default. From the setup form, you can indicate what forecasts (geographic areas, grade ranges, etc.) you wish to display in the view tab.

There are four criteria to set up for your forecast:

- What do you want to display? (study areas, attendance areas or district summaries)
- Which district do you want to display?
- What grades and grade ranges to display?
- How many years of projections to display?

You can also choose to display maturation and/or display historical student data.

### What do you want to display?

The first option What do you want to display? has three choices: By Study Area, By Existing Attendance Area, and By District Summaries. Depending on which selection you make, additional choices on the setup form will appear.

“By Study Area” will display the forecasts for each study area you have chosen to display. You have three options, as shown below. They are: study areas you currently have selected on the map, a single study area which you choose from the drop down menu, or all study areas. The choice Currently Selected on the Map is only available (i.e. not grayed out), if you have selected study areas on your map.

“By Existing Attendance Areas” will display the forecasts for the chosen attendance area(s) for whatever grade level you choose. Attendance area forecasts are, in essence, a summarization of all the individual study areas forecasts making up the attendance area. After choosing the school type, choose either a single attendance area (which you select from the drop down menu), or all attendance areas (all of that school type). The third option is to display all schools by type (elementary, middle or high) that are contained within a selected subdistrict. A subdistrict refers to the district field within the study area dataset. Many times there are values in the “district” field that indicate additional geographic areas such as board trustee areas, city boundaries etc. If you have coded your study areas with unique subdistrict values, you may select and display attendance area forecasts that fall within the selected subdistrict.

“By District Summary” will summarize all study areas and display them as a district wide report or you can choose a subdistrict.

## Include historical student data in your report

Include up to three years of historical data and choose a weighted mobility option.

### Include historical student data in your report

SchoolSite Pro gives you the option to include up to three years of historical data into your forecast report. Adding two or three years of historical data helps to generate a more accurate forecast report for your district. It will help when analyzing trends and patterns in your district’s data.

### How to add historical student data to your project

You can add historical student data to your report at any time. On the SchoolSite ribbon, click Data Setup. A dockpane will show up called Data Setup. Under Historical Students, click the yellow folder icon next to 1 year ago to browse for your student data from one year ago. If you already have the data in your map, you can search for that layer’s name in the dropdown menu.

Repeat this step for data from 2 years ago. If you only have two years of data, you can proceed. Otherwise, you can repeat the same steps for data from 3 years ago.

Under Weighted Mobility Options, select one of the three options:

- No weight
- Weight most recent (Current x3)
- Weight least recent (Three years ago x3)

When you are finished, click Import.

### How to display historical student data on your forecast report

Displaying your imported historical student data on your forecast report is easy. On the Forecasting ribbon, click Forecast Reports. A dockpane will show up called forecast Report. If you have imported your historical student data, click the box next to Display historical student data. Then click Run. You will notice that your report now includes two or three additional columns of historical student data to the leftmost of your original report.

## About Enrollment Forecasts

Estimate future school enrollment for short-term staffing and budget planning.

### Overview

SchoolSite Enrollment Forecast is a way to ensure your district has the appropriate staff to fulfill future classroom requirements.

SchoolSite Enrollment Forecasts use current resident and enrollment information, along with historic student mobility, to calculate an estimated enrollment for each school. This method helps evaluate the current state of facilities and future staffing needs.

Historical students are selected based on the same criteria used to generate the residential forecast. If your residential forecast included special education or independent study students, those student types are included when calculating transfers into and out of a school’s attendance zone.

### Two-year enrollment forecasts

Mid-term to long-term facilities planning is best when it is based on the resident location of future student populations, rather than the enrollment at individual schools. However, a two-year forecasted enrollment can be used to estimate staffing and budget requirements over the short term.

The model uses current resident and enrollment information as well as recent transfer history to estimate how many students will be in each school over the next two years.

### Methodology for schools with attendance boundaries

Calculating an enrollment forecast for schools with attendance boundaries is different from calculating it for schools without attendance boundaries. For schools with attendance boundaries, the two-year forecasted enrollment is calculated by combining future resident population and historic transfer patterns for each school.

Similar to mobility factors in residence forecasts, a cohort is derived by averaging four years of past transfer patterns. The cohort is calculated for transfers into and out of each school for each grade between 1 and 12 that the school serves. The estimate is then applied to the current transfer-by-grade pattern to project future enrollment for each grade.

### Methodology for schools without attendance boundaries

To calculate an enrollment forecast for schools without attendance boundaries, a different method is used. Transfers in and transfers out for the lowest grade served at each school are estimated by taking an average of the last four years of transfers. Each subsequent grade is calculated using the non-weighted cohort survival method and applied to the current year’s enrollment.

This approach provides a practical estimate of future staffing loads where attendance boundaries do not necessarily define the student population in the same way as a traditional neighborhood school.

## Reports

## Reporting in SchoolSite Pro

A map of every report type available across Data Setup, Redistricting, Forecasting and Analysis.

### Where reports live

Reports are spread across three ribbon locations: the Statistics/Info groups on the Assign contextual tab, the Forecast Reporting group on the Forecasting tab, and the Analysis Tools group on the main SchoolSite tab.

### Report families

Student & Demographic reports summarize who is where right now. Plan & Forecast reports summarize scenario and projection results. Program & Utilization reports summarize capacity and program placement.

### Export formats

Most reports can be exported to Microsoft Excel (.xlsx); forecast-oriented reports can also be exported to plain text (.txt) for quick review or import into other systems.

## Esri Business Analyst Services

## Demographic Reports

Create demographic and community reports for a selected study area using Esri Business Analyst Online data.

Image: Student and Demographic Reports summarize who is where right now.

### Overview

The Demographic Reports tool creates demographic and community reports for a selected study area using Esri Business Analyst Online data. You can define the study area by drawing an area on the map, selecting polygon features, creating an area around a point, or generating reports for all polygons in a selected polygon layer.

### When to use it

- Generate demographic information for a specific geographic area.
- Review population, housing, income, age, and other demographic characteristics.
- Create reports for selected polygon features.
- Generate reports around a point using a distance, drive time, or drive distance.
- Create reports in PDF or Excel format where supported.
- Generate multiple reports for all polygons in a layer.

### Report types

- 2010 Census Profile
- 2020 Census Profile
- ACS Housing Summary
- ACS Population Summary
- ACS Key Population & Household Facts
- Age 50+ Profile
- Age by Sex by Race Profile
- Age by Sex Profile
- Community Profile
- Demographic and Income Profile
- Detailed Age Profile
- Disposable Income Profile
- Dominant Tapestry Map
- Household Income Profile
- Housing Profile
- ArcGIS Tapestry Profile
- Traffic Count Map
- Traffic Count Map - Close Up
- Traffic Count Profile

### Study area selection

- Draw Polygon — Draw a polygon directly on the map to define the area for the report.
- Select by Polygon Layer — Select a polygon layer from the active map and select one or more polygon features. The selected features are used as the study areas for the report.
- Area Around a Point — Select a point layer and create a study area around the point. Available area options are Ring Buffer, Drive Time, and Drive Distance.
- All Polygons — Select a polygon layer to generate a separate demographic report for every polygon feature in the layer.

### How to use

- Open Demographic Reports.
- Select the required Report Type.
- Select how you want to define the study area: Draw Polygon, Select by Polygon Layer, Area Around a Point, or All Polygons.
- Define the study area using the selected method.
- If using Area Around a Point, select the area type and enter the required distance or time.
- Open Preferences if you want to provide additional report information or change the output format.
- Click Generate Report.
- Sign in to ArcGIS Online if prompted.
- Review the estimated cost when generating reports for multiple polygons.
- Confirm the operation.
- Save the generated report to the desired location.

### Report preferences

The Preferences option allows you to provide additional information for the generated report, including location name, address, area description, and output format. The report includes the SchoolSite Pro attribution: Prepared using SchoolSite Pro by MGT Impact Solutions.

### Output formats

Reports can be generated in PDF or Excel (.xlsx). Some map-based reports, including Traffic Count Map and Tapestry Map reports, are generated as PDF reports.

### Batch reports

When All Polygons is selected, the tool generates a separate report for each polygon feature. The tool calculates the number of polygon features, displays the estimated cost before processing, allows you to confirm or cancel the operation, prompts you to select a folder for saving the reports, and saves each report separately using the feature Object ID in the filename. For example, GeoReport_101.pdf and GeoReport_102.pdf.

### ArcGIS Online requirements

- You must be signed in to an active ArcGIS Online portal in ArcGIS Pro.
- You must have access to the required ArcGIS Online services.
- You must have sufficient ArcGIS Online credits for the requested reports.
- You must have an active map and valid input layers when using layer-based options.

### Batch report limit

The All Polygons option supports batch generation for up to 100 polygon features at a time. If the selected polygon layer contains more than 100 features, the tool displays a warning and does not start the batch operation.

### Notes

- Demographic information is obtained from Esri's online Business Analyst data services.
- An internet connection is required.
- ArcGIS Online credits may be consumed when generating reports.
- The tool displays an estimated cost before generating batch reports.
- The selected study area determines the geographic extent of the report.
- Generated reports are saved to a location selected by the user.
- Map-based reports are generated as PDF files.

### Esri References

- Esri GeoEnrichment API Documentation
- Sample Reports

## Walk Zone Analysis

Create travel-time and distance service areas around selected schools using network analysis.

Image: Walk Zone Analysis creates service areas around schools based on travel time or distance.

### Overview

The Walk Zone Analysis tool uses network analysis to create zones around selected schools based on a specified travel distance or travel time. You can create walk or drive zones around one or more schools and define multiple break values to create different service areas for each school.

### When to use it

- Identify areas that can be reached from schools within a specified travel time or distance.
- Create school walk zones.
- Analyze areas based on walking or driving accessibility.
- Compare multiple travel-time or distance thresholds.
- Generate service areas for multiple schools at the same time.

### Input data

- School Layer — Select a point feature layer containing the schools to be analyzed. The selected school layer must contain the required school information, including the school name field.
- Schools — After selecting a school layer, the available schools are displayed in the school list. You can select individual schools, select multiple schools, or use Select All to select all available schools.

### Travel mode

- Walk Distance (Miles) — Creates zones based on walking distance.
- Walk Time (Minutes) — Creates zones based on walking time.
- Drive Distance (Miles) — Creates zones based on driving distance.
- Drive Time (Minutes) — Creates zones based on driving time.

### Break values

Enter one or more break values separated by commas. For example, 5,10,15. The values represent the distance or travel-time limits based on the selected travel mode. Examples include Walk Time (Minutes): 5,10,15; Walk Distance (Miles): 0.5,1,1.5; Drive Time (Minutes): 10,20,30; and Drive Distance (Miles): 5,10,15. Multiple break values create multiple service-area zones around each selected school.

### Zone options

The tool provides an option to control how the service-area polygons are created at the specified break values. When enabled, polygons are split at each break value, allowing separate zones to be created for each travel-time or distance range.

### How to use

- Open Walk Zone Analysis.
- Select the School Layer.
- Select one or more schools from the school list.
- Select a Travel Mode.
- Enter the required Break Values, separated by commas.
- Select the required zone option.
- Click Run.
- The tool performs the network analysis using ArcGIS Online.
- The resulting walk zones are added to the active map.

### Analysis method

The tool uses ArcGIS network service-area analysis to determine the areas that can be reached from the selected school locations. The analysis considers selected school locations, the selected travel mode, travel time or distance, specified break values, and the available road and transportation network. The resulting polygons represent the areas reachable within the specified travel limits.

### Outputs

The tool creates a WalkZones feature class in the project's default geodatabase. The output contains information such as FacilityID, FromBreak, ToBreak, and StudyArea. The resulting feature class is automatically added to the active map.

### Example

If you select School: Lincoln High School, Travel Mode: Walk Time (Minutes), and Break Values: 5,10,15, the tool creates service-area zones representing areas reachable from Lincoln High School within the specified walking-time ranges. If multiple schools are selected, corresponding service areas are created for each selected school.

### ArcGIS Online requirements

- You must be signed in to an active ArcGIS Online portal in ArcGIS Pro.
- You must have access to the required network analysis services.
- You must have sufficient ArcGIS Online credits for the analysis.
- You must have a valid school point layer.
- You must select at least one school.

### Validation

The Run button is available when a school layer has been selected, at least one school has been selected, a travel mode has been selected, and valid break values have been entered. Break values must be numeric and separated by commas.

### Notes

- The analysis uses the ArcGIS Online transportation network.
- Walking options are intended for pedestrian accessibility analysis.
- Driving options are intended for vehicle accessibility analysis.
- Break values should be entered using the units associated with the selected travel mode.
- Multiple break values can be used to create multiple service-area ranges.
- The generated output is stored in the project's default geodatabase.
- An internet connection and ArcGIS Online sign-in are required.

### Esri References

- SolveServiceArea

## Program Placement Analysis (Location Allocation)

Identify the optimal school locations that best serve student demand while considering capacity and the number of facilities to select.

Image: Location Allocation identifies optimal school locations.

### Overview

The Location Allocation tool identifies the optimal school locations for serving student demand. It uses student locations, school candidate locations, school capacities, and the requested number of optimal locations to perform the analysis.

### When to use it

Use the Location Allocation tool when you want to identify optimal locations from a set of candidate schools, determine which schools can best serve student demand, consider school capacity when selecting locations, and visualize the allocation of students to selected school locations.

### Input data

- Student Layer — A point layer representing student demand locations.
- School Layer — A point layer containing the schools that can be considered as candidate locations.
- Candidate Schools — The schools from the selected school layer that should be included in the analysis.
- School Capacity — The capacity assigned to each selected school.
- Number of Optimal School Locations — The number of school locations that the analysis should identify.

### How to use

- Open the Location Allocation tool.
- Select the Student Layer.
- Select the School Layer.
- Select the schools to be considered as candidate locations.
- Enter a capacity for each selected school.
- Select the Number of Optimal School Locations.
- If More than 10 is selected, enter the required number of locations.
- Click Run.
- Review the estimated ArcGIS Online credit usage.
- Confirm the analysis to continue.
- Review the output layers added to the map.

### Selecting schools

- The school list displays the schools available from the selected school layer.
- Select the schools that you want to consider as candidate locations.
- When a school is selected, you will be prompted to enter its capacity.
- If you want to use the same capacity for all schools, use the Select All option and enter the capacity when prompted.

### Selecting optimal locations

Select the number of locations that you want the analysis to identify. Available options include 1–10 and More than 10. The number of optimal locations must not exceed the number of selected candidate schools. For example, if you select five candidate schools, you can request up to five optimal locations.

### Analysis method

Location Allocation uses the Maximize Capacitated Coverage method. The analysis considers student demand locations, candidate school locations, school capacity, number of facilities to select, and travel time between demand points and facilities. The analysis determines which candidate school locations provide the best coverage of student demand while considering the capacity of each facility.

### Outputs

- Output Facilities — Displays the school locations selected by the analysis.
- Output Demand Points — Displays the student demand points used in the analysis.
- Output Allocation Lines — Displays the allocation relationship between student demand points and the selected school facilities.
- These output layers can be used to review and visualize the results of the analysis.

### ArcGIS Online credits

The Location Allocation tool uses an ArcGIS Online analysis service and consumes organizational credits. The tool displays an estimated credit cost before the analysis is submitted. Review the estimated cost and confirm that your organization has sufficient credits before proceeding.

### Requirements

- You must be signed in to an active ArcGIS Online organization.
- A valid student layer must be selected.
- A valid school layer must be selected.
- At least one candidate school must be selected.
- Each selected school must have a valid positive capacity.
- The number of optimal locations must not exceed the number of selected candidate schools.
- Sufficient ArcGIS Online credits must be available.

### Notes

- Location Allocation uses student points as demand locations.
- Each student demand point is treated as one unit of demand.
- School capacities are specified by the user during the workflow.
- The analysis uses travel time in minutes.
- The analysis is performed using ArcGIS Online services and requires an internet connection.
- Output layers are created in the project's default geodatabase and added to the active map.

### Esri References

- Location Allocation Service Job

## Manage data

## How To Create Your Own Data

Prepare the source GIS datasets required for SchoolSite Pro workflows.

### How To Create Your Own Data | SchoolSite Pro for ArcGIS Pro 3.3+

To use either of the SchoolSite Pro extensions, three major datasets are required: Study Areas, Students, and Schools.

For the SchoolSite Pro Forecasts extension, there are also optional datasets that may be included: Streets, Tracts, and Assessor data.

Each dataset has specific attribute requirements, and additional fields may be added as needed. These datasets should be created and saved in an Esri-supported format, such as a file geodatabase.

### Dataset guides

- Study Areas
- Students
- Schools
- Streets
- Tracts
- Assessor data

### Important notes

- The spelling of each required field must match the field names shown in the help documentation.
- Any null values in required fields should be converted to an empty string before using the data.
- SchoolSite Pro does not support special characters such as periods, commas, ampersands, dashes, or slashes in required fields.
- If a field is defined as a short integer, it cannot contain values longer than four digits. Use a long integer if you need larger values.

### Related topics

- Creating Study Areas
- Creating Students
- Creating Schools
- Creating Tracts
- Creating Assessor Data
- Creating Streets

## Creating Study Areas

Create the polygon feature class used as the geographic foundation for plans and forecasts.

Image: Study Areas are polygon units used throughout SchoolSite Pro.

### Creating Study Areas | SchoolSite Pro for ArcGIS Pro 3.3+

Study Areas - a polygon feature class

Study Areas are the building blocks of a school district. Study areas grouped together (and coded to specific school ID numbers) form attendance boundaries.

Study Areas are geographically defined, following logical boundaries of a neighborhood, and are used for boundary planning and generating small area enrollment forecasts. SchoolSite Pro does not use separate feature classes for each set of school attendance areas. Using a unique field coding method, all attendance areas are stored within the Study Area feature class attribute table.

### Source

Districts with established Study Areas need to map and enter the information into a geodatabase feature class or a shapefile. If your district does not have existing Study Areas, create a Study Area feature class or shapefile based on the criteria described in the next topic, â€œWhat Are Study Areas?â€ Once the district is divided into Study Areas, populate the attribute table. This involves coding each Study Area to an elementary, middle, intermediate and high school of assignment.

### Required fields

1. **STDYAREA** - A field containing the unique number of the study area, defined as data type “Text” with a length of 6. No duplicate values and no special characters.
2. **ELEM_** - A field containing the Elementary School number the study area is assigned to, defined as data type “Short Integer”. If one record has ELEM_ > 0, then all records must have ELEM_ > 0.
3. **MID_** - A field containing the number of the Middle School number the study area is assigned to, defined as data type “Short Integer”. If one record has MID_ > 0, then all records must have MID_ > 0.
4. **INT_** - A field containing the number of the Intermediate School number the study area is assigned to, defined as data type “Short Integer”. If one record has INT_ > 0, then all records must have INT_ > 0.
5. **HIGH_** - A field containing the High School number the study area is assigned to, defined as data type “Short Integer”. If one record has HIGH_ > 0, then all records must have HIGH_ > 0.
6. **DISTRICT** - A field containing a six-letter code used to report and summarize portions of the District, defined as data type “Text”. Examples are: Elementary district code for a Union High School district, School Board or Trustee area or any other values for which you wish to summarize projections by area. The DISTRICT field should be defined as data type “Text” with a maximum length of 50.
7. **MOBILITY** - A field containing a 1-letter code used to indicate the Study Areas inclusion in the Mobility calculation. A value of ‘Y’ indicates that the study area should be included in the Mobility calculation and a value of ‘N’ indicates that study area should NOT be included in the Mobility calculations. The MOBILITY field should be defined as data type “Text” with a length of 1.

### Coding Study Areas

Any area that is created must be coded. If you have a polygon within the district that is not assigned to any school, such as an area for a lake, you need to code the ELEM_, MID_, INT_, and HIGH_ fields with the number 9999. This will avoid receiving an error for an un-coded polygon as the software will recognize it as a properly unassigned polygon.

### Additional fields

1. **REGION1** - A field containing the name of a region the study area is assigned to that a user would like to be able to report on, i.e. Board Trustee Areas, Transportation Service Areas, Zip Code, etc. The REGION1 field should be defined as data type “Text” with a length of 50.
2. **REGION2** - A field containing the name of a second region the study area is assigned to that a user would like to be able to report on, i.e. Board Trustee Areas, Transportation Service Areas, Zip Code, etc. The REGION2 field should be defined as data type “Text” with a length of 50.
3. **ELEM_DESC** - A field containing the name of the Elementary School that the study area is assigned to. The ELEM_DESC field should be defined as data type “Text” with a length of 50.
4. **MID_DESC** - A field containing the name of the Middle School that the study area is assigned to. The MID_DESC field should be defined as data type “Text” with a length of 50.
5. **INT_DESC** - A field containing the name of the Intermediate School that the study area is assigned to. The INT_DESC field should be defined as data type “Text” with a length of 50.
6. **HIGH_DESC** - A field containing the name of the High School that the study area is assigned to. The HIGH_DESC field should be defined as data type “Text” with a length of 50.
7. **TRUSTEE** - A field containing the Trustee area the Study Area is in. The TRUSTEE field should be defined as a “Short Integer”.

### Additional fields

The following fields are required for SchoolSite Pro Locator, but are only used for Study Areas that are in split attendance areas or optional areas.

### Additional fields

1. ADD_SCHL1 - â€œShort Integerâ€ and not null
2. ADD_SCHL2 - â€œShort Integerâ€ and not null
3. ADD_SCHL3 - â€œShort Integerâ€ and not null
4. ADD_SCHL4 - â€œShort Integerâ€ and not null
5. ADD_SCHL5 - â€œShort Integerâ€ and not null

### Related topics

- What are Study Areas?
- Creating Students
- Creating Schools
- Creating Tracts
- Creating Assessor Data

## Creating Students

Create the point feature class that supplies resident and enrollment student records.

### Creating Students | SchoolSite Pro for ArcGIS Pro 3.3+

Students - a point feature class

The student point feature class is created by geocoding a table of student information to a street centerline layer, address point layer or other reference data typically used for geocoding. When geocoding students to street centerlines, it is important to use offset parameters to be sure that student points are not placed directly on a street and they fall within a distinct study area and attendance boundary. It should be noted that in order to effectively develop enrollment forecasts, you will need a minimum of three years (preferably four years) of geocoded students all extracted from the SIS at, or close, to the same date each year. That date is usually the fall reporting period each year for fall-generated forecasts.

### Source

This data comes directly from the Districtâ€™s student information system (SIS) and is downloaded in one of the following formats and imported into a geodatabase table ready for geocoding. The downloaded data should be exported from the SIS into either Excel (.xlsx), comma or tab-delimited text (.csv) or dbase (.dbf).

### Required Fields

There are three required fields that must be added to the geocoded student attribute table in order for SchoolSite Pro to properly identify students to be excluded or optionally included in the enrollment forecasts or various types of redistricting plans.

1. GRD - This field is defined in ArcGIS as a â€œShort Integerâ€ field and should only contain numeric values, typically ranging from 0 through 12, and sometimes -1 and/or -2. 0 represents kindergarten, -1 or -2 would represent TK or PK (see discussion below). The Districtâ€™s student data downloaded from the SIS may include a Grade or other named field, but the values in that field many times include characters other than numbers such as KA or KP, PK, or some other value of the Districtâ€™s choosing. This type of data is not recognized for use with SchoolSite Pro and those values must be transferred or interpreted to include only numeric values in the GRD field. The GRD field with standardized grade values is critical to both the forecasting model and redistricting plans.
2. SCHL_CODE - This field is defined as a â€œShort Integerâ€ and contains the school ID or program ID number of the studentâ€™s school or program of attendance. It is critical that the ID number in the student table matches a corresponding point with the school ID in the schools point feature class (i.e. there needs to be a location where the student is attending school). Student cannot have 9999 in the SCHL_CODE field. Students cannot be coded to school code 0. For example, a student cannot have SCHL_CODE = 0.
3. STUTYPE - This field is used to identify certain types of students that will be excluded or optionally included in the enrollment forecast model as well as students that will be excluded from boundary planning (i.e. a particular group of students donâ€™t move during a boundary change). The STUTYPE field is defined as a â€œtextâ€ field of 2 characters in length.

### STUTYPE Field Explained

The STUTYPE field contains numerous two-letter code values to identify and standardize various types of students, whether they are special education, pre-kindergarten, home study, etc. The reason these students are identified with a STUTYPE code is because certain students may or may not take classroom space which is relevant to the discussion of forecasts and facility needs, and in other instances certain types of students may need to be identified as not being moved in certain redistricting scenarios (i.e. special day class in self-contained classrooms).

Student type classifications are prioritized where some student classifications take precedence over others. This can happen when a student can be classified under two or more different codes. For example, if a student lives outside the district but is also a special education student.

It is also critical that STUTYPE classifications be consistent between different yearâ€™s student geocoded data. If certain students are being excluded in development of enrollment forecasts from the most current student data file, those same students, based upon the codes, will be excluded from previous years in the forecast calculations. The mathematical calculations in the forecasts may be in error if there is no consistency in coding different student types from year to year.

The two-letter STUTYPE codes used by SchoolSite Pro are explained below and are listed in order of precedence for coding each student record:

- Charter School student (CH) - Students residing within the District boundary attending a charter school. These students usually do not take classroom space in one of the Districtâ€™s regular public schools. These types of students can be optionally included in resident forecasts and resident redistricting plans and are always included in reports for staffing forecasts and redistricting plans based upon enrollment.
- Adult Education student (AD) - Adult education students are usually not included in a student data file, however if they are they are coded with AD. Typically these students do not require a seat in the public schools. They are automatically excluded from both enrollment forecasts and all types of redistricting plans.
- Non-Public student (NP) - Students attending a program or school not typically provided by the school district. These may be students in a county program or other situation where classroom space is not used. They are automatically excluded from both enrollment forecasts and all types of redistricting plans.
- Other student (OT) - This is a miscellaneous student type to be used in cases where no other student type is appropriate. Identifying students as â€˜otherâ€™ can be useful to identify special groups of students who you may wish to include or exclude from forecasts or redistricting plans. These types of students can be optionally included in resident forecasts and resident redistricting plans and are always included in reports for staffing forecasts and redistricting plans based upon enrollment.
- Alternative Education student (AE) - This is a blanket term utilized for students not enrolled in a traditional form of education. This may be online classes, vocational programs or programs for students with social or behavior problems. They are usually identified separately from other students as they do not take traditional classroom space. They are automatically excluded from both enrollment forecasts and all types of redistricting plans.
- Home/Hospital student (HH) - Home schooled or students located in hospitals donâ€™t traditionally take classroom space. They are automatically excluded from both enrollment forecasts and all types of redistricting plans.
- Special Education student (SE) - Special education programs can take many forms, from remedial reading and part-day pull out programs to severely disabled students who require special classroom facilities. For use in SchoolSite Pro, the SE code is reserved for the later types of students; those who require special facilities and therefore are not involved in boundary changes and for which you may not wish to include in traditional enrollment forecasting methodologies. Students in part-time resource specialist types of programs who are usually mainstreamed with other students in the schools are not considered SE. Special education usually represents approximately 2-3% of the Districtâ€™s student population. These types of students can be optionally included in resident forecasts and resident redistricting plans and are always included in reports for staffing forecasts and redistricting plans based upon enrollment.
- Independent Study student (IS) - Students guided by a teacher but usually does not take classes with other students every day. These could also be online students. These students may or may not require a seat in a public school. These types of students can be optionally included in resident forecasts and resident redistricting plans and are always included in reports for staffing forecasts and redistricting plans based upon enrollment.
- General Education K-12 student (GE) - Regular students in kindergarten through 12th grade residing within the Districtâ€™s boundaries and is not classified as being in any of the programs above. These students are the bulk of your student population and are always included in redistricting plans and forecasts.

### How Classification Codes are used in SchoolSite Pro Redistricting Plans

There are three types of redistricting plans that can be created in SchoolSite Pro:

- Plan by Current Resident Students
- Plan by Projected Resident Students (i.e. forecasted students)
- Plan by Current Resident and Enrollment

There are slight variations in how classification codes are used in creating each type of plan.

### Current Resident Students Plan

During setup for Current Resident Students, non-K12 students as well as the following classes of students are automatically excluded from boundary planning as well as reporting in the plan statistics window: AD, NP, AE, HH

During setup for Current Resident Students, in addition to students coded as GE, you have the option of including the following classes of students: CH, OT, SE, and IS.

Including any of these five classes of students will involve those students being moved during the boundary planning process and they will be included in the statistics window under the appropriate grade levels.

### Projected Resident Students Plan

The students moved as well as reported in the statistics window are those that were included or not included by choice in the development of the enrollment forecasts being referenced in the plan. For example, if special education students were excluded from the forecasts, they will not be in the forecasted numbers used in the boundary plan.

### Current Enrollment Plan

During setup for plans based upon Current Enrollment, the software will determine which students are outside the District (OD) or non-geocoded (UM). Those students will not be moved during the boundary planning process. In the statistics window non-resident and unmatched students will be listed by their school of enrollment under a separate OD_UM column. Of the remaining geocoded students residing in the District, those students outside of grades -1 through 12 are automatically excluded from the boundary planning process but are reported with their enrolled school under the Non_PK12 column in the statistics window.

Once the non-resident, unmatched and non-PK12 students have been identified, you have an option to choose a field in your student data to identify which of the remaining -1 through 12th grade students you may wish to exclude from boundary planning and reporting. The default field is STUTYPE. Using the STUTYPE field, you have the option of excluding any of the remaining classes of students, such as SE, OT, IS, CH, etc. For those that you choose to exclude, they will not be moved during the boundary planning process, however, they will appear as part of the enrollment at their school under a separate column in the statistics window similar to Non_PK12 and OD_UM.

If you choose not to exclude them from boundary planning, they will be treated as a regular student and will be subject to moving during the boundary planning process and will be reported under the appropriate grade level in the statistics window.

If you choose an optional field other than STUTYPE to identify classes of students, you can create any classification codes you wish to identify students to be excluded from the boundary planning process. The out of District, unmatched and non-PK12 tests will still be performed, but you are provided unlimited flexibility as to how to code and select the remaining resident PK/TK through 12th grade students for boundary planning. For example, you could code a group of students in a specific program such as dual language program offered only at specific schools to be excluded from the boundary planning process so they remain at the program school. Or you may choose more specific codes for handling special education classes.

### How Classification Codes are used in SchoolSite Pro Enrollment Forecasting

There are essentially two types of forecasts that can be created in SchoolSite Pro: student residence and optionally school of enrollment.

The standard forecast model within SchoolSite Pro includes forecasts by residence at the study area level. Utilizing those forecasts by residence is the basis for setting up any redistricting plans based upon Forecast Resident Students. So if there are any students excluded from a forecast based upon a STUTYPE classification, those same students will be excluded from any Forecasted Resident Student redistricting plan.

An option is available to create school of enrollment forecasts (i.e. staffing forecasts) which are derived from the resident forecasts.

### Resident Forecasts

The use of the STUTYPE field and the classification of students for creating a resident forecast operates similar to the setup of a redistricting plan using resident students.

During setup for resident forecasts, grades -1 through 12 are automatically included for forecasting and the following classes of students are automatically excluded from the forecast calculations as well as any reports based upon the forecasts: AD, NP, AE, HH

During setup for resident forecasts, in addition to grades -1-12 GE students, you have the option of including the following classes of students: CH, OT, SE, and/or IS. If you include these students they will be incorporated in the forecasts along with all other students at their appropriate grade level. If you choose not to include them, they will not appear in the forecasts or any reports.

### School of Enrollment (Staffing) Forecasts

Because school of enrollment forecasts are based on the underlying resident forecasts, the decisions you make about including or excluding students for your resident forecasts carry over into the school of enrollment forecasts. For example, excluding special education (SE) from your resident forecasts excludes them from school of enrollment forecasts. There are a few exceptions in that out-of-district and unmatched students are included in the school of enrollment forecasts. To learn more about how school of enrollment forecasts are calculated, see the following help topic.

### Davis Demographicsâ€™ Student Type Classifications in order of priority

Student Types used in Redistricting Plans (for students with grades -1 through 12)

| Code | Student Type | Plans by Residence | Plans by Enrollment | Plans by Forecasted Students |
| --- | --- | --- | --- | --- |
| NP | Non-public student | Excluded | Included | Excluded |
| AD | Adult education | Excluded | Included | Excluded |
| AE | Alternative education student | Excluded | Included | Excluded |
| HH | Home/hospital student | Excluded | Included | Excluded |
| OT | Other student | Optional | Included | *Inherited |
| CH | Charter school student | Optional | Included | *Inherited |
| IS | Independent school student | Optional | Included | *Inherited |
| SE | Special education student | Optional | Included | *Inherited |
| GE | Resident K-12 student | Included | Included | Included |

*Inherited indicates that student type will be included if the residential forecast included that optional type during setup.

Student Types used in Forecasts (for students with grades -1 through 12)

| Code | Student Type | Resident Forecasts | Enrollment Forecasts | Mobility Calculation |
| --- | --- | --- | --- | --- |
| NP | Non-public student | Excluded | Excluded | Excluded |
| AD | Adult education | Excluded | Excluded | Excluded |
| AE | Alternative education student | Excluded | Excluded | Excluded |
| HH | Home/hospital student | Excluded | Excluded | Excluded |
| OT | Other student | Optional | *Inherited | **Included |
| CH | Charter school student | Optional | *Inherited | **Included |
| IS | Independent school student | Optional | *Inherited | **Included |
| SE | Special education student | Optional | *Inherited | **Included |
| GE | Resident K-12 student | Included | Included | Included |

*Inherited indicates that student type will be included if the residential projection included that optional type during setup.

**Mobility is calculated with all available student data to ensure the largest sample size possible and consistency year over year.

### Suggested Additional Fields

The District will have to decide what information would be most useful in your planning efforts. The more information on the file, the more alternatives you will have to query and graphically display your student data. You may want to include additional attributes such as:

- Ethnicity
- Language Proficiency
- Track (if your district is on a year round schedule)
- Homeroom
- Parent or Guardian
- Inter/Intra-district transfer
- Unique student ID code
- Address (actual residence, no P.O. Box addresses)
- City
- Zip

### Excluding students from the redistricting process

During the creation of a plan by current students and current enrollment you will be asked to select a field from which you can choose one or more categories of students that can be excluded from the redistricting process. The identified students will remain at their current school of attendance regardless of any boundary changes. These students usually belong to a campus specific program (special needs, magnet school, academy, etc.)

### Points to Remember

- All fields you wish to have available for reporting in the Redistricting Plans Extension, must be included in the student table before geocoding is started.
- Data from related tables must be physically joined to the geocoded student table prior to using the student data in Data Setup for use in redistricting plans.
- No null values or special characters can be in these fields before attempting to create a new redistricting plan.

### For More Information

Students must be geocoded by residence in order to perform redistricting and to obtain realistic forecasts (using the SchoolSite Pro Forecast Extension). For more information on how to geocode, see the ArcGIS help file or the Getting to Know ArcGIS manual.

## Creating Schools

Create the point feature class containing school locations, grade coverage and capacity.

### Creating Schools | SchoolSite Pro for ArcGIS Pro 3.3+

Schools - a point feature class

### Source

The District is the only source for this information.

### Required Fields

Important: If the school has an associated attendance area then the school code (SCHL_CODE) number must also be in at least one of the ELEM_, MID_, INT_, and HIGH_ fields in the study areas.

1. NAME - A field containing the unique name of the school, defined as data type "Text" with a length of 50. Each school name should be unique. For example, if you have a Main Street Elementary and Main Street High, do not enter "Main Street" for both schools.
2. SCHL_CODE - A field containing the school code of each school, must match codes used to populate the ELEM_, MID_, INT_, and HIGH_ fields defined as data type "Short Integer". Must have unique values, unless SCHL_CODE = 0.
3. CAPACITY - A field containing the maximum capacity of the school, defined as data type "Short Integer".
4. STRT_GRD - A field containing the start grade served at the school, defined as data type "Short Integer". Values cannot be less than -1. Use 0 for K and -1 for PK.
5. END_GRD - A field containing the end grade served at the school, defined as data type "Short Integer". Value cannot be greater than 12.

### Additional Fields

The following fields are required only for SchoolSite Locator, but are not required for redistricting plans or forecasts.

1. GRD_RANGE - A field containing the grade range of the school, defined as data type "Text".
2. ADDRESS - The street address of the school, defined as type "Text" with a length of 100.
3. CITY - The city of address of the school, defined as type "Text" with a length of 50.
4. ZIP - The zip code of the school, defined as type "Short Integer".
5. PHONE - The phone number of the school, defined as type "Text" with a length of 12.
6. WEBSITE - The web address of the school, defined as type "Text" with a length of 150 and must have prefix http://.
7. NOTES - Any additional notes, defined as type "Text" with a length of 150.
8. SCHL_TYPE - School Type, defined as type "Text".
  - ES - Elementary School
  - MS - Middle School
  - IS - Intermediate School
  - JHS - Junior High School
  - HS - High School
  - K8 - K-8 School
  - 712 - 1-12 School
  - OTH - Other School
9. SCHL_STATUS - School Status, defined as type "Text".
  - DIST - District Office
  - SPED - Special Education
  - MAGN - Magnet
  - ACDY - Academy
  - CONT - Continuation
  - ALTN - Alternate
  - RGLR - Regular
  - FUTR - Future
  - CLSD - Closer
  - OTHR - Other

### Points to Remember

- Individual school codes must be unique.

## Creating Tracts

Create polygon housing-development data for projected units and residential forecasting.

### Creating Tracts | SchoolSite Pro for ArcGIS Pro 3.3+

Tract - a polygon dataset

The tract dataset describes the location and phasing for planned residential development within the district. Each residential project can be represented by either a point or polygon feature. However, polygons are the preferred method since they more accurately depict the size and location of the projects.

The tract dataset is not required if your district has little or no residential development planned. However, if your district has several planned projects, it is useful to maintain those projects and their descriptive data in a map dataset. SchoolSite Pro will extract this information for use in the forecast model if desired. Districts with little or no planned development may not need a tract map dataset, but may wish to enter the few housing units planned directly into the Forecast Properties dialog box for SchoolSite Pro.

### Source

This type of housing information is available through most local city and county planning agencies. In most areas, developers are required to submit tract map applications for any residential housing construction. Copies of tentative tract maps can be obtained at little or no cost. Some districts have city and county agencies automatically send a copy of the tentative tract map to the facilities planning department. Contact your local planning agency for further information on receiving copies or notices of tract map applications.

### Required fields

STDYAREA  a "Text" field. This should be the study area where the tract is located. The TRACT field should be defined as data type "Text" with a length of 6. No NULL values or special characters in these fields.

1. TYPE ? a "Text" field with a length of 3. The value in this field represents the general description of the housing type for the tract. SchoolSite Pro allows up to six housing categories shared between all tract and assessor data which can be defined by the user. For example, if your district has substantial differences in number of students generated from various socioeconomic areas, you could assign Type 1 as low-income housing and Type 2 as high-income housing. However, in general DDP uses and recommends the following categories:
2. Suggested "Type" Codes:
  - SFD - Single-family Detached
  - MFA - Multi-Family Attached (such as condos, townhomes, duplexes or owned attached units)
  - APT - Apartments (rental units)
  - MLB - Mobile Homes (In some districts, mobile home parks generate students at a substantially higher rate than typical detached homes)
  - SFA - Single Family Attached
  - AFD - Affordable Housing

Please Note: When creating a forecast, the Student Yield Factors (SYFs) are applied to each of the six types. If the housing types for the SYFs are defined differently than is used in the tract dataset, the forecasts will be incorrect. For this reason, once the housing types have been defined in the tract dataset, the same definitions should be used to define the housing types in the assessor dataset.

### Required fields

PH1_ ? a ?Short Integer? data type. With SchoolSite Pro, you can break the scheduling of housing construction into as many as 10 phases. This field, along with the fields Ph2, Ph3, Ph4, Ph5, Ph6, Ph7, Ph8, Ph9, and Ph10, stand for phase 1, phase 2, phase 3, etc. Each of these 10 fields are defined the same. It is not necessary to use all 10 phases when you are breaking up the phasing of a development, but they should always be entered starting with Ph1. Some developments may be scheduled to finish in a relatively short period of time, while others may take years to complete. The numbers in these fields represent the number of units to be completed in that phase.

Remember: The Ph1_ field corresponds to the first phasing schedule of the project regardless of when the project actually begins. It does not correspond to the first year of student population forecasts. If you have project phasing, regardless of what year construction begins, always enter the first phase in the Ph1_ field. No NULL values or special characters in these fields.

PH1_COMP ? a ?Date? field. This field works in conjunction with the phasing number field described above. Enter the expected date of the corresponding phase completion. As there can be up to 10 phase numbers, there can be up to 10 phase completion dates (i.e. Ph2_comp, Ph3_comp, etc.).

### Optional fields for certain reports

1. DEVELOPER - a string field containing the name of the housing developer for the given tract. This is only used when making a project summary report and is not required for making a residential forecast with tract development data.
2. PROJECT - a string field containing the name of the housing project for the given tract. This is only used when making a project summary report and is not required for making a residential forecast with tract development data.

### Suggested fields

Various other fields ? There are a variety of fields you may want to include on the tract dataset. They can be defined any way you choose. These are completely optional and are not required by SchoolSite Pro.

- Name of developer
- Name of project
- Tract Number (or Parcel Number)
- Name of contact
- Phone number of contact
- Comments
- Total number of dwelling units planned
- Number of acres
- Description of location - enter a location by cross streets
- Status - indicate if the tract is tentative or approved

Suggested Status Codes:

- ACT - Active
- BLT - Built Out
- INAC - Inactive
- UNKN - Unknown

### Points to Remember

Careful consideration should be given when deciding whether or not a tract dataset is needed. If there are only a few active projects in your district, it may be easier to enter new housing directly into a forecast rather than creating a tract dataset. In general, it makes more sense for larger districts with many active development projects to maintain the data in a tract layer.

Also, care should be taken when considering what projects to include. Developments that are planned to cater to senior citizens or as second homes, although they are residential, will generate few students. If they are included, they will falsely inflate your forecasts because those unit numbers will be multiplied by student yield factors and will generate students who will most likely not appear. Likewise, residential projects with less than 10 housing units may generate so few students that it may not be worth updating since the number of students generated by such housing is negligible.

It is important to note that residential construction schedules change constantly, depending on current economic trends. Consequently, districts should contact developers at least once a year to get an update on the status of the project. This new information can be entered into the tract dataset attribute table and can be used in subsequent forecasts.

### Phasing Example

Here we are going to walk through a simple example of how phasing works from creating the tract data to the final resident forecast report. This example specifically highlights certain dates to illustrate in which year of the forecast those units will appear. The base date of this example will be Oct 1 2023. The tract data has units purposefully phased for 9/30/23, 10/2/23, and 10/1/24 to show how units phased a day before, a day after, and one year after the base date appear in the forecast years.

Image: Example tract input data showing development phasing dates.

Once you have done your development research and created the tract data, you will import it into SchoolSite Pro. During the import process, you will be asked to map each unique value found in the TYPE field to one of six types, TYPE1 through TYPE6. The result is a table in SchoolSite Pro that will store this mapping.

Image: SchoolSite Pro housing-type mapping table for tract records.

Once you have imported all the data and you begin to make a forecast, you will want to make sure to indicate you want to use available tract data.

Image: Forecast settings option to use available tract data.

Doing so will go through a process in which SchoolSite Pro will evaluate the phasing dates in the tract data compared to the base date of the forecast and place the units into the correct year of the forecast.

Let?s start with the first phase from PH1_ and PH1_COMP which has one unit phased for completion on 9/30/23. This unit does not appear in your forecast as it is phased before the Oct 1 2023 base date.

The second phase shows two units phased for completion on 10/2/23 and the third phase shows three units phased for 10/1/24, exactly one year from the base date of 10/1/23. Note that as a result, we see five units appear in year one of the forecast. This means that year one will include all units phased between the day after the base date until one full year later. The three units that hit Oct 1 2024 are added to the three units from Oct 2 2023 and they all fall within that first forecast year.

Image: Projected housing units after phasing is applied.

At this point, we are going to manually make a change to our Projected Units table by inserting a negative number of units in year 9 where there was previously a zero. This can be done to model special cases such as an apartment building being demolished or some other reason why existing units would result in a loss of students. There are many additional factors to consider in these cases, so please proceed with the advice and counsel of a senior school planner.

Image: Adjusted projected units table to model a loss of housing units.

Image: Student yield factors applied in the forecast.

Image: Forecast output after applying tract phasing and student yield factors.

## Creating Assessor Data

Create assessor or parcel data used for current housing and maturation calculations.

### Creating Assessor Data | SchoolSite Pro for ArcGIS Pro 3.3+

Assessor - a point dataset

The assessor point dataset is created by geocoding a table of parcel information to a street network. Assessor data can be used to determine student yield factors by housing type. (See: Student Yield Factors) Assessor point data is also used in estimating the number of existing dwelling units by study area for optional maturation projections (See: Maturation Concept). Parcel polygon data that contains the required information can also be used by converting the polygons to a point feature class.

### Source

The best source for housing information is your local County Tax Assessor office. Most Tax Assessors maintain a Property Characteristics file, which is available to the public for a nominal fee.

### Required fields

**TYPE** – a “Text” field. It is a description of the type of housing unit contained in the assessor record. Be sure to use the same type definitions as discussed in the tract dataset. No NULL values or special characters in these fields. You can have a max of 6 unique values between all tract and assessor data.

Suggested “Type” Codes:

- SFD - Single family Detached
- MFA - Multi-Family Attached (such as condos, town homes, duplexes or owned attached units)
- APT - Apartments (rental units)
- MLB - Mobile Homes (In some districts, mobile home parks generate students at a substantially higher rate than typical detached homes)
- SFA - Single Family Attached
- AFD - Affordable Housing

**TTL_DU** – a “Short Integer” or “Long Integer” field. This field will contain the number of total dwelling units located at a particular assessor point. For example, a single family detached would be one unit and an apartment complex could be anywhere from one to several hundred units. No NULL values or special characters in these fields.

### Suggested fields

1. **YEARBUILT** – a “Short Integer” or “Long Integer” field. This field will contain the year the unit was built and can be used to create student yield factors.
2. **DEVELOPER** - a “Text” field. This information will be needed if you want to create a Developer Summary Report as part of a forecast.
3. **ADDRESS (or SITUS)** - a “Text” field. This field gives the address location of each parcel. This field is used to geocode the assessor data to the street data.

See topic Maturation Methodology to learn how assessor data is used in Maturation Projections.

## Creating Trustee Areas

Create trustee-area polygons for district governance and reporting context.

### Creating Trustee Areas | SchoolSite Pro for ArcGIS Pro 3.3+

Trustee Areas - a polygon feature class

A trustee area is a polygon dataset with each polygon assigned to a specific board member. The Trustee number coded in the Trustee dataset should correspond to the Trustee field on the Study Area dataset.

1. **TRUSTEE** - A field containing the unique Trustee number of the area, defined as data type “Short Integer”.
2. **NAME** - The name of the Trustee area or name of the Board member, defined as data type “Text” with a length of 50.
3. **WEBSITE** - A field containing the web address of the Trustee, defined as data type “Text” with a length of 150.

## Creating Streets

Create the street line dataset used by Street Directory workflows.

### Creating Streets | SchoolSite Pro for ArcGIS Pro 3.3+

Streets - a line dataset

Although streets are not needed to create a redistricting plan or a forecast, they are needed to create a street directory. When setting up street data for use in a street directory, be sure the data is projected the same as the study area and school layers (i.e. NAD1983 StatePlane California VI FIPS 0406). Also be sure the fields containing the address ranges are numeric (short integer, double, etc). Address ranges defined as characters will not run properly.

The Street Centerline data is a line dataset. If you choose to build your own database, this is the key set of data that you will need to build the other data sets on top of. The study areas, in many cases, will run down the middle of the streets, and the students and school points will be geocoded to them. It is used to geographically reference all the other map datasets in your database. Even if you contract the database creation process out, it is to your advantage to have a street database. It will serve as a backdrop for your maps and it will assist you to visualize the demographic information in your district.

### Source

A street centerline database can be obtained from different sources. Data from your local government usually has the most up-to-date resource and is available at no cost or for a small fee. The following are a few examples:

1. Your local city
2. Your local county
3. Your state
4. U.S. Census Data
5. Esri maps and data - Available at no cost with your ArcGIS license

You can also get street centerline data from many third party vendors for a fee. The following are a few examples:

1. HERE (formerly known as NAVTEQ)
2. TOMTOM
3. Esri StreetMap Premium
4. Davis Demographics & Planning, Inc.

As previously mentioned, many government agencies are maintaining their data with Esri software, and as such, they may already have street data that has been updated on a consistent basis. Many times, these government agencies are willing to sell the data to school districts for a small fee or often at no cost. It would be well worth the effort for the district to explore all avenues of possibilities in regards to this matter.

## Data Validation

Validate imported feature classes and their relationships before planning.

### Importing and validating | SchoolSite Pro for ArcGIS Pro 3.3+

The SchoolSite Pro Data Setup tool validates individual feature classes and checks relationships among Schools, Students, Study Areas, Tracts, and Assessor data before plans or forecasts can be created.

Warnings identify items to review; errors must be corrected before the related workflow can continue.

### Validation topics

- An overview of the Data Setup tool
- Data checks made for Redistricting
- Data checks made for Forecasts
- Data checks made for SchoolSite Locator

## Using Data Setup

Import and validate district GIS data before creating plans and forecasts.

### Using Data Setup | SchoolSite Pro for ArcGIS Pro 3.3+

The SchoolSite Pro Data Setup imports and checks your GIS data for compatibility with SchoolSite extensions. In each Pro project, you will be importing one set (or copy) of data that will be used as the basis for all plans and forecasts created in that Pro project. If you need to use different source data such as a different student file or different study area data, you will want to create a new Pro project based around that set of data.

You can access Data Setup through the SchoolSite ribbon.

Image: SchoolSite Pro Data Setup ribbon panel.

There are three datasets required to create plans and forecasts. Visit the links below to learn more about the requirements for each dataset:

1. Schools
2. Study Areas
3. Students

### First Round of Data Validation

In the first round of data validation, the software will check each individual feature class to make sure it has the required fields and that they are populated correctly.

1. In the Data Setup pane, select the schools, study areas and students’ files you want to import/validate and it will automatically run once you’ve selected your file.
2. You can either add each layer to your map and then select it from the dropdown menu, or you can browse to the data’s location on your computer and it will be added to your current map as a new layer and then scanned.
3. Wait a few seconds until the green progress bar completes. When the check for the file is finished, you will see one of three icons:

| ✓ | Valid dataset. The feature class meets all the requirements and additional suggestions for SchoolSite Redistricting. |
| ⚠ | Warning. The feature class meets all the requirements for SchoolSite Redistricting but there is room for some potential improvements. |
| ◉ | Not Valid. The feature class is missing one or more requirements for SchoolSite Redistricting. |

After each layer is scanned, if there is anything to report about your data then a table will appear with a log of all the warnings or errors found.

If your data is valid, a green check mark will appear next to it.

If your data has warnings that you should be aware of, an exclamation point will appear next to it. These warnings indicate areas of improvement or highlight aspects of your data that seem incorrect on the surface. For example, if you have the Capacity field on the school data but it is empty it will show a warning to alert you that if you fill in school capacity values then you will be able to make more useful reports.

If your data has errors, a red “Not Valid” icon appears and you must fix the errors and rescan the data until you get a green check mark or at least a warning icon before importing it to create a plan or forecast.

In the example below, the Student data resulted in a warning sign.

Image: Student data warning icon in the Data Setup validation result.

To learn more about the errors, you can refer to the Data Setup Messages table. You can choose to ignore the warning and proceed to import the data anyways into your SchoolSite geodatabase and use it for making plans or forecasts.

Image: Data Setup Messages table showing warnings and errors for the selected dataset.

### Second Round of Data Validation

In the second round of data validation, the software will check all three feature classes and how they relate to each other. For example, schools that are coded to study areas must actually exist in the Schools feature class. Otherwise, this will report as an error. Another example is making sure that the school’s each student are enrolled also exist in the Schools feature class. If there are any warnings or errors found at this time, they will be reported in the Data Setup Messages table just like before.

Here is an example of some inconsistencies between the Student data and the School data.

Image: Example inconsistencies between Student and School data during the second validation pass.

If you have warnings, you can choose to continue anyways and import the data or you can stop at this point to review the warnings and make any corrections. Once you choose to continue, these three feature classes will be copied from their current location into the SchoolSite file geodatabase that is stored in the ArcGIS Pro project’s default directory. If you hover your mouse over the name of the imported feature classes, a tooltip will appear showing the original path of that data for reference.

Image: Imported feature classes copied into the SchoolSite Pro project geodatabase.

For more information about the data requirements for creating Redistricting Plans and Forecasts, view the following topics:

- Data Checks Made for Redistricting Plans
- Data Checks Made for Forecasts

If you need further assistance, the list of warnings and errors in the Data Setup Messages table can be emailed to Davis Demographics’ Tech Support by exporting table results and emailing them to techsupport@davisdemographics.com.

## Data Checks Made for Redistricting Plans - SEE NOTES

Below is a list of the data checks that SchoolSite Pro makes when using Data Setup specifically for redistricting plans.

### Data Checks Made for Redistricting Plans - SEE NOTES | SchoolSite Pro for ArcGIS Pro 3.3+

Below is a list of the data checks that SchoolSite Pro makes when using DataSetup specifically for redistricting plans.

## Data Checks Made for Forecasts - SEE NOTES

Below is a list of the data checks that SchoolSite Pro makes when using Data Setup specifically for use in forecasts.

### Data Checks Made for Forecasts - SEE NOTES | SchoolSite Pro for ArcGIS Pro 3.3+

Below is a list of the data checks that SchoolSite Pro makes when using Data Setup specifically for use in forecasts.

## Data Checks Made for Locator

Validate the individual datasets used by SchoolSite Locator workflows.

### Data Checks Made for Locator | SchoolSite Pro for ArcGIS Pro 3.3+

SchoolSite Locator depends on a smaller dataset set than redistricting or forecasting. Before using this workflow, the validator confirms that the required layers are present and structurally ready for location-based school searches.

This check helps ensure school and Study Area information are aligned so locator features can reference the correct district geography.

### Required datasets

- Study Areas
- Schools

### Optional dataset

- Trustee Areas

### Related validation

- Using Data Setup
- Data checks made for Redistricting

## Redistricting

## Change Boundaries Between Schools

Edit assignments, inspect proposed statistics and commit attendance-area changes.

### Change boundaries between schools | SchoolSite Pro for ArcGIS Pro 3.3+

You might need to make redistricting changes after reassigning study areas or if your district has to make changes to existing boundaries. You can make these changes to balance student population by residence and site capacities.

To reassign study areas to existing schools, you must have at least one plan open in the SchoolSite Pro table of contents and have the plan you wish to edit as the active plan.

1. Begin the editing session: Choose the assign tab under Redistricting Plan. Then choose Start in the Assign ribbon.

Image: Start an editing session from the Assign ribbon.

Image: Choose Start to begin assigning study areas.

Use Caution when Assigning: When assigning study areas, please refrain from using any other editing tools and only use the Undo button provided in this ribbon. Otherwise, you could experience unexpected results when moving study areas between attendance boundaries. Once you click “Stop Assigning” you can then use all the editing tools and the normal undo button without affecting your plan.

2. To reassign study areas from existing schools, from the assign ribbon, click on the drop-down arrow under “Assign study areas to:” and select the school to which you wish to assign the study area(s).

Image: Choose the target school for reassignment.

3. Turn on Labels to view boundary names.

Contents Pane > Right click on Boundary Plan > Label

Image: Turn on labels so school names are visible on the map.

4. Once a school has been chosen, choose a select feature tool from the toolbar. Listed in order, the available selection tools are:

- Select Features
- Select by Rectangle
- Select by Polygon
- Select by Lasso
- Select by Circle

Modifying Boundaries

5. After choosing a select tool, click on the study areas to be reassigned to the study area you chose to assign to. The selected study areas are highlighted in bright blue.

6. To see how the reassignment of the selected study areas would affect that school, click on the Proposed Statistics Tab.

7. To view only the statistics for the selected study areas, click on the Selected Residence Tab.

Commit the Modification

**IMPORTANT: If the changes are acceptable, commit the change. In the assign ribbon, click on Assign Study Areas. If you are certain you want to keep the changes permanently, choose Save Assignments from the assign ribbon. Once you choose to Save Assignments or Stop Assigning, you can no longer undo edits.**

Image: Use the assignment tools to commit boundary changes and save the plan.

8. To undo an assignment, click on the Undo button on the assign ribbon before Saving Assignments. When finished, stop the edit session by choosing Stop from the assign ribbon.

## Add an Existing School

Add a school from the district data to an open redistricting plan.

### Add an existing school | SchoolSite Pro for ArcGIS Pro 3.3+

You may wish to create boundaries for an existing school facility that is not currently in this plan (i.e. You have created an elementary school plan and want to experiment with converting a closed junior high school to an elementary school).

If necessary, save assignments and stop assigning study areas. From the SchoolSite Redistricting Extension Toolbar, choose the assign tab, then Update Schools.

Image: Use Update Schools to add an existing school to the active plan.

All schools not represented in the current active plan are listed in the drop-down box. Choose one of the schools, then click OK. SchoolSite will add the school point location to the map and add the name of the school and a new color to the plan in the table of contents. You may now start assigning study areas to the added school.

## Add a New School

Simulate opening a new school and assign Study Areas to it.

### Add a new school | SchoolSite Pro for ArcGIS Pro 3.3+

From the SchoolSite Redistricting Extension Toolbar, choose the assign tab, then Update Schools. You can only add new schools when your active plan is not in editing/assigning mode. If you are in assignment mode, the add new school menu option will be grayed out.

Image: Open Update Schools from the Assign ribbon to add a new school.

Type in the name of the new school and its capacity, and click Apply.

Image: Enter the school name and capacity before applying.

The name of the new school will appear in the school field of the Redistricting Toolbar. Once you begin assigning study areas to that school, the new school’s name will be listed in the chart and proposed statistics windows.

**Please Note:** A school point will not be added to your school layer since the program has no way of knowing where you might want to have the new school located. It assumes the school would be located somewhere within the attendance area you are designing. You can place a school point graphic in the general area you feel the school will be located by using the ArcGIS graphic point symbol shown below. The point symbol can be found on the ArcGIS Drawing Toolbar.

## Close Schools

Remove unassigned schools from a plan to simulate closing a campus.

### Close schools | SchoolSite Pro for ArcGIS Pro 3.3+

In order to simulate the closing of a school, the assigned study areas must first be reassigned to other schools. Use the selection tools to assign study areas to neighboring schools (You can view the statistics window to note the changes as you adjust the boundaries). Once you have reassigned all study areas away from the school you wish to close, save your assignments.

From the SchoolSite Redistricting toolbar, choose the assign tab, then remove unassigned school(s). Removing unassigned schools will delete the school point location on the map and remove the school reference in the plan in the table of contents.

Image: Remove unassigned schools from the plan after reassigning all impacted study areas.

To reassign study areas read the Changing Boundaries Between Schools topic.

## Reassign Schools

Use bulk reassignment methods to rebuild attendance boundaries by planning rule.

### Reassign schools | SchoolSite Pro for ArcGIS Pro 3.3+

From the SchoolSite Redistricting Extension Toolbar, choose the assign tab, then Reassign Study Areas.

Image: Use Reassign Study Areas to rebuild school assignments by planning rule.

There are multiple ways to reassign schools to different study areas. Reassign Schools helps you choose the best method for your district.

1. By current boundaries – Choose this method if you want to go back to the current boundaries that the study areas are assigned. This option will also revert any changes made to school’s capacities within the plan and set them back to the default of what the CAPACITY field contained in the schools feature class.
2. By closest school – Choosing this method will assign the study areas to the closest school and create all new attendance areas.
3. By school capacity - If the capacity field is filled in for each school in the school layer, a plan can be reassigned based on these limits. Similar to the maximum student assignment option described above, the study areas that exceed the limit per school will be shaded in grey. Be sure to set the grade range appropriate to the type of plan being created (i.e. High school plan will most likely have a specified grade range of 9-12).
4. By maximum students - Choose this method if you want to specify the maximum number of students by grade range by entering the maximum number of students allowed at the grade range specified. The study areas that exceed the maximum limit will be shaded in grey. This will show where a new school might be needed.

Image: Reassign by current boundaries to restore the existing assignment pattern.

Image: Reassign by closest school to create all-new attendance areas.

Image: Use capacity limits to see which study areas exceed each school’s target capacity.

Image: Maximum-student reassignment highlights areas that may require a new school or boundary adjustment.

## Forecasts

## Configure the Look of Your Map

Control how forecast results are symbolized and labeled in ArcGIS Pro.

### Configure the look of your map

SchoolSite Pro makes it easy to visualize your forecasted data. The Forecast Display options can help you identify which neighborhoods are forecasted to experience higher growth, and which areas might be slowing down in growth as well. Having the ability to visualize where these areas of interest are can help determine where your District might need to add a new school, close an old school, or reassign an area to another school. Visualizing your data by focusing on specific grade ranges and time frames can help you plan more accurately for the future.

To configure the look of your map, click on the Forecast ribbon. Under the section titled Forecast Display, you will see four different drop-down menus:

1. Start Year
2. End Year
3. Start Grade
4. End Grade

Specify the range of years you want to view by selecting a Start Year and an End Year. For example, if you wanted to visualize the forecast for the next three years, you would set Start Date to this year, and the End Year accordingly.

Next, specify the Start Grade and End Grade for the students you want to visualize. For example, if you wanted to look at the forecast for only my elementary school students, you would select something like K for Start Grade and 5 for End Grade.

When you’ve configured the drop-down menus to your liking, click Apply. After a few seconds, you will notice your map change colors to a spectrum of green, yellow, gray, orange, and red. The green and yellow areas show areas of declining student population. The gray areas show areas where there is no change in student population. The orange and red areas show areas of increasing student population.

You will notice a legend in your Contents dockpane with a range of numbers assigned to each color. Each range represents the net number of students for the range of years and grades that you specified.

## Development Summary Report

Summarize projected housing development, units and students by phase and year.

### Overview

If tract data is present in your SchoolSite Pro project, you have the option to generate a development summary report.

A development summary report provides general information about the numbers and types of housing development in your District. The report is broken down by year, giving you a clear picture of housing planned for the next three to ten years.

This information helps you understand which schools will be affected in the next few years and supports better decisions when redistricting or planning facility needs.

### Generate the report

To generate a development summary report, go to the Forecast ribbon and click Modify Factors > Projected Housing Units.

The Projected Housing Units dockpane will display. At the bottom of the form, click Export Development Summary to generate the report.

A pop-up will display with the location of the report when it finishes generating.

## Project Summary Report

Review a project-level summary of plans, forecasts, schools and programs.

### Overview

If tract data is present in your SchoolSite Pro project, you have the option to generate a project summary report.

A project summary report provides information about each project in your District. The report is broken down by year, giving you a clear picture of projects planned for the next three to ten years.

This information helps you understand which schools will be affected in the next few years and supports better decisions when redistricting or planning for capacity.

### Generate the report

To generate a project summary report, go to the Forecast ribbon and click Modify Factors > Projected Housing Units.

The Projected Housing Units dockpane will display. At the bottom of the form, click Export Projects Summary to generate the report.

A pop-up will display with the location of the report when it finishes generating.

## Include Maturation Data in Your Forecast

Use current housing, planned development, potential development and maturation Student Yield Factors for long-range projections.

Image: The maturation methodology combines current housing, planned development, and student-yield assumptions.

### Include maturation data in your forecast

Including maturation data into your forecast can lead to more accurate predictions for your District. Check out the following pages for more information about what maturation data is, how it can be calculated into your report, and how to include maturation data into your report.

- Maturation concept
- Maturation methodology
- More about Current housing units
- More about Potential development
- More about Maturation student yield factors

## Maturation Concept

Understand how housing occupancy and student yields mature over time.

Image: A maturation master plan identifies future school sites required at build-out.

### Maturation concept

While seven to ten year forecasts are helpful for planning in the short term, maturation forecasts are better suited to long term forecasting and site selection. It is not good planning practice to base long term site selection and facility needs based upon short to mid-term forecasts. The decision a planner could make for locating a future school using a ten year forecast may not be the best decision as development continues to occur further into the future. For example, a future school site placed in or near a development occurring in the next few years may not be the best location for that school in relation to other potential school sites, as future development projects expand into other areas of the district.

Maturation forecasts are essentially a housing saturation forecast from which SchoolSite Pro will estimate the total number of students within each study area that the district can expect when all available parcels have been developed under current zoning conditions (commonly referred to as “build out”).

There is no specific time frame implied as to when maturation will occur. It cannot, and should not, be assumed that this is the “eleventh” year of a ten year forecast. Maturation forecasts are calculated completely separate from the ten year forecasts. As part of your District’s master plan, maturation forecasts provide a long-term outlook of the student population and distribution when all housing is accounted for.

In a typical Master Planning scenario, the planner would generate both a ten year forecast and a maturation forecast. Using the maturation student forecasts by study area, a redistricting plan (using SchoolSite Pro) would be created for each grade grouping within the district (K-6, 7-8, 9-12, etc.) to evaluate the location and facility needs of future school sites when all land is developed. In the K-6 elementary plan shown below, three schools currently exist and two additional sites have been determined to be necessary at build out. One is on the east side of the district and one is in the northwest area of the district. This is the Master Plan for elementary schools in this example District.

Image: A build-out elementary master plan identifies future school locations required as development matures.

After a Master Plan is created above, additional plans are created for each year of the forecast which help to determine which schools identified at maturation are required in any particular year. In the example plan for 2008 below, the enrollment forecasts support only one of the two schools identified at build out (the northwest location).

Image: A phased yearly forecast clarifies which future schools are required first.

In the plan shown below for year 2005, none of the future schools identified at build out are required. The district should be able to accommodate future enrollment within the capacity of the existing three schools (although attendance boundary balancing of enrollment may be necessary with SchoolSite Pro).

In general, planning through the use of both maturation and short to mid-term forecasts provides an orderly method to determine future school site needs and timing while at the same time assisting the district in making attendance boundary decisions that make sense over the long run. As the district updates short to mid-term forecasts each year, progress should be made towards the Master Plan of the district. Maturation forecasts should be updated every three to five years as new development plans become available or more often if major land use and/or zoning changes occur.

## Maturation Methodology

Review the methodology for current housing, planned development, potential development and maturation yields.

### Maturation Methodology

The maturation forecast process combines current housing (obtained from the local County Tax Assessor files), projected development (city or developers) and an estimate of additional potential housing (from aerial photos, area zoning maps and discussions with city or county planning officials) for the District. The sum of housing counts by type and by study area determines the total number of units in the district at maturation. This housing count totaled by type and by study area is multiplied by the appropriate maturation student yield factors to produce the maturation forecasts.

Image: Maturation methodology combines current housing, projected development and student-yield assumptions.

Current Housing Units

The total number of current housing units is determined using the district’s local county tax assessor data. This data should be a geocoded point layer of existing housing within the district. The housing type or use code is generally available within the county assessor records. You may need to add an additional field onto the assessor table to generalize the various use codes down to a maximum of four housing types to which you want to apply maturation student yield factors. Typically, DDP uses four housing types: SFD (Single Family Detached), MFA (Multi-Family Attached such as condominiums or townhomes), APT (apartment or rental units) and MBL (for mobile homes). However, the district can use whatever categories you wish so long as it matches the same four housing types defined for, and are being used for, new housing development (i.e. your tract dataset). (For example, your tract dataset and your assessor dataset must use the same housing category definitions. In other words, you cannot have Type 1 defined as SFD in your tract dataset and Type 1 defined as APT in your assessor dataset.)

When creating a maturation forecast in the Create New Projection Wizard, specifying your optional assessor point dataset will fill in Year0 in your forecasted housing units table, indicating the number of current housing units by type in each study area.

Planned Development

Planned development refers to known and approved future residential development. This information is stored in the same tract dataset used in the ten year forecast model and includes information on the number of units and phasing completion schedules. This is an optional data set only for those districts with active residential construction. An optional tract dataset, when specified during the Create New Projection Wizard, will fill in the number of housing units anticipated by study area and by type for years 1 through 10. Any phasing of units in the tract dataset that extends beyond the next ten years will fall into Year11 which accounts for potential development.

Potential Development

Potential development refers to the number of residential housing units in each study area that could be built and have not already been accounted for as existing (from the assessor file) or those not accounted for as subdivision maps (from the tract dataset). Additional potential units that could occur on vacant property is entered by the user into Year11 within the forecasted housing units dialog window. The number of units entered is determined by the user based upon a best estimate of additional units that could be built in each study area using information from aerial photos, zoning maps, and potential land use plans.

Acreage of vacant property can be estimated in a study area by drawing polygons within ArcMap indicating vacant property having ArcMap ascertain the estimated acreage. That acreage could be multiplied by the density factors (allowed units per acre) determined from zoning or land use maps. For example, an area of vacant land identified as 80 acres, multiplied by a zoning density of 5 dwelling units per acre should generate 400 future housing units.

Maturation Student Yield Factors

As in the ten year forecast which may use new residential development, student yield factors are multiplied by housing units to generate a certain number of students. For maturation forecasts, the total number of housing units from current, planned, and potential development are multiplied by Student Yield Factors to estimate the number of students in each study area. Student Yield Factors for maturation are generally different than those used in the ten year new housing forecasts. The student yield factors used in the ten year forecasts are generally based on a sampling of housing units less than five years of age to better represent the number of students that would be generated as new homes are completed. Whereas, maturation, representing a future point in time with all ages of housing units, uses student yield factors that are based upon a large sample of units within the district both old and new. Generally, maturation student yield factors will have lower K-6 numbers and higher 9-12 numbers than a ten year forecast student yield due to the fact that as homes age students will be distributed more evenly among the grade levels. For this reason, ten year forecast student yield factors are not generally used for maturation since they would potentially over-estimate elementary students and under-estimate high school students for long range planning.

## More About Current Housing Units

Use assessor data and projected housing units to model current and future development.

### More about Current Housing Units

The first step in determining the Current Housing Units needed to run maturation projections is a current geocoded assessor file. The assessor file is used to establish a housing count by unit type for each individual study area.

Entering Assessor Data

When creating a new projection, the 4th screen in the wizard provides the option to include assessor data (find out where to locate sample assessor data here):

1. Check the box next to “Use an Assessor’s dataset (optional)”.
2. Next, select the geocoded assessor dataset to use by clicking on the yellow folder under the option “Where is your Assessor data located?”.
3. Below the field where you locate your data are two drop-down windows. From the Housing-type field choose the field that contains the housing unit type. From the Housing-unit field choose the field in the assessor data file that contains the number of units on each parcel. Usually, assessor data coded as single family residence (SFD) would have a housing unit count of one, whereas a parcel that is used for apartments would have the number of apartment units. After selecting the housing type field, SchoolSite will automatically look through all the values in that field, and you should match the values it finds with the four types for which maturation student yield factors (MSYF) will be applied. The values and types should match those that are used in your tract dataset.
4. Click Finish to create a new projection.

Modifying Projected Housing Units for a Projection with Assessor Data

1. Open the projection to be modified. Then from the SchoolSite Projection Toolbar, click the projection properties button.
2. Under “Specify variable to modify”, click the dropdown menu to Projected Housing Units.

The screen below illustrates current housing units from the assessor data in Year0 for several study areas. You have the option to modify these numbers of housing units if you have data that indicates otherwise.

## More About Potential Development

Estimate development potential and enter assumptions for future housing growth.

### More about Potential Development

As part of the creation of the new projection, if you specified a tract dataset during projection creation, Years1 through 10 would be filled in with the data from new development projects. In some cases, where certain residential tracts have completion dates beyond the ten year projection time frame, those units will be indicated in Year11 (Year11 is a place holder for units to occur after Year10. It does not indicate those units will be built in 11 years.). Depending upon which study areas have vacant property, you may wish to add additional units into Year11 that you feel could potentially be built based upon land use, zoning, etc.

Calculating Potential Development

1. Determine areas of the district that have the potential for additional housing by inspecting the aerial photographs and comparing those areas to land use and zoning maps to determine if they are slated for residential development.
2. In ArcGIS, add your study area and street layers to the map display. Zoom in to the areas you have determined from aerial photography to have potential residential development.
3. From the Data Frame Properties window, choose the General Tab. Be sure your map units are in the appropriate units. (The coordinates/map units for most data provided by DDP is in feet.)
4. Using the New Polygon tool, draw a polygon of the area of potential development. Right-click on the polygon and choose properties. In the dialog window that appears click on the area tab and ArcMap will report the area in any map units you choose such as acres.

By multiplying the number of acres by the number of units allowed per acre, you will arrive at the maximum potential number of residential units for that area.

You will then need to add these numbers into Year 11 for the appropriate study areas in the Projected Housing Units table.

Entering Potential Development

1. Once you have calculated the number of potential development units per study area, you will need to enter them in the Student Projection Properties table. Open the projection to be modified. Then, from the SchoolSite Projection Toolbar, click the projection properties button.
2. Under “Specify variable to modify”, click the dropdown menu to Projected Housing Units.
3. Choose a method to specify the study areas to display. You can scroll to the study area data you wish to modify.
4. Enter the number of potential units in Year11. As you update any values for any study area in years 0 through 11, Year12 will automatically update to reflect the total number of housing units for that study area. Year12 cannot be directly edited. SchoolSite will take the values in Year12 for each study area and for each housing type and multiply the maturation student yield factors (MSYF) to create a student projection at maturation for each study area.
5. By choosing “Create Development Summary” you will get the Residential Development Summary Report created automatically. You can “Export Development Summary” into Microsoft Excel format with ResidentialDevelopmentSummary.xls as the default name.

## More About Maturation Student Yield Factors

Calculate and enter Student Yield Factors for fully matured development.

### More about Maturation Student Yield Factors

The Maturation Student Yield Factors (MSYFs), combined with the total number of housing units estimated at build out for each study area will generate a student projection for each study area. The MSYFs are similar to student yield factors used in the ten year projections. However, MSYFs are calculated regardless of year of construction and are applied to year 12 in the projected housing variable table for each study area.

Two sets of data are required to calculate Maturation Student Yield Factors: current geocoded student data by residence (provided by the District) and current housing unit data (from the District’s local County Tax Assessor files). Each student record and tax assessor record is geocoded by their given address. You may then use ArcMap analysis tools to select a sampling of tax assessor/housing unit records and student records to determine student yields. The samples should include different housing types and the students being generated from those housing units. At maturation the sample of housing units should include houses of all ages both old and new so as not to skew the yield factors towards younger age children from newer homes.

Calculating Student Yield Factors

Entering Maturation Student Yield Factors

1. Click on the drop down menu for Modify factor in the forcasting ribbon and choose Maturation.
2. Under “Specify variable to modify”, click the dropdown menu to Maturation Yields. Be sure to select Maturation Yields rather than student yields.
3. Choose the house type to apply maturation yield factors. Remember, Types 1 through 4 correspond to the types as defined in your tract and assessor datasets.
4. Next, specify study areas to display by choosing one of three choices:

- The first is to display study areas that are “Currently selected on the map”. If you have selected study areas from the map display, this option will be available. If chosen, only the selected study areas will display for modification. If you have no study areas selected, this option will not be available.
- The second option is “Select by attendance area”. With this option, choose the grade range you wish to assign maturation yield factors. Then choose the specific school from the drop down menu as illustrated below. This will display only the study areas that are currently assigned to that school attendance area. You can then modify maturation yield factors for just those study areas. Use this option when a specific area of the district is known to experience significantly higher or lower build out rates than surrounding areas.
- The third (and most common) option is “Select all” which displays all study areas. It is important to understand that when you make changes to the variables with the Select All option, that changes will affect all study areas in the district.

The Maturation Yields are stored in the table on the right hand side of the form. Once the study areas to display option is selected, you can modify each individual cell, changing the factor for each year and each study area.

Or, you can click on the top of the column of the year you wish to change and enter the number in the calculate field on the bottom of the form and it will change the maturation yields for that year for all study areas selected.

## Distributed Enrollment

Distribute mature forecasted students across grades using weighted factors.

### Distributed Enrollment

Maturation is the total housing units times the maturation student yield factor.

However, there is one more factor which needs to be applied in order to run the maturation forecasts.

The Distributed Enrollment factor takes the forecasted number of students at maturity and applies a weighted distribution among the grade levels.

At the elementary level, students are distributed evenly across grades K-6 with a factor of 0.14285. At the intermediate level they are distributed equally across grades 7 and 8 with a factor of 0.5. You will not be able to change those numbers.

The high school level is different. Dropout rates are much higher in high school. Patterns have shown that high schools continually lose students as they advance through the grades.

With the Distributed Enrollment Factor, you can weigh heavier the earlier high school grades, if desired, based upon trends within your district. However, grades 9-12 must equal 1.00.

By default, grades 9 – 12 are calculated at 0.25 (In other words, students generated for high school are distributed evenly across grades 9 through 12).

Modifying Distributed Enrollment Factors

By default, the factors above are applied. To modify the high school level Distributed Enrollment Factors:

## Kindergarten and Pre-Kindergarten Birth Factors

Calculate and enter birth factors for incoming PK and kindergarten students.

### Kindergarten and Pre-Kindergarten Birth Factors | SchoolSite Pro for ArcGIS Pro 3.3+

The first set of variables used to modify a straight pass-through projection is birth factors. Birth factors play a important role in the projection model as it determines the number of incoming Kindergarten students.

Most kindergarten students are 5 years old when they enter school. Knowing when the current kindergarten class was born, you can estimate the class size of incoming students. In using the example below, projections are for the current 2002 school year, therefore, we can assume the Kindergarten class was born in 2005. The year the current Kindergarten class was born is called the base year. To assist in calculating the following year?s Kindergarten class (2011), you would compare the number of births from 2005 (2010 K) and compare them with the number of births in 2006 (2011 K). This increase or decrease percentage is applied to our current Kindergarten class to help project an increase or decrease in next year?s Kindergarten class. Similarly to estimate the 2012 Kindergarten class, compare the births between 2007 with the base year 2005. For 2014 and beyond, the birth factors must be estimated based on past trends because those children have not yet been born. Since, in this example, the birth factors are on the decline, a birth factor of 93% was used.

### Calculating Birth Factors

The first step in calculating birth factors is to obtain the number of births that occurred within the district for most recent five years. In most cases, you can obtain the number of births, collated by zip codes, from your State?s Department of Health and Statistics. In this example, the district contains three zip codes - 92625, 92626, and 92627. After the number of births, by year, by zip code are obtained and totaled, the percentage of change from the base year (2005) is calculated by dividing future years (2006-2009) by the base year (2005). Because data for 2009 and beyond would not yet be available, birth factors would be estimated based on past trends. Here, we estimated a continued decline in births at 93% of the base year.

### Entering Birth Factors

Image: The K and PK factor table screen.

1. Click on the drop down menu for Modify Factors in the Forecasting ribbon.
2. Choose either K or PK Factors
3. Choose a method to display the study areas:

Image: Study-area selection options for K and PK factors.

The first is to display study areas that are ?Currently selected on the map?. If you have selected study areas from the map display, this option will be available. If chosen, only the selected study areas will display for modification. If you have no study areas selected, this option will not be available.

The second option is ?Select by attendance area?. With this option, choose the school attendance area from the dropdown list for which you wish to assign birth factors. This will display only the study areas that are currently assigned to that school attendance area. You can then modify birth factors for just those study areas. Use this option when a specific area of the district is known to experience significantly higher or lower birth factors than surrounding areas.

The third (and most common) option is ?Select all? which displays all study areas. It is important to understand that when you make changes to the variables with the Select All option, that changes will affect all study areas in the district.

The Birth Rates are stored in the table on the right hand side of the form. Once the study areas to display option is selected, you can modify each individual cell, changing the factor for each year and each study area.

Or you can click on the top of the column of the year you wish to change and enter the number in the calculate field on the bottom of the form and it will change the birth factor for that year for all study areas selected/displayed.

## Mobility Factors

Calculate mobility from historical student movement into and out of existing housing.

### Mobility Factors

Calculating Mobility Factors

Student mobility factors further refine the resident student forecasts. Mobility factors represent the net effect of the migration of students into and out of the district from existing homes. These factors help account for housing resales, renter migration, private school transitions, and high school drop-outs. If you have at least four consecutive years of geocoded student data (which represents three years of enrollment change), the mobility factors can be calculated down to the study area level. The factors are derived from comparing student counts in study areas where there has been no new residential development for the past four years. (This is to avoid double counting students moving in due to new housing construction which are accounted for in the tract dataset.)

In cases where historical geocoded student data is not available, mobility factors can be calculated using historical enrollment reports (i.e. the District's standard annual fall reporting period) although this is not the preferred method. If you only have hard copy enrollment reports by school, mobility factors can only be generated by attendance area or district wide. If comparing enrollment at the attendance zone level, be sure that you are comparing data where there has been no boundary changes for the years involved. For best results and a fair comparison, it is recommended that you compare 4 - 5 years of data to have 3 - 4 years of changes.

**Please Note: If the mobility factors are calculated based on enrollment reports, this does NOT mean your forecasts reflect the enrollment forecasts at each school. The final forecasts still represent the forecasted students by residence.**

Mobility is calculated for each grade in the district. Comparison is made between students in one grade with the numbers of students in the next grade the following year. For example, if your historical data begins in 2010, you would compare the total Kindergarten students of 2010 with that of 1st grade students of 2011 (the next year of students). All things being equal and with no new development in the area of comparison, the number of 1st grade students should be equal to the Kindergarten class from the year before assuming they all moved up a grade and stayed in the same area.

**Please Note: In general, mobility factors should have a tendency to vary closely to 1.00 unless there are extreme drop-outs or movement from private schools or other factors. If your calculated mobility factors are extremely higher or lower than 1.00, you may wish to check your enrollment counts and/or factor calculations. If hard copy enrollment reports by school are used (due to the fact you do not have historical geocoded student data), you should be careful of your calculations for schools in areas that have had attendance boundary changes as these would have a tendency to skew your calculations.**

## Calculating Projected Housing Units

Calculate, modify and recalculate projected housing units for forecast phases.

### Calculating Projected Housing Units

Closely related to Student Yield Factors are projected housing units. Projected housing development data along with student yield factors (SYFs) are used to estimate (add in) the number of students generated from new housing developments.

Housing information entered in the tract dataset can be automatically entered into the Projection Properties table if specified in the Create Projection Wizard.

Entering Projected Housing Units

1. Click on the drop down menu for Modify Factors in the Forecasting ribbon.
2. Choose Projected Housing Units
3. This Projected Housing Units pane is automatically populated if you choose to include a tract layer as part of the projection. From this form you can alter the housing counts for each year of the projection by study area if necessary. For each study area there are 12 years or records.

Year 0 represents existing housing units and is automatically filled in if you specified an assessor file in the initial projection wizard. Year 0 is only necessary or used if you are creating maturation forecasts.

Records for years 1 through 10 are filled in from your tract dataset (if you specified a tract dataset in the Create Projection Wizard). Year 11 is referred to as “after units”; it has no specific time frame. It is actually an accumulation of units from all phases whose completion dates are scheduled after the 10 year projection time frame.

In addition, if you are running maturation projections, you may want to enter additional future housing into this table which represent potential housing units on vacant land that is not currently under a subdivision map or in the planning process. These future units would be added onto those in year 11.

Year 12 is the total of years 0 – 11 and is automatically calculated as you make changes to years 0 through 11. You cannot click directly in year 12 and change it. It will always mirror the total of years 0 – 11. Year 12 is only used in maturation calculations. It represents the summary of all current, projected, and potential housing units that could occur in each study area if all the land is developed/built out. (For a discussion of how to calculate future housing for maturation, please see topic Maturation Factors.)

Modify Projected Housing Unit Numbers

If you need to modify the number you can edit each value directly in its cell on the Projected Housing Units table. You can do this by double clicking the value you want to change, typing the new value, and hitting Enter on your keyboard. Once you have made your changes, you can click the “Update Year 12” to reflect the total of years 0-11.

Re-Calculate Projected Housing Units

**Please note: Re-calculating projected housing units table from tract or assessor data will cause all projected housing unit data you have previously entered to be overwritten!**

Create Development Summary

By choosing “Create Development Summary” you will get the Residential Development Summary Report created automatically. You can “Export Development Summary” into Microsoft Excel format with ResidentialDevelopmentSummary.xls as default name. You can also export Projects Summary.

## Student Counts

Review and enter current student counts by Study Area and grade.

### Student Counts

The Student Counts form allows you to review the number of current students by grade level for each study area in the district.

The table is automatically filled in from the geocoded student dataset specified in the projection wizard. However, if you know that there are certain study areas that should have additional students in them, you can click in the appropriate cell and add them manually.

This is a rare occasion, but can happen when, for example, students are entered into the system late and thus were not geocoded.

Entering Student Counts

Click on the drop down menu for Modify Factors in the Forecasting ribbon.

Under the section “Specify grades to display”, check on or off the desired grades.

Under the section “Specify study areas to modify by:”, choose between a current selection on the map, existing attendance areas, subdistrict or all study areas.

Click individual cells in the Student Counts table to change and type in the number of students by grade per study area.

## Student Yield Factors

Estimate students generated by recently built housing units.

### Student Yield Factors

Calculating Student Yield Factors

The Student Yield Factors, when applied to projected housing units, determine how many additional students will be generated from new residential development within the district.

Two sets of data are required to calculate Student Yield Factors: current student data by residence (provided by the District) and current housing unit data (from the District's local County Tax Assessor files).

Each student record and tax assessor record is geocoded by their given address. You may then use ArcMap analysis tools to select a sampling of tax assessor/housing unit records and student records to determine student yields.

The samples should include different housing types and the students being generated from those housing units.

Next, the year of development must be analyzed for each housing type: Single-Family Detached (SFD), Multi-Family Attached (MFA) and Apartments (APT).

In general, SYFs used in a ten year forecast are calculated from units built within the last five years to better represent the actual number of students coming from new housing units when they are completed. For example, if there are 50 students living in 100 MFA units which were built between 1999-2004, the SYF would equal 0.50.

These calculations are performed to produce a Student Yield Factor for grade ranges K-6, 7-8, and 9-12. Example: Grade Range: K-6. The result is one student yield factor by housing type for each grade range.

Student Yield Factors apply only to years 1 through 10 in the projection properties table.

**Please Note: Student Yield Factors are only necessary for those districts that have development taking place within their boundaries. If your district is fully developed, or built-out, SYFs are not needed for running 10 year projections.**

Entering Student Yield Factors

1. Click on the drop down menu for Modify Factors in the forecasting ribbon and choose Student Yield Factors.
2. You can turn on and off each of the housing types by clicking in the check box next to that type located in the area entitled “Specify types to display”. (Remember: Types 1 through 4 correspond to the housing type definitions defined in the tract or assessor datasets. Typically, type 1 refers to single family detached (SFD), type 2 refers to multi-family attached (MFA), type 3 refers to apartments (APT) and type 4 refers to mobile homes (MBL), however, you can assign whatever housing types are appropriate for your District and its proposed development to Type 1 through 4.
3. Next, specify the study areas to display by clicking the radio buttons next to the options: currently selected on the map, select by attendance area, or select all.
4. Finally, enter the student yield factors by clicking on the top of the column for the desired grade range and enter the value in the calculate box at the bottom of the form. Alternatively, you can change the student yield factors in individual study areas by clicking in each individual cell – this allows the planner to apply different student yield factors to different housing types in various areas of the district.

## Troubleshooting

## Business Analyst Report Is Empty

Troubleshoot empty Esri Business Analyst reports.

### Error

A Business Analyst report may be empty when the selected area, service configuration or available credits do not support the request.

### Solution

Verify the selected geography, ArcGIS Online connection, service credits and Business Analyst availability, then run the report again.

## Edit Error

Troubleshoot editing errors while modifying plans or source data.

### Error

Editing can fail when the map, layer, workspace or current assignment session is not in an editable state.

### Solution

Confirm the correct plan is open, stop conflicting edits, verify layer permissions and retry the operation.

## Export to Excel Error

Troubleshoot failures when exporting SchoolSite reports to Excel.

### Error

Excel export can fail when the target file is open, the output folder is unavailable or required fields cannot be written.

### Solution

Close the existing workbook, verify the Project home directory and permissions, then export again.

## FAQ

## Upgrading to SchoolSite Pro

Reference guidance for upgrading from earlier SchoolSite releases.

### Upgrade

Close ArcGIS Pro, install the new signed SchoolSite Pro package and reopen the application before validating project data.

### After upgrade

Run Data Setup and review release notes for changes that affect existing plans, forecasts or imported datasets.

## Start here

## Release Notes

Current build changes and recent feature history.

### Build 1.9.6 FY26 Q4 Update 9 (Sep26) | SchoolSite Pro for ArcGIS Pro 3.3+

 Build 1.9.6 FY26 Q4 Update 9 (Sep26) New Features: New: Utilization Report. This is now an automated report and used to setup boundary comparison web apps during a rezoning project Export SYF reports during Data Setup Added CAPACITY field to the automated attendance matrix Excel file Additional residential forecasting charts available with an optional checkbox during the Report Setup Additional student types that can be added to the automated attendance matrix are only available if they exist in the student data that has been imported into SchoolSite (just like how Create Plan works) This change also resulted in much improved performance time when creating Address Directory. It is now roughly twice as fast. Project Summary Report updated based on feedback from Cameron and the standardization team (example report attached for reference on changes) Reassigning study areas by (closest school, capacity, max limit ) now allows you to choose one or more schools to exclude from this process so you can reassign most schools but keep some locked as they are Minor bugs and UI improvements: SYF calculations are only is available when importing Assessor data with polygon geometry Added a warning when calculating a forecast if Projected Housing Units are detected with no corresponding SYF values Fixed an issue with the travel modes from Esri that make creating walk zones broken Tapestry Segmentation report was deprecated, new version has been added While assigning study areas in a plan based on a forecast, you can no longer change the forecast year in the stats window. Doing so would require edits to tables and when those edits were saved it would lock in study area assignments and remove the ability to use the Undo button Build 1.9.5 FY26 Q4 Update 8 (Jul26) New Features: User can choose a school to remove, and it will automatically assign those study areas to â€˜Unassignedâ€™ Exporting a forecast report includes the tabular data and chart in the same file Improve performance of calculating a forecast Improve performance when calculating year 12 of the projected housing units table Additional misc. minor bug fixes and UI improvements Build 1.9.4 FY26 Q3 Update 7 (Jun26) Introducing new reporting features for residential forecasts New Features: SYF Automation Use parcel data to automatically generate student yield factors to apply to new housing units to estimate how many students will be generated from those new housing developments in the future The statistics window UI updates such as: Sorting the table by any column Scale/zoom in to see larger font size for improved readability Additional data validation to check consistency between student types across historical student data Lock a plan to prevent further study area re-assignments (Similar to locking in a forecast once delivered to the client) School layer in a planâ€™s map now has Map Tips turned on by default The study area numbering tool has been recreated from ArcMap Forecast can now be summarized on any available field in the study area data instead of just by attendance zone, district-wide, or sub-District (which uses the DISTRICT field) This means you can select a CITY, ZIP, or any other field present in the Study Area data to use to group study areas in a report Plans with Enrollment now use ALL student types The Estimated Enrollment tab has always shown all students who are enrolled in a school who meet the grade criteria with no regard for the value in the STUTYPE field (GE, SE, CH, etc..) When making a â€˜Plan with Enrollmentâ€™, it does not ask you which student types you want to use like it does with a residence-based plan. Therefore, it was unclear that the students in the Current tab were only â€˜GEâ€™ students. This is now DIFFERENT : Moving forward, the â€˜Currentâ€™ tab will work similarly to the â€˜Estimated Enrollmentâ€™ tab in that it will show ALL students who RESIDE in the schoolâ€™s boundary and meet the grade criteria specified with no regard for the value in the STUTYPE field. This will make the methodology in â€˜Plans with Enrollmentâ€™ consistent and show ALL resident students in one tab and ALL enrolled students in the other tab Additional misc. minor bug fixes and UI improvements Build 1.9.3 FY26 Q2 Update 6 (Jan26) Introducing new reporting features for residential forecasts New Features: Show the codes chosen for unit types 1-6 on the projected units, SYF and MSYF pages In Forecast Report dock pane, add ability to summarize selected study area features Allow Demographic Reports to be created for All Polygons in a feature class. Minor bugs and UI improvements Fixed bug in plans based on forecast where the stats windowâ€™s data for year 0 (current year) did not include other STUTYPES that were included in the forecast (SSP-230) Fixed issue in forecast reports that did not accept a grade range of -1-6 or -1-12 because it could not correctly parse the two dash characters (SSP-231) Build 1.9.2 FY26 Q2 Update 5 (Jan26) Introducing a new Walk Zone tool New Features Generate walk zone polygons around school points at any distance or time (e.g. 1, 3, 5 mile distances or 5, 10, 15 minutes) for use in analysis for your district. Bugs fixed: Fixed bug in street/address directories when schools have STRT_GRD of -2 (SSP-212) Added ability to prompt user to open the Address Directory from Pro after exporting, rather than make them browse to the folder first. Fixed bug SSP-215 that did not update the stats window of plan based on a forecast after viewing other student attribute and then selecting grade distribution and a forecast year in the future (numbers did not reflect the future forecasted yearâ€™s data) Build 1.9.1 FY26 Q1 Update 4 (Dec25) Bugs fixed: Fixed issue with Rate of Change enrollment forecast that caused no results to be created for grades 10, 11, and 12 Fixed issue that prevented the â€˜Currently selected study areas on mapâ€™ option from being enabled in a factor dockpane when features were selected Fixed issue with closing a forecast factor that would leave the table open Updated the phrasing of a data validation message to make it more clear (regarding students enrolled outside the grades that the District serves) Build 1.9.0 FY26 Q1 Update 3 (Dec25) Introducing â€˜Sync Plansâ€™ feature and moreâ€¦ New Features New option to sync changes between multiple plans: This does not work with Plans based on enrollment; only residence and forecasted students. Checking on plans in the â€˜Plans to Syncâ€™ menu will push the following changes to those plans: Boundary reassignments; Reassignment of study areas from their current school to a different school. Any changes using the Reassign Study Area button (allows you to reassign all study areas by closest school, capacity, max limit, etcâ€¦) Add new/existing school or update capacity You can now summarize the statistics window by â€˜Student Attributeâ€™ in a plan based on forecasted data You can now use keyboard modifiers when selecting study areas during reassignment, just like the out-of-the-box selection tools in Pro Holding SHIFT when selecting will ADD more study areas to the current selection Holding CTRL when selecting will REMOVE study areas from the current selection Minor bugs and UI improvements Fixed a bug that would clear out any feature selections unexpectedly, making it difficult to see selected records Updated Statistics Window title to include the planâ€™s name, so the user can easily tell which plan those statistics relate to when multiple maps are open, sometimes plans can be open side by side when syncing and now the stats dock pane shows the planâ€™s name to reduce confusion. IMPORTANT! The new enrollment forecast methodology (Rate of Change) has been updated slightly The change in this version is that the K class calculation is now done the same as the PK class using the â€˜Direct Rate of Changeâ€™ formula. See our full documentation for more details. Build 1.8.9 FY26 Q1 Update 2 (Nov25) Introducing â€˜Rate of Changeâ€™ enrollment forecast & study area ID tool for forecasts New method for creating enrollment forecasts: Rate of Change This adds a new methodology called â€˜Rate of Changeâ€™ in addition to the existing â€˜Transfer Patternâ€™ method User can select from a menu which method to use Rate of Change method only applies to schools with a boundary. Schools with no boundary (magnet, district wide, etc.) will still use the â€˜Transfer Patternâ€™ method Study area ID tool for forecasts: Click on a study area and see a popup windows with all the factors applied to that polygon and the forecast results generated in a single click Plan overlay feature now allows you to add more than one overlay and only removes them when you choose the first option in the list â€œDo not overlay another planâ€, otherwise the user must remove them individually. New tooltips and explanation labels for Data Enrichment and Enrollment Forecast tools New tooltips, help information, and UI updates Fixed bugs and made improvements to copying and renaming plans and forecasts Data Enrichment: updated tooltips, screenshots, and UI labels to help explain what will be included in the output based on user input selections Various improvements to UI elements across the application for better consistency New Help button on SchoolSite â€˜Shareâ€™ ribbon to direct users to our web help documents Build 1.8.8 FY26 Q1 Update 1 (Oct25) Introducing Automated Attendance Matrix feature Fixed error when entering a lowercase grade range like â€˜k-6â€™ Added an option to include â€˜SEâ€™ students when making an automated attendance matrix Changed the data type requirements to enforce only â€˜shortâ€™ int numerical values instead of â€˜shortâ€™ or â€˜longâ€™ integers to avoid any really large numbers in the input that might be attempted to get written to another table that only accepts â€˜shortâ€™ Changed a data validation from error to warning If a school serves a grade, and no students are enrolled in that grade, it now reports a warning instead of error Added a warning to identify overlaps in school coverage such as a study area assigned a K-6 elementary and a 6-8 middle that could indicate an option area for grade 6 that might go otherwise unnoticed. Build 1.8.7 FY26 Q1 release Introducing Automated Attendance Matrix feature Create an attendance matrix using GE â€œGeneral Educationâ€ students by defining the grade ranges for each of the grade levels present in the study area data. Data enrichment tool upgrade This tool will now enrich both current study areas as well as now plans so you can attach forecasted student counts to proposed attendance boundaries from plans you create. Misc changes Imported historical student data is now enriched (just like current year student data already was) with three additional fields of data: school name of residence, school code of residence, and school name of enrollment New data validation rule that will check to determine grades served district wide (that make up the attendance boundaries) and make sure all students are in grades served by those schools Minor UI updates, tooltips, etc. Build 1.8.6 Introducing Program Re-assignment feature Import programs (special ed, music, dual language, etc. Each program has a number of reserved classroom seats) Add new programs/delete programs Reassign programs from one school to another Stats window now shows a modified capacity column that reduces the overall capacity based on the number of seats of programs assigned to that school New data validation rules Detect if a study area is assigned to schools that create gaps in grade range coverage Detect if a student is enrolled in a school that does not serve their grade (8th grader enrolled in a 9-12 school) Detect if a school serves a grade that has no students enrolled (school serves K-6 but only has K-5 enrolled) Misc changes Several improvments and bugs addressed for plans with enrollment Minor UI updates, tooltips, etc. Build 1.8.5 Pre-Fall revisions Bug fixes to plans with enrollment Student enrichment to imported data and original source to add fields defining school of enrollment and school of residence More help information New background on load New â€˜Copyâ€™ button for plans/forecasts Changes to capacity can be saved back to imported schools for future plans Updates to rendering a forecast to alter alias of DISPLAY for Map Contents window Bypass warning message option enabled New schools in a plan automatically becomes target school for assignment Build 1.8.4 Pre-Fall upgrades (March 2025) Updates and bug fixes to plans with enrollment Read-only mode for forecasts to lock in factors Forecast appearance labeled to describe current settings New and updated help and tooltip icons and information Address directory upgrades for more compatibility across different Student Information Systems Reset Project tool now offers just to reset address directory information instead of all data Build 1.8.3 Plans with enrollment (April 2025 - internal only release for testing) First release that will create plans showing both residence and enrollment counts Minor UI updates and improvements Fixed issue when closing SchoolSite Pro from start page which caused it the hang requiring a force close New buttons to show plan/forecast comments to review how they were setup/configured Update help icons for better, more consistent look across tools Additional changes: Excel reports prompt the user to open them after export, which auto launches Excel and opens the report Build 1.8.2 Address Directory updates (March 2025) Updated address directory output to include: MID_, prefix direction, prefix type, suffix direction Build 1.8.1 Street/Address Directory release (February 2025) Updated error checking to prevent issues in various tools by limiting special characters used in plan and forecast names Updated tooltips and help links with more to come across the application Updates, UI tweaks, and bug fixes to Street/Address Directories based on feedback from the beta released at 1.8.0 Build 1.8.0 - Internal only release (February 2025) Beta release of street/address directory tools for internal testing MGT branding updates New help button and contextual help icons to help users navigate to https://ssphelp.mgt.us/ Various UI updates, alignments, layout improvements especially on the Start Page Enrollment forecast Excel formatting updates for better consistency Build 1.7.9 - August release (August 2024) Fixed bug introduced with ArcGIS Pro 3.3 when using Plan Impact Summary report Build 1.7.8 - August release (August 2024) Fixed bug when copying a forecast Updated format for enrollment forecasts and Excel export to be more consistent with residence forecasts and align with template guidelines Build 1.7.7 - ArcGIS Pro 3.3+ only (July 2024) Fixed additional bugs related to limited field names in ArcGIS Pro 3.3 causing exporting reports/tables to Excel to fail such as the statistics window and causing importing of historical student to fail when calulating mobility Added ability to import street data in preparation for street directory tool Build 1.7.6 - ArcGIS Pro 3.3+ only (July 2024) Minor UI updates Data Enrichment Tools released to enrich tract data with estimated number of students based on units and SYF. Also creates enriched study area data with numbers of forecasted students in each area. Reset Project bug fixed that lead to missing TYPE2 units being imported Added Capacity for each school in forecast report when reporting on attendance areas and formatted for output in Excel Build 1.7.5 (Nov 2023) Fixed problem when importing historical students Build 1.7.4 (Nov 2023) This build fixes an issue preventing the assignment of study areas to the target school in plans that have been copied and/or renamed. Build 1.7.3 (Nov 2023) Bugs fixed for labeling in plans Bugs fixed for symbolizing a forecast Bugs fixed for showing the data about the selected study areas in a plan when boundary planning Bugs fixed for changing which grade ranges are shown in the statistics table Bugs fixed for error messages that are shown when a forecast was first created Build 1.7.2 (Oct 2023) Student yield factors have been expanded from just PK, K-6, 7-8, 9-12 to PK through 12 with all individual grades. New sorting of enrollment forecasts allows straight alphabetical sorting instead of grouping elementary first followed by middle and high and then listed alphabetically in those groups. Fixed bugs when using Remove Unassigned Schools and Plan Summary Build 1.7.1 (Aug 2023) New feature: Reset Geodatabase allows the user to delete all imported data and maps that have plans or forecasts to start over with new data in the same project Plan statistics and forecast reports no longer have pre-defined grade ranges of K-6,7-8,9-12. It only has a grade range textbox for easier entry Layers that have definition expressions are flagged during Data Setup as warnings to alert the user Changed all references of Maturation to Buildout In Forecasts, under Appearance, you are now able to symbolize resident student change to have its end year as Buildout. Bug fixes related to data setup for historical students Bug fixes for when enrollment forecast would indicate changes were made to resident forecast when they had not been forcing an unneeded recalculation of the enrollment forecast Bug fixes when exporting mobility reports. Build 1.7.0 (Feb 2023) Updated start page for improved ability to find previous Projects Fixed bugs found when working with specific datasets related to features such as: Exporting plans Warning when the license is about to expire Enrollment forecasts Reassign by current boundaries Improved rounding to avoid really long decimal values Plan Summary report Forecast report setup was missing grade ranges on occasion Build 1.6.9 (Dec 2022) Fixed bugs when making a forecast Build 1.6.8 (Dec 2022) Fixed bugs preventing the successful export of forecast reports to both text and Excel formats Improved the rounding of values in the plan stats window so they would not exceed two decimal points Updated the messaging around enrollment forecasts to make sure the report indicates that it needs to be refreshed after changes are made to residential forecast values. This message would previously disappear too soon. Enrollment forecasts now show a warning when it detects that a school has had a significant gap in enrollment from year to year to indicate that the resulting forecasted values could be negatively impacted. When sorting the forecast enrollment report by grade to show elementary first, then middle, followed by highâ€¦.it now considers PK and K to be the same value for sorting purposes so you donâ€™t get PK-6 followed by K-6. Those are both considered â€˜elementaryâ€™ and are in the same grouping in the report. Better handling of â€˜customâ€™ grade ranges in plan statistics and forecast report setup. Custom ranges no longer accepts grade ranges that are already available via checkbox (i.e. K-6 is not â€˜customâ€™, just select it from the set of pre-defined grade ranges. Use â€˜customâ€™ for things like K-4 or 6-8. Build 1.6.7 (Dec 2022) Schools are ordered in the report first by grade, then by name so the elementary schools are grouped alphabetically followed by middle schools, etcâ€¦ Messages when schools are excluded from reports are re-worded to make more sense as to why they could not be forecasted Added total enrollment summary line to the top of the report Build 1.6.6 (Nov 2022) Various enhancements to formatting of reports both on screen and when exported to Excel Bug fix for staffing forecast when calculating the students transferring out of the PK grade in boundary schools Fixed bug in the Project Summary report that caused it to not find the required DEVELOPER field Fixed issue where maturation units were not included in a development summary excel report in cases where a studyarea had zero development in years one thru ten but then had development beyond that. Updated Student Report to summarize an accounting of student data to give insight into what students were in the file, which were in district, and which were used in the plan or forecast broken down by STUTYPE and GRD Build 1.6.5 (Oct 2022) Built for ArcGIS Pro 3.0 First release out of beta

## FAQ

## What kind of data do I need?

The core GIS and student datasets needed by SchoolSite Pro.

### Map Datasets for Use with SchoolSite Pro

In order to use the SchoolSite Pro Extensions, you must have the following required map datasets:

1. Study Areas - A polygon dataset of the district showing planning areas coded by school attendance areas
2. Schools - A point dataset of schools geocoded to a street dataset of the district
3. Students - A point dataset of students geocoded to a street dataset of the district

### Optional Datasets

Additionally, the following datasets are optional and not necessary to run the application, but can help you with other features in SchoolSite Pro:

1. Streets - A line dataset
2. Tract - A point or area dataset of planned residential development within the district
3. Assessor - A point feature of existing housing data within the district. This dataset is necessary only if you wish to run maturation projections or create student yield factors.

### Data Formats

Although the feature class is the recommended format for ArcGIS Pro, any of the following Esri formats can be used to store your data for use with SchoolSite Pro and to create Redistricting Plans or Forecasts:

- ArcGIS File Geodatabase Feature Class
- ArcGIS Personal Geodatabase Feature Class
- ArcGIS SDE Geodatabase Feature Class
- Esri Shapefile

Each of the three dataset attributes must be precisely defined in order to run the application. To learn about field/attribute definitions required for SchoolSite Pro, refer to the topic "How to Create Your Own Data".

- What Are Study Areas?
- Where Can I Obtain Data?
- How to Create Your Own Data

## Where can I obtain data?

Common public and commercial sources for street and GIS data.

### Where Can I Obtain Data?

The District can use ArcGIS to create schools, students, and study areas. Street data, which is needed by the district to create school, student, and study area data, can come from a variety of sources.

If the District does not have a street database, the best source of data, if possible, is usually your local city or county's GIS Department.

### Free Data Sources

If your city or county does not keep Esri formatted street data, there are several free sources available. However, keep in mind that because this information is free, you usually get what you pay for in terms of accuracy.

1. Your local city
2. Your local county
3. Your state
4. U.S. Census Data
5. Esri maps and data - Available at no cost with your ArcGIS license

### Commercial Data Sources

Additionally, street databases can be purchased from many third party vendors such as:

- TomTom can license their street data in Esri format on a county basis. The data can be licensed for display, geocoding and/or routing.
- HERE (formerly NAVTEQ) can license their street data in Esri format on a county basis. The data can be licensed for display, geocoding and/or routing.

However, if the District would rather have Davis Demographics create the data, we would be happy to provide you with a quote. For more information, please contact us at: info@davisdemographics.com

### Related topics

- How to Create Your Own Data
- What Are Study Areas?

## Reports

## Student Yield Factor Report

Export calculated student yield factors by geography and school level to Excel.

### Where to find it in SchoolSite Pro

Data Setup: after assessor data is imported and validated, use the Student Yield Factor export option without creating a forecast. Forecasting: open an existing or newly created forecast, choose Forecasting > Factors > Student Yield Factor, then use Export at the bottom of the pane.

Image: Student Yield Factor report export option from datasetup tool.

Image: Student Yield Factor report view in SchoolSite Pro.

### Report setup and export

Choose the geography level to report, such as elementary, middle, high, intermediate, or district-wide across all study areas.

Export the calculated student yield factor report to an Excel workbook.

Image: Student Yield Factor report export output in Excel.

## Automated Attendance Matrix

Export the relationship between a student's resident boundary and enrolled school to Excel.

### Where to find it in SchoolSite Pro

Open the Automated Attendance Matrix from the SchoolSite Pro reporting workflow after the required school and student data are available.

Image: Automated Attendance Matri x view in SchoolSite Pro.

### Report setup and export

Configure the grade ranges for each school type before generating the matrix. The report compares where students reside with the school where they are enrolled.

Export the attendance matrix, including the configured grade bands and school relationships, to Excel.

Image: Automated Attendance Matrix export output in Excel.

## Street Directory Report

Export a district street directory with the corresponding schools of assignment.

### Where to find it in SchoolSite Pro

Open the Street Directory option from the Data Setup or directory tools workflow.

Image: Street Directory report view in SchoolSite Pro.

### Report setup and export

Confirm the district street dataset and school assignment data have been imported and validated.

Export the large street-level directory to Excel for district review and assignment lookup.

Image: Street Directory export option.

Image: Street Directory export output in Excel.

## Address Directory Report

Export every address point or parcel and its corresponding schools of assignment.

### Where to find it in SchoolSite Pro

Open Address Directory from the Data Setup or directory tools workflow.

Image: Address Directory report view in SchoolSite Pro.

### Report setup and export

Use validated address points or parcel polygons with the district school assignment data.

Export the address directory to Excel. The output contains each address or parcel and its assigned schools.

Image: Address Directory export option .

Image: Address Directory export output in Excel.

## Utilization Report

Create a standardized utilization output using attendance, grade bands, capacity, transfers, and adjustments.

### Where to find it in SchoolSite Pro

Open Utilization Report from the reporting tools in the Create workflow.

Image: Utilization Report view in SchoolSite Pro.

### Report setup and export

The report uses attendance matrix data, configured grade bands, school capacity, and approved transfer and adjustment rules. Select the grade level or levels to include.

Generate the UTA table and export the standardized utilization output to Excel.

Image: Utilization Report export option.

## Student Reports

Generate quick student reports by grade and other selected student attributes.

### Where to find it in SchoolSite Pro

Select an area on the map, then open Student Reports from the SchoolSite Pro reporting tools.

Image: Student Reports view in SchoolSite Pro.

### Report setup and export

Choose the grade and other user-selected attributes. Use the options menu to add fields to the report before running it.

Generate the selected student report and export the results when an Excel output is needed.

Image: Student Reports output in Excel.

## Export Event Log

Export the project event history to Excel for analysis or technical support.

### Where to find it in SchoolSite Pro

Open Export Event Log from the Share or reporting tools group.

Image: Export Event Log view in SchoolSite Pro.

### Report setup and export

No forecast is required. Review the project activity recorded in the event log before exporting.

Export the event log as an Excel file in the project home directory.

Image: Export Event Log output in Excel.

## Plan Statistics Report

Export the currently selected Statistics Window tab to Excel.

### Where to find it in SchoolSite Pro

Open the Statistics Window for the active plan, choose the required tab, and use the export option in the Statistics tools.

Image: Choose Export Statistics from the Statistics window menu button top right.

### Report setup and export

The Statistics Window must be open. Select the schools, grades, grade ranges, and statistic type before exporting.

Export the current selected statistics tab to Excel.

Image: The selected plan statistics are exported to an Excel workbook.

## Plan Impact Summary Report

Export impacted study areas and impacted students based on boundary changes.

### Where to find it in SchoolSite Pro

Open Plan Impact Summary from the plan statistics or redistricting reporting tools.

Image: Plan Impact Summary displays impacted students and study areas.

### Report setup and export

Use a plan with a changed boundary configuration and define the grade ranges in the Plan Statistics Window.

Generate the impacted study areas and impacted students outputs, then export the summary data to Excel.

Image: Plan Impact Summary output shows impacted student records and map results.

## Plan Summary Report

Show how forecasted resident students are grouped into proposed attendance areas.

### Where to find it in SchoolSite Pro

Open Plan Summary Report from the plan reporting tools for the active plan.

Image: Plan Summary Report view in SchoolSite Pro.

The report shows how forecasted resident students are grouped into proposed attendance areas, including the number of students in each grade and the total number of students in each school.

### Report setup and export

The active plan must be based on a forecast. Choose the plan and reporting geography before generating the report.

Generate the plan summary and export the forecasted resident student results to Excel.

Image: Plan Summary Report output shows forecasted resident students grouped into proposed attendance areas.

## Program Summary Report

Summarize programs, program changes, school capacities, and capacity changes caused by program placement.

### Where to find it in SchoolSite Pro

Open Program Summary Report from the School Programs gallery.

Image: Program Summary Report view in SchoolSite Pro.

### Report setup and export

Choose whether to include all programs, programs moved from their original location, all schools and original capacities, or schools whose capacities changed.

Generate the program summary and export the selected program and capacity information to Excel.

Image: Program Summary Report output shows program and capacity information.

## Export Statistics

Export the SchoolSite Pro plan statistics table in Excel format.

### Where to find it in SchoolSite Pro

Open the Statistics Window, select the required statistics tab, and choose Export Statistics.

Image: Choose Export Statistics from the SchoolSite Pro Share tab.

### Report setup and export

A forecast is required for forecast-based statistics. The Statistics Window must remain open while exporting.

Export the active SchoolSite plan statistics table to Excel.

Image: Export Statistics creates an Excel workbook with the selected statistics table.

## Forecast Reports

Create forecast reports by geography and selected grade ranges, with text and Excel export options.

### Where to find it in SchoolSite Pro

Open Forecasting > Forecast Reports, then use the Setup and View tabs to configure and review the report.

Image: Forecast Report view in SchoolSite Pro.

### Report setup and export

Open or create a forecast, choose the geography and grade ranges, and optionally include attendance-area or school-capacity views.

Export forecast reports as Excel or text. Some attendance-area reports also include school capacity charts.

Image: Enrollment Forecast Report output in schoolsite Pro.

Image: Enrollment Forecast Report output in Excel.

Image: Enrollment Forecast Report output in textfile.

## Mobility Summary Report

Export mobility values by school and grade, including counts and percentages used in the calculation.

### Where to find it in SchoolSite Pro

Open Forecasting > Factors > Mobility Factors, then choose the mobility summary export option.

Image: Mobility Summary report view in SchoolSite Pro.

### Report setup and export

Select the grade level and review the historical student data used to calculate mobility values.

Export the mobility summary to Excel, including raw student counts and percentage values that help assess confidence in the calculation.

## Development Summary Report

Export a summary of projected housing development and related student yield assumptions.

### Where to find it in SchoolSite Pro

Open Forecasting > Factors > Projected Housing Units and choose Development Summary.

Image: Development Summary report view in SchoolSite Pro.

### Report setup and export

Review the projected housing units, development phases, housing types, and student yield assumptions included in the forecast.

Export the development summary to Excel for review of projected units and forecast inputs.

Image: Development Summary export output in Excel.

## Projects Summary Report

Export the projected housing projects included in the forecast.

### Where to find it in SchoolSite Pro

Open Forecasting > Factors > Projected Housing Units and choose Projects Summary.

Image: Projects Summary report view in SchoolSite Pro.

### Report setup and export

Select the project or projects and review their projected units, phasing, and status before exporting.

Export the projects summary to Excel.

Image: Projects Summary export output in Excel.

## Export Student Report

Export the student data used in an active forecast or plan to Excel.

### Where to find it in SchoolSite Pro

For viewing a export student report, use open plan>assign> Export Student Report.

Image: Export Student Report view in SchoolSite Pro.

### Report setup and export

Choose the active forecast based plan or plan and confirm the student population and fields included in the report.

Export the student summary report to an Excel file stored in this Project's home directory. This report summarizes the student data used in this plan.

Image: Student Report output.

## Enrollment Forecast Report

Export an enrollment forecast report in XLSX format.

### Where to find it in SchoolSite Pro

Open Forecasting > Enrollment Forecast and choose the enrollment forecast report export option.

Image: Enrollment Forecast report view in SchoolSite Pro.

### Report setup and export

Create or open an enrollment forecast before using this option. Configure the selected schools, grades, and forecast years.

Generate the enrollment forecast report and export it to XLSX,txt.

Image: Enrollment Forecast export output in text format.

Image: Enrollment Forecast export output in Excel format.

## Toolkit

### Data Setup

Category: Data Setup

Set up your SchoolSite project with the necessary feature classes: Study Areas, Schools, and Students.

What this tool does

Scans each dataset to confirm it conforms to the expected schema and reports Warnings (items you might want to correct) and Errors (items you must correct before continuing).

Before you begin

Image: Data Setup validates the datasets used by SchoolSite Pro.

### Help

Category: Help

Open help information for SchoolSite Pro tools and workflows.

Use Help when you need guidance about the active SchoolSite Pro workflow or tool.

Image: Open contextual help for SchoolSite Pro.

### Reset Project Data

Category: Data Setup

Completely start your SchoolSite Pro project over by deleting the SchoolSite geodatabase.

This deletes all plans, forecasts, and imported data for the project, so use it only when you intend to rebuild from scratch.

Image: Reset Project Data is available from the Data Setup workflow.

### Create

Category: Create & Manage

Create a new plan, forecast, or street/address directory using SchoolSite Pro.

Creating a new SchoolSite item requires at least Schools, Study Areas, and Students feature classes to already be imported into the project via Data Setup.

Image: Create a new SchoolSite planning item.

### Open

Category: Create & Manage

Open an existing SchoolSite plan, forecast, or street/address directory in the project.

Available whenever one or more SchoolSite items already exist in the current project.

Image: Open an existing plan or forecast from the project catalog.

### Delete

Category: Create & Manage

Delete an existing SchoolSite plan, forecast, or street/address directory in the project.

Permanently removes the selected item; this cannot be undone once confirmed.

Image: Remove an existing planning item when it is no longer needed.

### Copy

Category: Create & Manage

Copy an existing SchoolSite plan, forecast, or street/address directory in the project.

A quick way to branch off a scenario variation without rebuilding a plan or forecast from scratch.

Image: Copy a plan to create a scenario variation.

### Address Directory

Category: Create & Manage

Create an address directory of district address points or parcels and school assignments.

Requires Schools, Study Areas with school assignments, and either Address Points or Parcel Polygons. Use Export Directories to write the completed address directory to Excel.

Image: Create an address directory from address points or parcels.

### Street Directory

Category: Create & Manage

Create a street directory listing district streets and corresponding schools of assignment.

Requires Schools, Study Areas, and a Streets network with address ranges and street names. Use Export Directories to write the completed street directory to Excel.

Image: Create a street directory with assigned schools.

### Export Directories

Category: Export

Export a SchoolSite street or address directory to Microsoft Excel.

Requires a generated street or address directory. Street output lists district streets and assigned schools; address output lists address points or parcels and assigned schools.

Image: Export a completed street or address directory.

### Start Assignment

Category: Assign

Start assigning Study Areas to different schools while SchoolSite tracks your changes.

Begins an editing session so that any reassignments can be reviewed and undone before they are saved.

Image: Start an attendance-area assignment session.

### Target School

Category: Assign Tools

Select the school's attendance area that you would like to assign Study Areas to.

Only enabled once an assignment session has been started.

Image: Choose the target school for selected Study Areas.

### Assign Study Areas

Category: Assign Tools

Assign the selected Study Areas to the target school's attendance area shown in the combo box.

Requires an active assignment session and at least one Study Area selected on the map.

Image: Assign selected Study Areas to the target school.

### Save Assignments

Category: Assign

Commit the changes made to your attendance areas before stopping your assignment session.

Only enabled once one or more assignment edits have been made during the current session.

Image: Save the attendance-area assignment changes.

### Undo

Category: Assign Tools

Undo your previous assignment.

Reverses the most recent Study Area reassignment made during the active session.

Image: Undo or clear the most recent assignment change.

### Select by Rectangle

Category: Assign Tools

Select Study Areas by clicking them or drawing a box around them.

One of the four selection tools available during an assignment session.

Image: Select Study Areas with an assignment selection tool.

### Select by Polygon

Category: Assign Tools

Select Study Areas by drawing a polygon around them.

Useful for irregularly shaped boundary edits that a rectangle can't capture cleanly.

Image: Select Study Areas with an assignment selection tool.

### Select by Lasso

Category: Assign Tools

Select Study Areas by drawing a freehand shape around them.

Ideal for quickly tracing along an existing boundary line.

Image: Select Study Areas with an assignment selection tool.

### Select by Circle

Category: Assign Tools

Select Study Areas by drawing a circle around them.

Handy for radius-based selections such as everything within a set distance of a point.

Image: Select Study Areas with an assignment selection tool.

### Reassign Study Areas

Category: Reassign

Reassign your Study Areas using different methods, like closest school, maximum capacity, or reverting to the plan's original assignment.

Build 1.9.6/1.9.7 adds the ability to exclude specific schools from a bulk reassignment run.

Image: Reassign Study Areas using a selected method.

### Remove Unassigned Schools

Category: Schools Management

Remove any schools from this plan that do not have any Study Areas assigned to them.

Used to close a school once all of its Study Areas have been reassigned elsewhere. Not available during an active assignment session.

Image: Remove schools that no longer have Study Areas assigned.

### Update Schools

Category: Schools Management

Add a new school or existing school to your plan.

Once added, you can assign Study Areas to it to create an attendance boundary for that new school.

Image: Add a new or existing school to the plan.

### Plans to Sync

Category: Assign Tools

Select plans (resident or forecast plans only, not enrollment) with the same grade type as the current plan to receive synced changes.

When Sync On Demand is enabled, Study Area school assignment changes made to the current plan are also applied to the selected plans. No changes sync unless plans are selected here.

Image: Select plans that should receive synchronized assignment changes.

### Identify

Category: Map Tools

Identify the Study Areas that you select on the map.

A redistricting plan must be open and active for this tool to work.

Image: Identify selected Study Areas on the map.

### Lock Assignments

Category: Assign

Lock in the current plan and make it read-only.

Once locked, the plan's output is considered final and no further assignment changes are possible.

Image: Lock the current plan so assignments cannot be changed.

### Show Statistics

Category: Statistics

Display and customize information about the students and attendance areas in a table format.

Use these statistics to monitor student numbers as Study Areas are assigned to schools.

Image: Review students and attendance areas in the latest Statistics Window table.

### Plan Impact Summary

Category: Assign & Boundaries

Produce a summary of Study Areas and students impacted by a new boundary configuration.

Creates impacted Study Areas and impacted students outputs with counts by the grade ranges defined in the Plan Statistics Window. Review the generated datasets and export the summary when needed.

Image: Summarize Study Areas and students affected by boundary changes.

### Plan Overlay

Category: Symbology

Overlay another plan's attendance area on top of your current plan for comparison.

Choose which plan's boundaries to display alongside the one you're currently editing.

Image: Compare another plan's attendance areas with the current plan.

### Label Areas

Category: Labeling

Display each attendance area's name on the map.

Toggle labeling on or off for the plan's attendance areas.

Image: Display attendance-area names on the map.

### Export Plan

Category: Export

Export your attendance areas to a standalone feature layer.

Produces a shareable layer representing the plan's current boundary configuration.

Image: Export and review plan information from the Share tools.

### Export Statistics

Category: Export

Export the currently selected SchoolSite plan statistics tab to Excel.

The Statistics Window must be open. Select the schools, grades, grade ranges, and statistic type before exporting; forecast-based statistics require a forecast.

Image: Export and review plan information from the Share tools.

### Export Plan as Study Areas

Category: Export

Export your current boundaries in Study Area format.

Useful for feeding a finalized plan's boundaries back into future Data Setup imports.

Image: Export and review plan information from the Share tools.

### Show Plan Comments

Category: Info

Show comments recorded against the current plan.

Comments are a lightweight way to track planning notes alongside a plan.

Image: Export and review plan information from the Share tools.

### Forecast Reports

Category: Forecast Reporting

Create and export forecast reports by geography and selected grade ranges.

Open Forecasting > Forecast Reports, choose Study Areas, attendance areas, district/subdistrict, or other supported geographies, then select grade ranges. Export to Excel or text; some attendance-area reports include school capacity charts.

Image: Create forecast reports by geography and grade range.

### Refresh Forecast

Category: Forecast Reporting

Reapply a forecast after one or more factors have been modified.

Enabled whenever a factor has changed and the forecast is out of sync with it; disabled once the forecast is up to date.

Image: Reapply the forecast after factors change.

### Lock Factors

Category: Forecast Reporting

Lock in the current factors and make this forecast read-only.

Once locked, the forecast report is considered final and no further changes to the factors are possible.

Image: Lock the current forecast factors.

### Enrollment Forecast

Category: Forecast Reporting

Estimate future school enrollment and export the enrollment forecast report to XLSX.

Requires at least two years of historical student data imported through Data Setup. Configure schools, grades, forecast years, and the Transfer Pattern or Rate of Change method before generating the report.

Image: Configure and export an enrollment forecast.

### PK Factors

Category: Forecast Reporting

Modify your district's pre-kindergarten birth factors.

PK factors play an important role in the forecast model, determining the number of incoming pre-kindergarten students.

Image: Modify pre-kindergarten birth factors.

### K Factors

Category: Forecast Reporting

Modify your district's kindergarten birth factors.

Kindergarten factors, alongside PK factors, drive the projected number of incoming kindergarten students each year.

Image: Modify kindergarten birth factors.

### Distributed Enrollment

Category: Forecast Reporting

Distribute the forecasted number of students at maturity across grade levels using weighted factors.

Elementary grades K-6 distribute evenly at 0.14285 and intermediate grades 7-8 at 0.5 (fixed). High school grades 9-12 can be weighted, but must total 1.00 â€” by default each is 0.25.

Image: Distribute forecasted enrollment across grade levels.

### Mobility Factors

Category: Forecast Reporting

Calculate mobility values by school and grade from historical student movement.

Open Forecasting > Factors > Mobility Factors, select a grade, and export the mobility summary to Excel. The output includes raw student counts and percentages used to assess calculation confidence.

Image: Review and export mobility values by school and grade.

### Student Yield Factors

Category: Forecast Reporting

Calculate and export Student Yield Factor reports for forecast housing assumptions.

Open an existing or newly created forecast, choose Forecasting > Factors > Student Yield Factor, and export by elementary, middle, high, intermediate, or district-wide geography. Data Setup also provides SYF Export before a forecast exists.

Image: Calculate and export Student Yield Factor reports.

### Projected Housing Units

Category: Forecast Reporting

Track projected housing developments, phases, unit types, and occupancy years.

Supports up to ten phases per tract and Student Yield Factors for forecast calculations. The workflow includes Development Summary and Projects Summary exports to Excel.

Image: Review projected housing and forecast factors.

### Build-out Yield Factors

Category: Forecast Reporting

Estimate how many students will be present once all development in a Study Area is finished.

Maturation Student Yield Factors are calculated regardless of construction year and applied to year 12 in the projected housing table, using geocoded student and tax-assessor housing data.

Image: Review build-out yield factors for forecast housing.

### Forecast Appearance

Category: Forecast Display

Change the map display appearance of an open forecast.

Controls symbology used to visualize forecast results on the map.

Image: Control how forecast results appear on the map.

### Show Forecast Comments

Category: Forecast Display

Show comments recorded against the current forecast.

Mirrors Show Plan Comments, but scoped to a forecast.

Image: Review notes associated with the current forecast.

### Identify Forecast

Category: Forecast Display

Identify the forecast Study Areas that you select on the map.

A redistricting forecast must be open and active for this tool to work.

Image: Identify selected forecast Study Areas on the map.

### Student Reports

Category: Analysis Tools

Generate student reports by grade and other selected attributes for the selected area.

Select an area on the map, choose grade and other attributes, and add fields from the Options menu before running the report. Export the result when an Excel output is needed.

Image: Generate student reports for a selected area.

### Demographic Reports

Category: Analysis Tools

Generate community and demographic reports for a selected study area using Esri Business Analyst Online data.

Choose a report type, define the study area by drawing a polygon, selecting polygon features, creating an area around a point, or using All Polygons. Generate PDF or Excel reports, review the cost estimate, and save each batch report to a selected folder when needed.

Image: Generate community and demographic reports for a study area.

### Walk Zone Analysis

Category: Analysis Tools

Create service-area zones around selected schools based on walking or driving travel time or distance.

Select a school layer and school(s), choose a travel mode such as Walk Time, Walk Distance, Drive Time, or Drive Distance, enter comma-separated break values, and run the ArcGIS Online network analysis. The resulting WalkZones feature class is added to the active map.

Image: Create walking or driving service-area zones around schools.

### Program Placement Analysis

Category: Analysis Tools

Identify the best school locations to serve student demand while considering capacity and the selected number of facilities.

Open the Location Allocation tool, choose the student and school layers, select candidate schools, enter a capacity for each school, and choose the number of optimal locations. Review the ArcGIS Online credit estimate and confirm the run to create Output Facilities, Output Demand Points, and Output Allocation Lines.

Image: Evaluate school locations for student demand and capacity.

### Data Enrichment

Category: Analysis Tools

Enrich existing tract and Study Area datasets with additional data based on a forecast.

Tract enrichment adds Year1â€“Year10 forecasted student-count fields; Study Area enrichment creates enriched Study Area and aggregated attendance-boundary feature classes for the grade ranges defined in the forecast.

Image: Enrich tract and Study Area datasets with forecast data.

### Export Event Log

Category: Analysis Tools

Export the project event log to an Excel file in the project home directory.

Use the export for analysis or to email activity history to technical support when troubleshooting an issue. No forecast is required.

Image: Export the project event log for analysis or support.

### Number Study Areas

Category: Assign Tools

Click a Study Area polygon to automatically assign the next available Study Area ID.

Only available when a map with a valid Study Area layer (containing an STDYAREA field) is active.

Image: Assign the next available Study Area ID to a selected polygon.

### Import Programs

Category: School Programs

Browse for an Excel spreadsheet and import program data into a new table.

The fastest way to bring an existing program roster into a plan in bulk.

Image: Manage school program data.

### Add Programs

Category: School Programs

Open a panel to enter program details including name, capacity, and current location.

Once added, the tool automatically updates school capacities based on the new program.

Image: Manage school program data.

### Delete Programs

Category: School Programs

Delete a program from a school.

After deletion, school capacity is updated accordingly.

Image: Manage school program data.

### Reassign Program

Category: School Programs

Edit a program, including moving it to another school.

Opens an edit panel scoped to the selected program.

Image: Manage school program data.

### Program Summary Report

Category: School Programs

Generate and export a summary of programs, schools, and capacity changes.

Review all programs, programs moved from their original location, original school capacities, and capacity changes caused by program placement. Export the selected summary to Excel.

Image: Summarize programs, schools, and capacity changes.

### Automated Attendance Matrix

Category: Reports

Generate and export an attendance matrix showing resident versus enrolled schools.

Configure grade ranges for each school type before generating the matrix. Requires relevant school and student data; the Excel output includes the configured grade bands and CAPACITY where supported.

Image: Generate an attendance matrix from configured grade ranges.

### Utilization Report

Category: Reports

Generate a standardized utilization or UTA table and export it to Excel.

Uses attendance matrix data, configured grade bands, school capacity, and approved transfer and adjustment rules. Complete Data Setup and select the grade levels to include.

Image: Generate a utilization report from attendance and capacity data.

### Plan Summary Report

Category: Statistics

Summarize forecasted resident students grouped into proposed attendance areas.

Requires an active plan based on a forecast. The report combines forecasted resident students with proposed boundary changes and can be exported to Excel.

Image: Summarize forecasted students by proposed attendance area.

### Export Student Report

Category: Forecast Reporting

Export the student summary for the active plan or forecast to Excel.

Summarizes the student data used in the current plan or forecast and writes the Excel file to the project home directory.

Image: Export the student summary for the active plan or forecast.

## Release notes

### Version 1.9.7 (September 2026)

FY26 Q4 Update 10 - Patch.

- Quick patch to fix an issue when calculating mobility that broke at 1.9.6.

### Version 1.9.6 (September 2026)

FY26 Q4 Update 9.

- New: Utilization Report. This is now an automated report and is used to set up boundary comparison web apps during a rezoning project.
- Export SYF reports during Data Setup.
- Added a CAPACITY field to the automated attendance matrix Excel file.
- Additional residential forecasting charts are available with an optional checkbox during Report Setup.
- Additional student types that can be added to the automated attendance matrix are only available if they exist in imported student data, just like Create Plan.
- Improved Address Directory creation performance. It is now roughly twice as fast.
- Updated the Project Summary Report based on feedback from Cameron and the standardization team.
- Reassigning study areas by closest school, capacity, or maximum limit now allows one or more schools to be excluded from the process.
- SYF calculations are available only when importing Assessor data with polygon geometry.
- Added a warning when calculating a forecast if Projected Housing Units have no corresponding SYF values.
- Fixed an issue with Esri travel modes that could break walk-zone creation.
- The Tapestry Segmentation report was deprecated and a new version was added.
- When assigning study areas in a plan based on a forecast, the forecast year can no longer be changed in the stats window. Saving that change would lock in assignments and remove the Undo option.
- Additional minor bug fixes and UI improvements.

### Version 1.9.5 (July 2026)

FY26 Q4 Update 8.

- Users can choose a school to remove, and its study areas are automatically assigned to Unassigned.
- Forecast report exports now include the tabular data and chart in the same file.
- Improved forecast calculation performance.
- Improved performance when calculating year 12 of the projected housing units table.
- Additional minor bug fixes and UI improvements.

### Version 1.9.4 (June 2026)

FY26 Q3 Update 7. Introducing new reporting features for residential forecasts.

- SYF Automation uses parcel data to automatically generate student yield factors for new housing units.
- The Statistics Window can sort by any column and scale or zoom for improved readability.
- Added data validation to check consistency between student types across historical student data.
- A plan can be locked to prevent further study-area reassignments.
- School layers in a plan map now have Map Tips enabled by default.
- The study-area numbering tool was recreated from ArcMap.
- Forecasts can be summarized on any available study-area field, including CITY, ZIP, or other grouping fields.
- Plans with Enrollment now use all student types in the Current tab, matching the Estimated Enrollment tab methodology.
- Additional minor bug fixes and UI improvements.

### Version 1.9.3 (January 2026)

FY26 Q2 Update 6. Introducing new reporting features for residential forecasts.

- Show the codes chosen for unit types 1-6 on the projected units, SYF, and MSYF pages.
- The Forecast Report dock pane can summarize selected study-area features.
- Demographic Reports can be created for all polygons in a feature class.
- Fixed a plan-based-on-forecast stats window issue where year 0 did not include other STUTYPES included in the forecast (SSP-230).
- Fixed forecast reports for grade ranges -1-6 and -1-12, which previously could not parse the two dash characters (SSP-231).
- Additional minor bug fixes and UI improvements.

### Version 1.9.2 (January 2026)

FY26 Q2 Update 5. Introducing a new Walk Zone tool.

- Generate walk-zone polygons around school points at any distance or time, such as 1, 3, or 5 miles and 5, 10, or 15 minutes.
- Fixed a street and address directory issue when schools have STRT_GRD of -2 (SSP-212).
- Added the option to open the Address Directory from Pro after exporting.
- Fixed SSP-215, which prevented a plan-based-on-forecast stats window from updating after viewing another student attribute and then selecting grade distribution and a future forecast year.

### Version 1.9.1 (December 2025)

FY26 Q1 Update 4.

- Fixed Rate of Change enrollment forecasts that produced no results for grades 10, 11, and 12.
- Enabled the Currently selected study areas on map option in a factor dock pane when features are selected.
- Fixed an issue when closing a forecast factor that left the table open.
- Updated data-validation messaging to clarify students enrolled outside the grades served by the district.

### Version 1.9.0 (December 2025)

FY26 Q1 Update 3. Introducing Sync Plans and more.

- Added an option to sync changes between multiple residence and forecasted-student plans.
- Plan syncing pushes boundary reassignments, Reassign Study Area changes, new or existing schools, and capacity updates.
- The Statistics Window can be summarized by Student Attribute in a forecasted-data plan.
- Added SHIFT to add study areas and CTRL to remove study areas during reassignment selection.
- Fixed unexpected clearing of feature selections.
- Updated the Statistics Window title to include the plan name when multiple maps are open.
- Updated the Rate of Change enrollment forecast methodology so K uses the same Direct Rate of Change formula as PK.

### Version 1.8.9 (November 2025)

FY26 Q1 Update 2. Introducing Rate of Change enrollment forecasts and the study-area ID tool for forecasts.

- Added the Rate of Change enrollment forecast method alongside Transfer Pattern.
- Rate of Change applies to schools with boundaries; schools without boundaries continue to use Transfer Pattern.
- Added a forecast Study Area ID tool that shows applied factors and forecast results in one click.
- Plan overlays can now contain more than one overlay and are removed only when Do not overlay another plan is selected.
- Added tooltips and explanation labels for Data Enrichment and Enrollment Forecast tools.
- Added help information, UI updates, and fixes for copying and renaming plans and forecasts.
- Updated Data Enrichment tooltips, screenshots, and UI labels.
- Added a SchoolSite ribbon Help button linking to the web help documents.

### Version 1.8.8 (October 2025)

FY26 Q1 Update 1. Introducing the Automated Attendance Matrix feature.

- Fixed lowercase grade-range input such as k-6.
- Added an option to include SE students in the automated attendance matrix.
- Enforced short integer input values to prevent values too large for the destination table.
- Changed a data validation from error to warning when a school serves a grade with no enrolled students.
- Added a warning for overlapping school coverage such as K-6 elementary and 6-8 middle schools sharing grade 6.

### Version 1.8.7 (October 2025)

FY26 Q1 release. Introducing the Automated Attendance Matrix feature.

- Create an attendance matrix using GE students by defining grade ranges for each grade level in the study-area data.
- The Data Enrichment tool now enriches current study areas and plans with forecasted student counts.
- Imported historical student data now includes school name and code of residence and school name of enrollment.
- Added validation to check that students are in grades served by district attendance-boundary schools.
- Minor UI updates and tooltip improvements.

### Version 1.8.6 (Earlier release)

Introducing Program Re-assignment and expanded data validation.

- Import, add, delete, and reassign programs such as special education, music, and dual language.
- The Statistics Window shows modified capacity after program seats are reserved.
- Added validation for gaps in grade-range coverage, students enrolled outside a school's grades, and schools serving grades with no enrolled students.
- Several improvements and bug fixes for Plans with Enrollment, plus minor UI and tooltip updates.

### Version 1.8.5 (Earlier release)

Pre-Fall revisions.

- Bug fixes for Plans with Enrollment.
- Student enrichment now adds school-of-enrollment and school-of-residence fields to imported data.
- Added help information and a new background on load.
- Added Copy for plans and forecasts.
- Capacity changes can be saved back to imported schools for future plans.
- Updated forecast rendering, bypass warning behavior, and new-school target assignment.

### Version 1.8.4 (March 2025)

Pre-Fall upgrades.

- Updates and bug fixes for Plans with Enrollment.
- Added read-only mode for forecasts to lock in factors.
- Forecast appearance is labeled to describe current settings.
- Updated help icons and tooltip information.
- Improved Address Directory compatibility across Student Information Systems.
- Reset Project can reset only Address Directory information instead of all data.

### Version 1.8.3 (April 2025)

Plans with Enrollment. Internal-only release for testing.

- First release that creates plans showing residence and enrollment counts.
- Minor UI updates and improvements.
- Fixed a hang when closing SchoolSite Pro from the start page.
- Added buttons to show plan and forecast comments.
- Updated help icons for a more consistent appearance.
- Excel reports prompt users to open them after export.

### Version 1.8.2 (March 2025)

Address Directory updates.

- Updated Address Directory output to include MID_, prefix direction, prefix type, and suffix direction.

### Version 1.8.1 (February 2025)

Street and Address Directory release.

- Limited special characters in plan and forecast names to prevent tool issues.
- Updated tooltips and help links.
- Updated Street and Address Directory tools based on beta feedback from 1.8.0.

### Version 1.8.0 (February 2025)

Internal-only release.

- Beta release of Street and Address Directory tools for internal testing.
- MGT branding updates.
- Added a Help button and contextual help icons.
- Various Start Page UI, alignment, and layout improvements.
- Updated enrollment forecast Excel formatting.

### Version 1.7.9 (August 2024)

August release.

- Fixed a bug introduced with ArcGIS Pro 3.3 when using the Plan Impact Summary report.

### Version 1.7.8 (August 2024)

August release.

- Fixed a bug when copying a forecast.
- Updated enrollment forecast and Excel export formatting for consistency with residence forecasts and template guidelines.

### Version 1.7.7 (July 2024)

ArcGIS Pro 3.3+ only.

- Fixed ArcGIS Pro 3.3 limited-field-name issues that caused report and table Excel exports and historical-student imports to fail.
- Added street-data import in preparation for the Street Directory tool.

### Version 1.7.6 (July 2024)

ArcGIS Pro 3.3+ only.

- Minor UI updates.
- Released Data Enrichment tools for tract data, estimated students, and forecasted study-area data.
- Fixed a Reset Project issue that caused missing TYPE2 units.
- Added school capacity to forecast reports for attendance-area reporting and Excel output.

### Version 1.7.5 (November 2023)

Bug-fix release.

- Fixed a problem when importing historical students.

### Version 1.7.4 (November 2023)

Bug-fix release.

- Fixed assignment of study areas to the target school in copied or renamed plans.

### Version 1.7.3 (November 2023)

Bug-fix release.

- Fixed plan labeling, forecast symbolization, selected-study-area data in boundary planning, grade-range changes in the Statistics Window, and first-open forecast error messages.

### Version 1.7.2 (October 2023)

Student Yield Factor and enrollment forecast updates.

- Expanded Student Yield Factors from PK, K-6, 7-8, and 9-12 to individual grades PK through 12.
- Added alphabetical enrollment forecast sorting.
- Fixed bugs in Remove Unassigned Schools and Plan Summary.

### Version 1.7.1 (August 2023)

Planning, validation, and reporting updates.

- Added Reset Geodatabase to remove imported data and maps and start over in the same project.
- Replaced predefined plan-statistics and forecast-report grade ranges with a flexible grade-range textbox.
- Added warnings for layers with definition expressions during Data Setup.
- Changed references from Maturation to Buildout and added Buildout as a forecast appearance option.
- Fixed historical-student validation, forecast recalculation, and mobility-report export issues.

### Version 1.7.0 (February 2023)

Updated start page and planning workflow improvements.

- Updated the start page to improve access to previous projects.
- Fixed issues with plan exports, license-expiration warnings, enrollment forecasts, reassignment by current boundaries, rounding, and Plan Summary reports.
- Fixed missing grade ranges in Forecast Report setup.

### Version 1.6.9 (December 2022)

Forecast bug-fix release.

- Fixed bugs when making a forecast.

### Version 1.6.8 (December 2022)

Forecast reporting and enrollment forecast updates.

- Fixed forecast report exports to text and Excel formats.
- Improved rounding in the Plan Statistics Window.
- Updated enrollment forecast refresh messaging after residential forecast changes.
- Added a warning for significant year-to-year enrollment gaps.
- Improved elementary sorting so PK and K are grouped together.
- Improved handling of custom grade ranges in plan statistics and Forecast Report setup.

### Version 1.6.7 (December 2022)

Forecast report ordering and summary updates.

- Schools are ordered by grade and then name.
- Reworded messages for schools excluded from reports.
- Added a total enrollment summary line to the top of the report.

### Version 1.6.6 (November 2022)

Report formatting and student-data updates.

- Improved report formatting on screen and in Excel.
- Fixed staffing forecast calculations for students transferring out of PK in boundary schools.
- Fixed the Project Summary report DEVELOPER field lookup.
- Fixed development summary exports when study areas had no early-year development.
- Updated Student Report summaries by STUTYPE and GRD.

### Version 1.6.5 (October 2022)

Built for ArcGIS Pro 3.0. First release out of beta.

- Built for ArcGIS Pro 3.0.
- First release out of beta.
