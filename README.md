# 2nd Milestone project 

Welcome!

***
Link to the website (via GitHub Pages) 
https://spagettileg.github.io/second-milestone-project/ 

Link to Cloud9 Development
https://ide.c9.io/spagettileg/second-milestone-project

***

### Introduction

A single page website has been built to showcase a data dashboard that analyses 1,000 students exam performance in Math, Reading & Writing. 

The page uses the D3.js library with the DC.js and crossfilter.js libraries to present the data via a series of scatter plots, pie charts, bar charts and line charts. The graphical arrangement has been designed allow the user to quickly understand a summary of student performance and then backed up with interesting data analysis to reach meaningful hypothesis.
 
Intriguingly, the user can opt to adapt their view of student data by all, individual or custom data element selection via dropdown list function. 

***

### Prerequisite
This software has been designed to run on Chrome, Edge, Firefox, Safari & Opera. Internet Explorer is no longer a preferred web browser and is out of scope for this project.

***

### Design

##### Colour palette (Graphs & reset button):

A monochromatic scheme with blue as the base colour:

Lightest =  #DEE9FC, #6395F2, #1258DC, #236AB9, #0A337F & #091834 = darkest

Navbar & Footer text - #E6E6E6 (light grey)

Gender icons – Female  #FF99FF (pink) & Male #004D99 (blue)


*** 

#### UXD Considerations

The dashboard has been designed to allow the user to analyse student exam results data through selecting dropdown box options, hovering their cursor over data legend, clicking on charts or just observing the default data summary. 
Furthermore, the user is able to understand potential influences on exam results, such as gender participation, parental education, ethnic groupings, food consumption habits and students’ exam preparation.    
In summary, the user will have a good understanding of how all 1,000 students performed in their respective exams for Maths, Reading and Writing. The dashboard is both intuitive and interactive,  enabling the user to take full control of the source data via the carefully selected manual and automated navigation functions.   

#### Wireframes

3 wireframe mock up’s (mobile, tablet & desktop) were created in Balsamiq. 
My wireframe designs have been appended as both .bmpr and .pdf files on GitHub. The mock up design has stayed consistent with the original planning and I sought to avoid an over-engineered design by removing non-value add elements i.e. average, minimum and maximum exam results, that could be identified in regression analysis.  A less complicated design supports a good UXD.    

*** 

### Features
#### Feature 1 - Headline title bar with reset data button

•	Headline bar informs signposts user to the dashboard and when clicked, the user will return to the top of the dashboard. In addition, a reset button is available for the user to click to return all data & charts to their default values

•	For ease of navigation, the headline bar is fixed at the dashboard top to help the user quickly find the rest button or automatically move to the top, whilst scrolling through to the bottom  

#### Feature 2 - Introduction

•	Information to the user that provides a basic instruction on how to use the dashboard, brief background on data used and a link to source of original data sample via www.kaggle.com 

#### Feature 3 - Filter by student

•	Single student exam performance can be reviewed by clicking on the ID code that appears in a dropdown box. Student ID range from 1 to 1000. Their respective exam performance can then be viewed in the array of graphical analysis

#### Feature 4 - Filter by gender

•	Total student population contained within data sample can be viewed via a female / male lens. A dropdown box has been designed to create a filter on gender type, together with a total gender count. Furthermore, the user will receive an instant percentage split on gender activity, on both unfiltered and filtered data analysis    

#### Feature 5 - Composite line graph 

•	Math, reading and writing exam results for 1,000 students appear in the form of a line graph. This chart can be viewed in multiple dimensions, depending on how the user has configured dropdown boxes and data filters. By hovering the cursor over the legend, the user will receive a bespoke view of a single subject. Furthermore, the user can hover over the data plot to understand an individual student exam score 

#### Feature 6 - Scatter chart x3 

•	3 scatter plot charts have been designed to initiate regression analysis of all exam subjects. Combinations include math vs reading, reading vs writing & math vs writing. Again, these charts can be viewed in multiple dimensions, depending on how the user has configured dropdown boxes and data filters. The user will certainly get a quick and clear view of how the exam subjects correlate with each other 

#### Feature 7 - Bar chart x2 

•	Ethnicity origin and the distribution over 5 groups’ is the focus of the 1st bar chart. The view of the chart can be altered by either clicking on a selected bar(s) &/or the user can configure the bar chart through work completed to configure other dropdown boxes and data filters

•	Parents educational background distributed over 6 levels of academia is the focus of the 2nd bar chart. The same functionality exists, as with 1st bar chart. The user can look to create some interesting data configurations to see if either ethnicity &/or students parental education has any bearing upon the students’ exam results  

#### Feature 8 - Pie chart x2 

•	Lunch funding is the focus of the 1st pie chart. The influence of a standard lunch allowance or reduced/free lunch allowance can be evaluated by either clicking on a selected pie section(s) &/or the user can configure the pie chart through work completed to configure other dropdown boxes and data filters

•	Student preparation for their exams is the focus of the 2nd pie chart. The options are binary, either the student did or did not prepare for their exams. The same functionality exists, as with 1st pie chart. The user can look to create further interesting data configurations to see if either lunch funding &/or students exam preparation has any bearing upon the students’ exam results  

#### Feature 9 - Collapse / re-open articles 

•	All articles can collapse and re-open, by clicking a blue chevron icon positioned at the top right corner of each article. The chevron becomes inverted upon collapse of the article 

•	Valuable screen space is freed up by closing articles that may not feature in a given data analysis configuration

#### Feature 10 - Footer 

•	Provides a social media link to LinkedIn and a link to my GitHub page. Fonts (glythicons) secured from bootstrap / font awesome. The links are wired to the website designers’ respective social media sites. A .hover pseudo class has been used to provide a background colour change (white to corporate colour code) and font colour change too.   

#### Feature 11 - 404 alert page

•	Provides a friendly sign post for the user in the event an incorrect link has been clicked and the user has the option to click back into a correct link

***
### Features left to implement

###### Amalgamate graphs

•	Scatter plots to move from 3 to 1 by creating a dropdown box to control data plots on show, per exam subject. Bar chart & Pie Chart data to possible merge by creating bar charts with multiple axis. This will provide the user an increased richness of data analysis, through reduced number of graphs

##### Exam Performance Summary

•  	Automate an exam performance summary by publishing an overall average exam score, per subject and a score range, per subject. The scope can be increased by publishing individual student results, once the student selector dropdown box had been clicked and with crossfilter, the exam summary data could be viewed at a demographic level i.e. ethnicity, exam preparations, etc 

***
### Technologies Used

The following technologies were used in the design and build of this project.

##### HTML5 
HTML5 was used to create basic structure

##### CSS3 
Cascading Style Sheets provided support with formatting, positioning, coloring and styling. dc.min.css was used to support a multi-dimensional charting library built to work natively with crossfilter and rendered using d3.js - https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css

##### AWS Cloud 9 
Cloud9 IDE editor used to write the HTML, CSS and JavaScript

##### Balsamiq 
Dashboard mock up design was created on 3 levels (Mobile, Tablet & Desktop) and made available in both .bmpr & .pdf versions  

##### Bootstrap - https://www.bootstrapcdn.com/
Bootstrap 3.3.7 is used to create frameworks of a mobile-first design, it was used for navigation and page grid layout in the website

##### Bootswatch 
Bootswatch 3.4.0 used to assist in the creation of the responsive grid structure for the site and also to provide some basic CSS styling

##### JQuery - https://jquery.com/
JQuery is added to the site to assist the implementation of JavaScript and Bootstrap.

##### Google Fonts - https://fonts.google.com/
Google fonts are used to create an impact to the web-design and uphold a styling theme.

•	'Open+Sans, Sans-serif'

##### Font Awesome - https://www.bootstrapcdn.com/fontawesome/
Font Awesome is used to add social links font (images) to the website. These fonts were GitHub & LinkedIn

##### Git & GitHub - https://github.com/
Git is used as a command line tool to support version control, through moving files to a staging area prior to adding to a local repository. For safe storage and to allow other users to view my deployed website, all relevant files were then pushed from Git to GitHub. 

##### Javascript 
The following Javascript libraries and quality check tools were used heavily in the development of the data visualisation dashboard  
-	D3.js - https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js
-	DC.js - https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js
-	Crossfilter.js -  Helped enable dynamic interaction of charts and data. https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js
-	D3-queue.js – Primarily used to load the dataset fully before running any other files. https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js  
-	JS Hint – Used for quality check and error detection of Javascript code
-	jQuery - Support with DOM manipulation when resetting filters and collapse / re-opening of articles

***

### Testing

A combination of automated and manual testing processes was applied to this project
to ensure the UXD was upheld by making sure the data was correctly loaded, graphical
charts would be successfully rendered and data filters would accurately enable the user
to navigate through student and gender data attributes.  

The software has been thoroughly tested in many ways. JavaScript and its associated functions have all undergone extensive manual testing.  JS hint was used to help validate the Javascript code. 

Chrome dev tools provided one issue where all charts were not being rendered. The dc.min.css file included a default coding position of ‘float: left. To fix this bug, ‘float: none!important’ was added to style.css file. 

Furthermore, the software has been tested against all user expectations that were set out in UX section above. All possible user actions were mimicked to put the tester in the shoes of the user.  Data was compared by minimizing certain sections, filter the specific data and reset all the filters. The whole data manipulation experience was intuitive and enables both the tester and user to efficiently analyse the data and draw meaningful conclusions. 

#### 1. Jasmine Testing

Jasmine was used to test 4 things in particular for this project:

•	That the data loaded for the project

•	Data filters to show selected source data only

•	Exam score data was verified 

•	Defensive programming using SpyOn() to see if getFocused method gets called. The Spyon() was used as the method() already exists on the object

•	All tests passed in Jasmine

#### 2. Manual Testing

Testing for this project was completed on Chrome, Edge, Firefox, Safari & Opera browsers.
Responsiveness and correct displaying of all elements has been tested on a number of device and resolutions.
All display without issue.

Devices:

•	iPhone 6/7/8

•	iPhone X

•	Galaxy S5

•	Microsoft Lumia 550

•	iPad

•	Desktop >1200px

•	Larger Desktop >1440px

#### Manual Test Observations

##### Selectors Testing
###### •	Student Selector
1.	Go to Introduction section
2.	Go to ‘Filter by student’
3.	Leave filter as ‘select all’
4.	Check all charts for overall summary of 1,000 students’ exam results
5.	Click a student ID number
6.	Check charts to see filter applied

###### •	Gender Selector
1.	Go to Gender section
2.	Go to ‘Filter by gender’
3.	Leave filter as ‘select all’
4.	Check all charts for overall summary of 1,000 students’ exam results
5.	Click a gender attribute (female or male)
6.	Check charts to see filter applied
	
###### •	Reset Filters
1.	Click a filter &/or a chart element for a tailored view of data 
2.	Go to top navigation bar
3.	Click Reset All
4.	See chart filters reset to original default position
5.	Multiple clicks of reset button in quick succession temporarily paused the software
6.	A Debounce function was created to limit the rate at which the function gets invoked 
	
##### Charts Testing
###### •	All subjects’ exam scores – Line Graph
1.	Click Legend item 
2.	Check charts to see filter applied
3.	Go to ‘Filter by student’ or ‘Filter by gender’ to refine data search
4.	Check charts to see filter applied
5.	Click reset button to return to original default position 

###### •	Correlation observations – Scatter plot chart x3
1.	Go to ‘Math vs Reading’, ‘Reading vs Writing’ or ‘Math vs Writing’ scatter plot chart
2.	Hover over dot plot to see gender, x2 student exam scores i.e. Math & Reading 
3.	Click a filter &/or a chart element for a tailored view of data 
4.	Check charts to see filter applied
	
###### •	Category Statistics - Bar chart x2
1.	Go to ‘Ethnicity Distribution’ &/or ‘Parents Education’ bar chart 
2.	Hover over bar to see data category and total count of the same category
3.	Click category bar
4.	Check charts to see filter applied
	
###### •	Student conditioning data – Pie chart x2
1.	Go to ‘Lunch Analysis’ &/or ‘Exam Preparation’ pie chart
2.	Hover over pie segment to see data category and total count of the same category
3.	Click pie chart segment 
4.	Check charts to see filter applied
	
##### Navigation Testing
###### •	Navbar tests
1.	Go to home page
2.	Click on ‘Student Exam Results Dashboard’ header
3.	See page scroll to top
	
###### •	Introduction links
1.	Go to home page
2.	Click on ‘SERD’ link
3.	User is passed through to www.kaggle.com site and specifically to source data
	
###### •	Footer links tests
1.	Go to footer section
2.	Click social media icons (LinkedIn & GitHub)
3.	User is passed through to website authors’ actual live pages
	
###### •	Button / Icon functionality tests
1.	Scroll to nav bar (top of page)
2.	Click on reset button
3.	Button & text change colour with fractional timing delay to confirm button has been clicked  
4.	Scroll to footer
5.	Hover on social media icons
6.	For LinkedIn, colour change from light grey to LinkedIn corporate colour (blue # 0077B5). Text colour changes from black to light grey
7.	For GitHub, colour change from light grey to GitHub corporate colour (purple # 6e5494). Test colour changes from black to light grey
8.	Both social media icons contain a fractional timing delay to help user understand icon is active, prior to being clicked 

***

### Code Validation Testing
•	HTML Validator (https://validator.w3.org/) used and shows the html document to be valid. Slight issue on hr tag being used in footer, but no detrimental effect upon web page performance

•	CSS Validator (https://jigsaw.w3.org/css-validator/) used and shows the stylesheet to be valid CSS level 3 + SVG

***

### Deployment

The site was developed using the cloud9 IDE and uses git for version control which is then pushed to GitHub. The site is hosted on GitHub Pages and deployed there from the master branch on GitHub. There is no difference between the development version of this site, and the final version hosted on GitHub Pages.
To deploy this project, I took the following initial steps:

•	From my GitHub page I clicked on 'Repositories' and selected the required repository, in this case 'second-milestone-project'

•	I then clicked on the 'settings' option, located on the top horizontal menu bar

•	Next, I scrolled down the page to the GitHub Pages section and located the dropdown box under 'Source'

•	From there I selected the 'master branch'

•	GitHub takes you back to the top of the page to allow you to rename the repository if desired. I kept it the same

•	These steps resulted in the finished site being deployed at https://spagettileg.github.io/second-milestone-project/

•	Every subsequent push to GitHub on the master branch updates the deployed site to match

***

### Credits

#### Content

•	All HTML, CSS and most of JS code was written by myself. The site was designed and built in full by myself and can be viewed via the wireframe 

•	The source dataset was obtained from kaggle website user and the specific link can be found here SERD (https://www.kaggle.com/spscientist/students-performance-in-exams#StudentsPerformance.csv). The process of selecting data was mainly based upon making sure the raw data was as complete as possible, with no gaps that had the potential to skew data analysis. Furthermore, the sample size of 1,000 students was considered significant in supporting meaningful analysis 

•	SpyOn() function was developed with help of Rob Gravelle's source code (https://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html)

#### Media

•	Favicon image was sourced from iconsdb.com

•	404 image – codepen.io

•	Cogs Background image – vectorstock.com

***

### Acknowledgements 
Theo Despoudis (Mentor) - For his guidance with the process of delivering my project and reminders for keeping the code simple, yet effective. 

Slack Community and the following experts to keep me honest and focused.

Haley Schafer - Tutor,
Niel Mcewen - Tutor,
@JoWings_Lead – Joke Heyndels,
@Robinz_alumni - Robin Zigmond,
@Sean - Sean Murphy,
@Eventyret_mentor - Simen Daehlin,
@2BN-Tim - Tim Nelson,
@JohnL3_Alumni - Johnlonggately

Special thanks to Matt Rudge, Timmy O'Mahony & Brian O'Grady (all Code Institute) for their time, training delivery and generating good confidence to coding.

