# Student-Dash | Test Analysis & Report 

Access main [READEME](https://github.com/Spagettileg/student-dash/blob/master/README.md) file

View [Data-Dashboard](https://spagettileg.github.io/student-dash/) as a deployed project in GitHub Pages

## Table of Contents
1. [Introduction](#introduction) 
2. [Systems Based Testing](#systems-based-testing)
    * [Jasmine](#jasmine)
3. [Manual Testing](#manual-testing)
    * [Selectors Testing](#Selectors-testing)
    * [Charts testing](#charts-testing)
    * [Navigation Testing](#navigation-testing)
4. [Code Validation](#code-validation)
    * [Responsiveness and Rendering](#responsiveness-and-rendering)
    * [Browser Compatability](#browser-compatability)
    * [Known Bugs](#known-bugs)

## Introduction

A combination of automated and manual testing processes was applied to this project
to ensure the UXD was upheld by making sure the data was correctly loaded, graphical
charts would be successfully rendered and data filters would accurately enable the user
to navigate through student and gender data attributes.  

The software has been thoroughly tested in many ways. JavaScript and its associated functions have all undergone extensive manual testing.  JS hint was used to help validate the Javascript code. 

Chrome dev tools provided one issue where all charts were not being rendered. The dc.min.css file included a default coding position of ‘float: left. To fix this bug, ‘float: none!important’ was added to style.css file. 

Furthermore, the software has been tested against all user expectations that were set out in UX section above. All possible user actions were mimicked to put the tester in the shoes of the user.  Data was compared by minimizing certain sections, filter the specific data and reset all the filters. The whole data manipulation experience was intuitive and enables both the tester and user to efficiently analyse the data and draw meaningful conclusions. 

## Systems Based Testing
### Jasmine

Jasmine was used to test 4 things in particular for this project:

•	That the data loaded for the project

•	Data filters to show selected source data only

•	Exam score data was verified 

•	Defensive programming using SpyOn() to see if getFocused method gets called. The Spyon() was used as the method() already exists on the object

•	All tests passed in Jasmine

## Manual Testing

Testing for this project was completed on Chrome, Edge, Firefox, Safari & Opera browsers.
Responsiveness and correct displaying of all elements has been tested on a number of device and resolutions.
All display without issue.

Device Category  |  Description
-----------------|--------------
Mobile           | iPhone6/7/8
Mobile           | iPhone X
Mobile           | Galaxy S5
Mobile           | Microsoft Lumia 550
Tablet           | iPad
Desktop          | >1200px
Desktop          | >1440px

### Manual Test Observations

#### Selectors Testing
##### •	Student Selector
1.	Go to Introduction section
2.	Go to ‘Filter by student’
3.	Leave filter as ‘select all’
4.	Check all charts for overall summary of 1,000 students’ exam results
5.	Click a student ID number
6.	Check charts to see filter applied

##### •	Gender Selector
1.	Go to Gender section
2.	Go to ‘Filter by gender’
3.	Leave filter as ‘select all’
4.	Check all charts for overall summary of 1,000 students’ exam results
5.	Click a gender attribute (female or male)
6.	Check charts to see filter applied

##### •	Reset Filters
1.	Click a filter &/or a chart element for a tailored view of data 
2.	Go to top navigation bar
3.	Click Reset All
4.	See chart filters reset to original default position
5.	Multiple clicks of reset button in quick succession temporarily paused the software
6.	A Debounce function was created to limit the rate at which the function gets invoked 

#### Charts Testing
##### •	All subjects’ exam scores – Line Graph
1.	Click Legend item 
2.	Check charts to see filter applied
3.	Go to ‘Filter by student’ or ‘Filter by gender’ to refine data search
4.	Check charts to see filter applied
5.	Click reset button to return to original default position 

##### •	Correlation observations – Scatter plot chart x3
1.	Go to ‘Math vs Reading’, ‘Reading vs Writing’ or ‘Math vs Writing’ scatter plot chart
2.	Hover over dot plot to see gender, x2 student exam scores i.e. Math & Reading 
3.	Click a filter &/or a chart element for a tailored view of data 
4.	Check charts to see filter applied

##### •	Category Statistics - Bar chart x2
1.	Go to ‘Ethnicity Distribution’ &/or ‘Parents Education’ bar chart 
2.	Hover over bar to see data category and total count of the same category
3.	Click category bar
4.	Check charts to see filter applied

##### •	Student conditioning data – Pie chart x2
1.	Go to ‘Lunch Analysis’ &/or ‘Exam Preparation’ pie chart
2.	Hover over pie segment to see data category and total count of the same category
3.	Click pie chart segment 
4.	Check charts to see filter applied

#### Navigation Testing
##### •	Navbar tests
1.	Go to home page
2.	Click on ‘Student Exam Results Dashboard’ header
3.	See page scroll to top

##### •	Introduction links
1.	Go to home page
2.	Click on ‘SERD’ link
3.	User is passed through to www.kaggle.com site and specifically to source data

##### •	Footer links tests
1.	Go to footer section
2.	Click social media icons (LinkedIn & GitHub)
3.	User is passed through to website authors’ actual live pages

##### •	Button / Icon functionality tests
1.	Scroll to nav bar (top of page)
2.	Click on reset button
3.	Button & text change colour with fractional timing delay to confirm button has been clicked  
4.	Scroll to footer
5.	Hover on social media icons
6.	For LinkedIn, colour change from light grey to LinkedIn corporate colour (blue # 0077B5). Text colour changes from black to light grey
7.	For GitHub, colour change from light grey to GitHub corporate colour (purple # 6e5494). Test colour changes from black to light grey
8.	Both social media icons contain a fractional timing delay to help user understand icon is active, prior to being clicked 


## Code Validation

•	HTML Validator (https://validator.w3.org/) used and shows the html document to be valid. 

•	CSS Validator (https://jigsaw.w3.org/css-validator/) used and shows the stylesheet to be valid CSS level 3 + SVG

### Responsiveness and Rendering
Chrome DevTools together with a selection of mobile, table and desktop devices were relied upon through the entire software development cycle. A key objective was to test both the rendering and responsiveness of the software application against multiple screen resolutions and web browser platforms. Any bugs identified were debugged in real time. 

The student-dash application has been tested by students from the Slack community, together with friends and family members. Feedback on what worked well and what did not was recorded and suitable corrections to the code were keyed.

In the final analysis, this application can be passed as fully responsive across all devices that participated in testing.

### Browser Compatibility
The following browsers were used in testing the student-dash application. Internet Explorer was out of scope for testing due to obsolete capability

platform | version
---------|--------
Chrome   |81.0.4044.129
Edge     |44.18362.449.0
Firefox  |73.0
Safari   |12.4.6
Opera    |68.0.3618.63

### Known Bugs

•   Chrome has a bug where all graphical chart images auto float-left. Bug fixed by adding the following oce in CSS file:

`div.dc-chart {
    float: none!important;
}`

