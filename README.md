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
This software has been designed to run on Chrome, Edge, Firefox, Safari, Opera & Internet Explorer.

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
My wireframe designs have been appended as both .bmpr and .pdf files on GitHub. The mock up design has stayed consistent with the original planning and I sought to avoid an over-engineered design by removing non-value add elements i.e. minimum and maximum exam results, that could be identified in regression analysis.  A less complicated design supports a good UXD.    

*** 

### Features
#### Feature 1 - Headline title bar with reset data button

•	Headline bar informs signposts user to the dashboard and when clicked, the user will return to the top of the dashboard. In addition, a reset button is available for the user to click to return all data & charts to their default values.
•	For ease of navigation, the headline bar is fixed at the dashboard top to help the user quickly find the rest button or automatically move to the top, whilst scrolling through to the bottom  

#### Feature 2 - Introduction

•	Information to the user that provides a basic instruction on how to use the dashboard, brief background on data used and a link to source of original data sample via www.kaggle.com 

#### Feature 3 - Filter by student

•	Single student exam performance can be reviewed by clicking on the ID code that appears in a dropdown box. Student ID range from 1 to 1000. Their respective exam performance can then be viewed in the array of graphical analysis

#### Feature 4 - Filter by gender

•	Total student population contained within data sample can be viewed via a female / male lens. A dropdown box has been designed to create a filter on gender type, together with a total gender count. Furthermore, the user will receive an instant percentage split on gender activity, on both unfiltered and filtered data analysis    

#### Feature 5 - Exam performance summary

•	Automated UXD where the overall average exam score for Math, reading and writing can be instantly viewed, the scores have taken directly from the original data sample. The purpose of this summary is to view the overall average student result per subject only. There is scope to enhance the design to view individual student performance  

#### Feature 6 - Composite line graph 

•	Math, reading and writing exam results for 1,000 students appear in the form of a line graph. This chart can be viewed in multiple dimensions, depending on how the user has configured dropdown boxes and data filters. By hovering the cursor over the legend, the user will receive a bespoke view of a single subject. Furthermore, the user can hover over the data plot to understand an individual student exam score 

#### Feature 7 - Scatter chart x3 

•	3 scatter plot charts have been designed to initiate regression analysis of all exam subjects. Combinations include math vs reading, reading vs writing & math vs writing. Again, these charts can be viewed in multiple dimensions, depending on how the user has configured dropdown boxes and data filters. The user will certainly get a quick and clear view of how the exam subjects correlate with each other 

#### Feature 8 - Bar chart x2 

•	Ethnicity origin and the distribution over 5 groups’ is the focus of the 1st bar chart. The view of the chart can be altered by either clicking on a selected bar(s) &/or the user can configure the bar chart through work completed to configure other dropdown boxes and data filters
•	Parents educational background distributed over 6 levels of academia is the focus of the 2nd bar chart. The same functionality exists, as with 1st bar chart. The user can look to create some interesting data configurations to see if either ethnicity &/or students parental education has any bearing upon the students’ exam results  

#### Feature 9 - Pie chart x2 

•	Lunch funding is the focus of the 1st pie chart. The influence of a standard lunch allowance or reduced/free lunch allowance can be evaluated by either clicking on a selected pie section(s) &/or the user can configure the pie chart through work completed to configure other dropdown boxes and data filters
•	Student preparation for their exams is the focus of the 2nd pie chart. The options are binary, either the student did or did not prepare for their exams. The same functionality exists, as with 1st pie chart. The user can look to create further interesting data configurations to see if either lunch funding &/or students exam preparation has any bearing upon the students’ exam results  

#### Feature 10 - Collapse / re-open articles 

•	All articles can collapse and re-open, by clicking a blue chevron icon positioned at the top right corner of each article. The chevron becomes inverted upon collapse of the article 
•	Valuable screen space is freed up by closing articles that may not feature in a given data analysis configuration

#### Feature 11 - Footer 

•	Provides a social media link to Linkedin and a link to my GitHub page too 

***
### Features left to implement

###### Enhance exam performance summary

•	Presently, the exam summary is limited by only publishing an overall average exam score, per subject. Going forwards, the scope can be increased by publishing individual student results, once the student selector dropdown box had been clicked 

###### Amalgamate graphs

•	Scatter plots to move from 3 to 1 by creating a dropdown box to control data plots on show, per exam subject. Bar chart & Pie Chart data to possible merge by creating bar charts with multiple axis. This will provide the user an increased richness of data analysis, through reduced number of graphs

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

#### Compatibility

#### Test Observations
	

***

### Deployment


***

### Credits

#### Content


#### Media
##### Project Assets


***

### Acknowledgements 
Theo Despoudis (Mentor) - For his guidance with the process of delivering my project and reminders for keeping the code simple, yet effective. 
Slack Community and the following experts to keep me honest.
@JoWings_Lead – Joke Heyndels

Special thanks to Matt Rudge, Timmy O'Mahony & Brian O'Grady (all Code Institute) for their time, training delivery and generating good confidence to coding.

