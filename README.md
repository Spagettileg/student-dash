# Student-Dash 
A single page website has been built to showcase a data dashboard that analyses 1,000 students exam performance in Math, Reading & Writing. The dashboard is very important to understand how the students are performing, to determine best practices that can be shared with new students about to take the same exam and for teachers to help plan future curriculum. 

The page uses the D3.js library with the DC.js and crossfilter.js libraries to present the data via a series of scatter plots, pie charts, bar charts and line charts. The graphical arrangement has been designed allow the user to quickly understand a summary of student performance and then backed up with interesting data analysis to reach meaningful hypothesis. Furthermore, there is sufficient data to perform correlation testing to further understand the significance of the exam results.
 
Intriguingly, the user can opt to adapt their view of student data by all, individual or custom data element selection via dropdown list function. 

***
Link to the [live](https://spagettileg.github.io/student-dash/ ) website hosted in GitHub Pages 

Link to [GitHub](https://github.com/Spagettileg/student-dash) Repo

***

![](static/images/student-image.jpg)

## Table of Contents

1. [UXD Considerations](#uxd-considerations)
    * [User & Business Objectives](#user-&-business-objectives) 
    * [Wireframes](#wireframes)
    * [User Stories](#user-stories)
    * [CSS Framework](#css-framework)
    * [Colour Palette](#colour-palette)
    * [Typography](#typography)
    * [Icon Graphics](#icon-graphics)
    * [Navbar Design](#navbar-design)

2. [Technologies Applied](#technologies-applied)
    * [Languages](#languages)
    * [Libraries](#libraries)
    * [Tools](#tools)

3. [Features](#features)
    * [Features left to implement](#features-left-to-implement)  

4. [Tests](#tests)

5. [Deployment](#deployment)
    * [How to run this project locally](#how-to-run-this-project-locally) 

6. [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
    * [Assets](#assets)
    * [Acknowledgements](#acknowledgements)

## UXD Considerations
Student-Dash has been designed to allow the user to analyse student exam results data through selecting dropdown box options, hovering their cursor over data legend, clicking on charts or just observing the default data summary. 

Furthermore, the user is able to understand potential influences on exam results, such as gender participation, parental education, ethnic groupings, food consumption habits and students’ exam preparation.  

In summary, the user will have a good understanding of how all 1,000 students performed in their respective exams for Maths, Reading and Writing. The dashboard is both intuitive and interactive,  enabling the user to take full control of the source data via the carefully selected manual and automated navigation functions. 

### User & Business Objectives

#### User
- The user can access all the data via a single data dashboard
- To be able to view all data at the same time, across different graphical representations
- Commentary of the overall analysis to be clear and insightful
- Require the ability to drill down into the detail of the sample data through use of data filters
- To quickly establish any correlation in exam results for Math, Reading & Writing subjects

#### Business
- Produce a data dashboard that is generic in design and applies to diverse sample data sets 
- Dashboard must render on all available software platforms 
- Background imagery to support brand of business &/or learning organisations
- Dashboard has capability to work with API data
- Social media links access to further promote 'data-dashboard' products

#### Next Stage Generation
- Increase graphics density through creating a menu bar to allow user to select preferred graphical view
- Increase volume of API source data to increase data analysis capability and have results of analysis in a single view 
- Explore new social media channels to promote 'data-dashboard'

### Wireframes
My wireframe mock-up design have been created in [Balsamiq](https://balsamiq.com/) to showcase the 'data-dashboard' website responsiveness on mobile, tablet and desktop devices.

•	[Student-Dash](https://github.com/Spagettileg/student-dash/blob/master/wireframes/student-dash_vfinal.zip)


### User Stories
* It's important for a data set of 1,000 line items to be viewed from within a dashboard design
* The dashboard must be simple in design and intuitive to help with site navigation
* The dashboard to be viewed on a single page only
* A link to the source data is important
* User should be able to filter data with the use of a dropdown box tool
* View of analysis by gender, ethnicity, parents education, funded lunches and exam preparation is required
* Regression analysis on Math, Reading & Writing required to understand correlation in these subjects, when compared
* To understand the normal distribution curve through a plotted line graph for Math, Reading & Writing
* A reset filter button made available to return charts and graphs back to orignal position, following bespoke analysis activity

### CSS Framework
Bootstrap was the chosen framework for styling my project. I used the Bootstrap grid extensively to support responsiveness on mobile, tablet and desktop devices.

### Colour Palette
Colours used in this project were sourced from [Colour Hunt](https://colorhunt.co/). Essentially, the colours are seeking to capture key attributes of Student-Dash through energy, intelligence, pretention and curiosity

File | Colour         | Hex Code  | Colour Function
-----|----------------|-----------|------------------
CSS  | Light Blue     | #DEE9FC   | Navbar scroll appearance
CSS  | Powder Blue    | #6395F2   | Navbar scroll appearance
CSS  | Royal Blue     | #1258DC   | Navbar scroll appearance
CSS  | Grey Blue      | #236AB9   | Navbar scroll appearance
CSS  | Blue Ink       | #0A337F   | Navbar scroll appearance
CSS  | Dark Blue      | #091834   | Navbar scroll appearance
CSS  | Light Grey     | #E6E6E6   | Social Links
CSS  | Charcoal Grey  | #343A40   | Footer background colour 
CSS  | Pink           | #FF99FF   | Female gender icon - keyframe animation
CSS  | Pink           | #FF66FF   | Female gender icon - keyframe animation
CSS  | Pink           | #FF33FF   | Female gender icon - keyframe animation
CSS  | Blue           | #0080FF   | Male gender icon - keyframe animation
CSS  | Blue           | #0066CC   | Male gender icon - keyframe animation
CSS  | Blue           | #004D99   | Male gender icon - keyframe animation
CSS  | Pale Blue      | #E6EEFF   | Data dashbaord background colour
CSS  | Mid Blue       | #CCDDFF   | Chart background colour
CSS  | Sky Blue       | #236AB9   | DC Chart select menu
CSS  | Orange         | #F4511E   | Enter button on homepage

File      | Colour    | Hex Code  | Colour Function
----------|-----------|-----------|------------------
graph.js  | Green     | #009900   | Composite line chart
graph.js  | Blue      | #0066FF   | Composite line chart
graph.js  | Red       | #CC0000   | Composite line chart
graph.js  | Green     | #009900   | Math vs Writing - regression chart
graph.js  | Blue      | #0066FF   | Reading vs Writing - regression chart
graph.js  | Red       | #CC0000   | Math vs Reading - regression chart
graph.js  | Blue      | #99CCFF   | Bar chart - Ethnicity Distribution
graph.js  | Red       | #FF6666   | Bar chart - Ethnicity Distribution
graph.js  | Yellow    | #FFFF66   | Bar chart - Ethnicity Distribution
graph.js  | Green     | #99FF99   | Bar chart - Ethnicity Distribution
graph.js  | Purple    | #CC99FF   | Bar chart - Ethnicity Distribution
graph.js  | Orange    | #FF9933   | Bar chart - Parents Education
graph.js  | Blue      | #3366CC   | Pie chart - Source of Student Nutrition
graph.js  | Green     | #0099CC   | Pie chart - Source of Student Nutrition
graph.js  | Blue      | #3366CC   | Pie chart - Exam Preparation
graph.js  | Green     | #0099CC   | Pie chart - Exam Preparation

### Typography
[Open+Sans](https://fonts.google.com/) & [Sans Serif](https://fonts.google.com/) fonts were used throughout this project.

### Icon Graphics
Font Awesome 5 icon graphics were used in conjunction with Bootstrap 4, primarily to support information page footer & student gender population summary

Page                   | Function                | Font  
-----------------------|-------------------------|-------
index.html             | gender summary          | `fas fa-female`
index.html             | gender summary          | `fas fa-male`
index.html             | social media - footer   | `fab fa-github`
index.html             | social media - footer   | `fab fa-linkedin`    

### Navbar Design
For all device views, the navbar offers a blue navbar design, built up with 5 shades of blue to create a `linear-gradient` design, or tubuler effect. A reset button feature is positioned to the right of a headline narrative and is subject to a pseudo-hover class. The reset filter button changes colour upon the user hovering their cursor.   

## Technologies Applied
The following technologies were used in the design and build of this project.

### Languages
•	[HTML](https://html.spec.whatwg.org/multipage/) used as the markup language

•	[CSS3](https://www.w3.org/Style/CSS/) used to style the HTML

•	[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) used mostly for DOM manipulation

### Libraries
•	[Font Awesome](https://fontawesome.com/) to provide the icon set for Re-Boot website

•	[Google Fonts](https://fonts.google.com/) provided the fonts `Open-Sans` & `sans-serif` used throughout the project

•	[jQuery](https://jquery.com/) is used to manipulate the DOM, for example buttons, and showing / hiding elements

•	[DC.js](https://cdnjs.cloudflare.com) is used to manipulate the DOM, for example buttons, and showing / hiding elements

•	[D3.js](https://cdnjs.cloudflare.com) is used to manipulate the DOM, for example buttons, and showing / hiding elements

•	[D3-queue.js](https://cdnjs.cloudflare.com) Primarily used to load the dataset fully before running any other files

•	[Crossfilter.js](https://cdnjs.cloudflare.com) Helped enable dynamic interaction of charts and data

•	[Bootstrap](https://www.bootstrapcdn.com/) to enable ease of website responsiveness and simplify coding structure

•	[Bootswatch](https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/yeti/bootstrap.min.css) used to assist in the creation of the responsive grid structure for the site and also to provide some basic CSS styling

### Tools
•	[AWS Cloud9](https://aws.amazon.com/cloud9/) a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser.

•	[Balsamiq](https://balsamiq.com/) is a small graphical tool to sketch out user interfaces, for websites and web / desktop / mobile applications and used to visualise my project through mock-up design.

•	[Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

•	[GitHub](https://github.com/) is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

•	[Jigsaw - CSS validation](https://jigsaw.w3.org/css-validator/) this validator checks the markup validity of CSS style sheet and ensure coding convention is upheld

•	[JS Hint](https://jshint.com/) a tool that helps to detect errors and potential problems in the javascript code

•	[W3C - HTML validation](https://validator.w3.org/) this validator checks the markup validity of HTML web documents

## Features
### Feature 1 - Enter button on homepage `index.html`

•   User is presented with an enter click button on homepage to enable navigation to the data dashboard

### Feature 2 - Headline title bar with reset data button

•	Headline bar informs signposts user to the dashboard and when clicked, the user will return to the top of the dashboard. In addition, a reset button is available for the user to click to return all data & charts to their default values

•	For ease of navigation, the headline bar is fixed at the dashboard top to help the user quickly find the rest button or automatically move to the top, whilst scrolling through to the bottom  

### Feature 3 - Introduction

•	Information to the user that provides a basic instruction on how to use the dashboard, brief background on data used and a link to source of original data sample via www.kaggle.com 

### Feature 4 - Filter by student

•	Single student exam performance can be reviewed by clicking on the ID code that appears in a dropdown box. Student ID range from 1 to 1000. Their respective exam performance can then be viewed in the array of graphical analysis

### Feature 5 - Filter by gender

•	Total student population contained within data sample can be viewed via a female / male lens. A dropdown box has been designed to create a filter on gender type, together with a total gender count

•   Furthermore, the user will receive an instant percentage split on gender activity, on both unfiltered and filtered data analysis    

### Feature 6 - Composite line graph 

•	Math, reading and writing exam results for 1,000 students appear in the form of a line graph. This chart can be viewed in multiple dimensions, depending on how the user has configured dropdown boxes and data filters. By hovering the cursor over the legend, the user will receive a bespoke view of a single subject. Furthermore, the user can hover over the data plot to understand an individual student exam score 

### Feature 7 - Scatter chart x3 

•	3 scatter plot charts have been designed to initiate regression analysis of all exam subjects. Combinations include math vs reading, reading vs writing & math vs writing. Again, these charts can be viewed in multiple dimensions, depending on how the user has configured dropdown boxes and data filters. The user will certainly get a quick and clear view of how the exam subjects correlate with each other 

### Feature 8 - Bar chart x2 

•	Ethnicity origin and the distribution over 5 groups’ is the focus of the 1st bar chart. The view of the chart can be altered by either clicking on a selected bar(s) &/or the user can configure the bar chart through work completed to configure other dropdown boxes and data filters

•	Parents educational background distributed over 6 levels of academia is the focus of the 2nd bar chart. The same functionality exists, as with 1st bar chart. The user can look to create some interesting data configurations to see if either ethnicity &/or students parental education has any bearing upon the students’ exam results  

### Feature 9 - Pie chart x2 

•	Lunch funding is the focus of the 1st pie chart. The influence of a standard lunch allowance or reduced/free lunch allowance can be evaluated by either clicking on a selected pie section(s) &/or the user can configure the pie chart through work completed to configure other dropdown boxes and data filters

•	Student preparation for their exams is the focus of the 2nd pie chart. The options are binary, either the student did or did not prepare for their exams. The same functionality exists, as with 1st pie chart. The user can look to create further interesting data configurations to see if either lunch funding &/or students exam preparation has any bearing upon the students’ exam results  

### Feature 10 - Collapse / re-open articles 

•	All articles can collapse and re-open, by clicking a blue chevron icon positioned at the top right corner of each article. The chevron becomes inverted upon collapse of the article 

•	Valuable screen space is freed up by closing articles that may not feature in a given data analysis configuration

### Feature 11 - Footer 

•	Provides a social media link to LinkedIn and a link to my GitHub page. Fonts (icons) secured from bootstrap / font awesome. The links are wired to the website designers’ respective social media sites. A `.hover` pseudo class has been used to provide a background colour change (white `#FFFFFF` to corporate colour code) and font colour change too.   

### Feature 12 - 404 alert page

•	Provides a friendly sign post for the user in the event an incorrect link has been clicked and the user has the option to click back into a correct link

### Features left to implement
#### Amalgamate graphs

•	Scatter plots to move from 3 to 1 by creating a dropdown box to control data plots on show, per exam subject. Bar chart & Pie Chart data to possible merge by creating bar charts with multiple axis. This will provide the user an increased richness of data analysis, through reduced number of graphs

#### Exam Performance Summary

•  	Automate an exam performance summary by publishing an overall average exam score, per subject and a score range, per subject. The scope can be increased by publishing individual student results, once the student selector dropdown box had been clicked and with crossfilter, the exam summary data could be viewed at a demographic level i.e. ethnicity, exam preparations, etc 

## Tests
Test analysis and reporting can be viewed in a separate [TESTS.md](https://github.com/Spagettileg/data-dashboard/blob/master/TESTS.md) file.

## Deployment
This project was developed using the [AWS Cloud9 IDE](https://aws.amazon.com/cloud9/), committed to git and pushed to GitHub using the built in function within Cloud9.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/Spagettileg/student-dash), the following steps were taken:

1. Log into GitHub
2. From the list of repositories on the screen, select **Spagettileg/student-dash**
3. From the menu items near the top of the page, select **Settings**
4. Scroll down to the **GitHub Pages** section
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website

### How to run this project locally  
To clone this project from GitHub:

1. Follow this link to the [Project GitHub repository](https://github.com/Spagettileg/student-dash)
2. Under the repository name, click **"Clone or download"**
3. In the **Clone with HTTPs section**, copy the clone URL for the repository
4. In your local IDE open **Ubuntu Bash**
5. Change the current working directory to the location where you want the cloned directory to be made
6. Type `git clone`, and then paste the URL you copied in Step 3

`git clone https://github.com/USERNAME/REPOSITORY`

7. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from [GitHub](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


## Credits

### Content

•	All HTML, CSS and most of JS code was written by myself. The site was designed and built in full by myself and can be viewed via the wireframe 

•	The source dataset was obtained from kaggle website user and the specific link can be found here [SERD](https://www.kaggle.com/spscientist/students-performance-in-exams#StudentsPerformance.csv). The process of selecting data was mainly based upon making sure the raw data was as complete as possible, with no gaps that had the potential to skew data analysis. Furthermore, the sample size of 1,000 students was considered significant in supporting meaningful analysis 

•	SpyOn() function was developed with help of [Rob Gravelle's](https://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html) source code 

### Media

•	Favicon image was sourced from [iconsdb.com](www.iconsdb.com)

•   Homepage [student image](https://wallpapersafari.com/w/dmirWc) background

•	404 image – [codepen.io](www.codpen.io)

•	Cogs Background image – [pling.com](https://www.pling.com/p/1216758/)

### Assets

### Acknowledgements 
[Theo Despoudis](https://www.linkedin.com/in/theofanis-despoudis-7bb30913/) Mentor - For his guidance with the process of delivering my project and reminders for keeping the code simple, yet effective. 

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

*This is for educational use.* 