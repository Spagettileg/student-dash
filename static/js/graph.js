// ***Engine Room - Source Data & Analysis Catalyst *** 

queue()
    .defer(d3.csv, "data/studentsperformanceData.csv")
    .await(createAnalysis);

function createAnalysis(error, studentsperformanceData) {
    var ndx = crossfilter(studentsperformanceData); //Crossfilter gets passed to the function that will draw the graph
    
            studentsperformanceData.forEach(function(d){ 
                d.student = parseInt(d["student"]);  // Converts string to numbers
                d.math_score = parseInt(d["math.score"]);  // Converts string data to Integers. 
                d.reading_score = parseInt(d["reading.score"]);  // As above
                d.writing_score = parseInt(d["writing.score"]);  // As above
            });
    
    show_student_selector(ndx);
    show_gender_selector(ndx);
    
    show_gender_percentage(ndx, "female", "#female-student-percentage");
    show_gender_percentage(ndx, "male", "#male-student-percentage");
    
    show_average_math_score(ndx);
    show_average_reading_score(ndx);
    show_average_writing_score(ndx);
    
    show_stats_all_subjects(ndx); // Composite Line chart 
    
    show_math_vs_reading_regression(ndx); // Scatter Plot for math vs reading
    show_reading_vs_writing_regression(ndx); // Scatter Plot for reading vs writing
    show_math_vs_writing_regression(ndx); // Scatter Plot for math vs writing
    
    show_ethnicity_distribution(ndx); // Bar chart displaying multiple ethnic groups
    show_parents_education_distribution(ndx); // Bar chart displaying levels of parent academia
    
    show_source_student_nutrition(ndx); // Pie chart to view source of student nutrition
    show_exam_preparation(ndx); // Pie chart to view level of student exam preparation

    dc.renderAll(); // Essential command for Chart/Data to appear
}

// ************ Introduction *************

function show_student_selector(ndx) {
    var studentDim = ndx.dimension(dc.pluck('student')); // Both dimension & group created and passed back to dimensional charting select menu
    var studentGroup = studentDim.group();

    dc.selectMenu('#student-selector') // x2 properties only
        .dimension(studentDim)
        .group(studentGroup)
        .title(function(d) {
            return d.key;
        });
        
        show_student_selector.order = function (order) { // Student data now re-ordered to allow view from 1-1,000 in 'intro' dropdown box
        if (!arguments.length) {
            return order;
        }
        order = order;
        return show_student_selector;
    };
        console.log(studentGroup.all);
}

// ************ Student Filter *************

function show_gender_selector(ndx) {
    var genderDim = ndx.dimension(dc.pluck('gender'));
    var genderGroup = genderDim.group();

    dc.selectMenu('#gender-selector') // x2 properties only
        .dimension(genderDim)
        .group(genderGroup);
     
    console.log(genderGroup.all); 
}

// ************ Gender % Split *************

function show_gender_percentage(ndx, gender, element) {
    var studentgenderPercentage = ndx.groupAll().reduce(
        // Sum totals for each gender type
        function(p, v) {
            p.total++;
            if (v.gender === gender) {
                p.gender_count++;
            }
            return p;
        },
        function(p, v) {
            p.total--;
            if (v.gender === gender) {
                p.gender_count--;
            }
            return p;
        },
        function() {
            return { total: 0, gender_count: 0 };
        }
    );

    dc.numberDisplay(element)
        .formatNumber(d3.format('.2%')) // sets percentage value to 2 decimal points
        .valueAccessor(function(d) {
            if (d.gender_count == 0) {
                return 0;
            }
            else {
                return (d.gender_count / d.total);
            }
        })
        .group(studentgenderPercentage);
}

// ************ Maths Average Performance *************

function show_average_math_score(ndx, math_score, element) {
    var dim = ndx.dimension(dc.pluck('math_score'));
    
    
    function add_item(p, v) { // p is an accumulator and keeps track of the total count
        p.count++; // Increment the count in our p object  
        p.total += v.math_score; // We increment our total by the value of the maths score we're looking at
        p.average = p.total / p.count; // Average maths score calculation
        return p; // Important command. Absence will create errors 
    }
    
    function remove_item(p, v) { // v represents each of the data items being added or removed 
        p.count--; // Reduce the count in our p object  
            if(p.count == 0) { // Count value will not be less than Zero & avoid a DIV#0 error
                p.total = 0;
                p.average = 0;
            }else {
                p.total -= v.math_score; // We reduce our total by the value of the math score we're looking at
                p.average = p.total / p.count; // Average score calculation
            }
        return p;
    }
    
    function initialise() { // Creates an initial value for p
        return {count: 0, total: 0, average: 0};
    }
    
    var averageMathScore = dim.group().reduce(add_item, remove_item, initialise); 
    
    console.log(averageMathScore.all());  // Console test is good
    
    dc.numberDisplay("#average-math-score")
        .formatNumber(d3.format(''))
        .valueAccessor(function(d) {
            if (d.math_score_count / d.total) {
                return 0;
            }
            else {
                return d.value.average.toFixed(2);
            }
        })
        .group(averageMathScore);
        
}

// ************ Reading Average Performance *************

function show_average_reading_score(ndx, reading_score, element) {
    var dim = ndx.dimension(dc.pluck('reading_score'));
    
    
    function add_item(p, v) { // p is an accumulator and keeps track of the total count
        p.count++; // Increment the count in our p object  
        p.total += v.reading_score; // We increment our total by the value of the reading score we're looking at
        p.average = p.total / p.count; // Average reading score calculation
        return p; // Important command. Absence will create errors 
    }
    
    function remove_item(p, v) { // v represents each of the data items being added or removed 
        p.count--; // Reduce the count in our p object  
            if(p.count == 0) { // Count value will not be less than Zero & avoid a DIV#0 error
                p.total = 0;
                p.average = 0;
            }else {
                p.total -= v.reading_score; // We reduce our total by the value of the reading score we're looking at
                p.average = p.total / p.count; // Average score calculation
            }
        return p;
    }
    
    function initialise() { // Creates an initial value for p
        return {count: 0, total: 0, average: 0};
    }
    
    var averageReadingScore = dim.group().reduce(add_item, remove_item, initialise);
    
    console.log(averageReadingScore.all()); // Console test is good
    
    dc.numberDisplay("#average-reading-score")
        .formatNumber(d3.format(''))
        .valueAccessor(function(d) {
            if (d.reading_score_count / d.total) {
                return 0;
            }
            else {
                return d.value.average.toFixed(2);
            }
        })
                .group(averageReadingScore);
        
}   
    
// ************ Writing Average Performance *************

function show_average_writing_score(ndx, writing_score, element) {
    var dim = ndx.dimension(dc.pluck('writing_score'));
    
    
    function add_item(p, v) { // p is an accumulator and keeps track of the total count
        p.count++; // Increment the count in our p object  
        p.total += v.writing_score; // We increment our total by the value of the writing score we're looking at
        p.average = p.total / p.count; // Average writing score calculation
        return p; // Important command. Absence will create errors 
    }
    
    function remove_item(p, v) { // v represents each of the data items being added or removed 
        p.count--; // Reduce the count in our p object  
            if(p.count == 0) { // Count value will not be less than Zero & avoid a DIV#0 error
                p.total = 0;
                p.average = 0;
            }else {
                p.total -= v.writing_score; // We reduce our total by the value of the writing score we're looking at
                p.average = p.total / p.count; // Average score calculation
            }
        return p;
    }
    
    function initialise() { // Creates an initial value for p
        return {count: 0, total: 0, average: 0};
    }
    
    var averageWritingScore = dim.group().reduce(add_item, remove_item, initialise);
    
    console.log(averageWritingScore.all()); // Console test is good
    
    dc.numberDisplay("#average-writing-score")
        .formatNumber(d3.format(''))
        .valueAccessor(function(d) {
            if (d.writing_score_count / d.total) {
                return 0;
            }
            else {
                return d.value.average.toFixed(2);
            }
        })
        .group(averageWritingScore);
        
}

// ************ Composite Chart All Subjects *************

function show_stats_all_subjects(ndx) {
    var mathDim = ndx.dimension(dc.pluck('math_score'));
    var readingDim = ndx.dimension(dc.pluck('reading_score'));
    var writingDim = ndx.dimension(dc.pluck('writing_score'));
    
    function student_id(student) { // A check on students exam score
            return function(d) {
                if (d.student === student) {
                    return 0;  
                } else {
                    return d.math_score, d.reading_score, d.writing_score;
                  }
            };
        }
       
        var mathStudent = mathDim.group().reduceCount(student_id('math_score')); // reduceCount helps to determine frequency on y-axis
        var readingStudent = readingDim.group().reduceCount(student_id('reading_score'));
        var writingStudent = writingDim.group().reduceCount(student_id('writing_score'));
        console.log(mathStudent.all());
        console.log(readingStudent.all());
        console.log(writingStudent.all());
        
        var compositeChart = dc.compositeChart('#composite-chart-exam-score');
        compositeChart
            .width(900)
            .height(400)
            .useViewBoxResizing(true)
            .x(d3.scale.linear().domain([0, 100]))
            .xAxisLabel("Exam Score")
            .yAxisLabel("Frequency")
            .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
            .renderHorizontalGridLines(true)
            .brushOn(false)
            .elasticY(true)
            .compose([  // x3 lines created for each exam subject in scope
                dc.lineChart(compositeChart)
                    .dimension(mathDim)
                    .colors('#6395F2')
                    .group(mathStudent, 'math_score'),
                dc.lineChart(compositeChart)
                    .dimension(readingDim)
                    .colors('#1258DC')
                    .group(readingStudent, 'reading_score'),
                dc.lineChart(compositeChart)
                    .dimension(writingDim)
                    .colors('#091834')
                    .group(writingStudent, 'writing_score'),
            ]);
     
}

// ************ Regression Analysis via Scatter Plot - Maths vs Reading *************

function show_math_vs_reading_regression(ndx) { // Establish correlation between x (math score) & y (reading score)

    var genderColors = d3.scale.ordinal() // Add colour to the scatter plot
        .domain(["female", "male"])
        .range(["pink", "blue"]);

    var mathDim = ndx.dimension(dc.pluck("math_score")); // For x-axis
    var scoreDim = ndx.dimension(function(d) { // For y-axis
        return [d.math_score, d.reading_score, d.gender]; // Array =  mathscore =[0], readingscore = [1] & gender = [2]
    });
    
    var scoreGroup = scoreDim.group();

    var minMath = mathDim.bottom(1)[0].math_score;
    var maxMath = mathDim.top(1)[0].math_score;

    dc.scatterPlot("#math-vs-reading-regression")
        .width(600)
        .height(400)
        .useViewBoxResizing(true)
        .x(d3.scale.linear().domain([minMath, maxMath]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Reading Score")
        .xAxisLabel("Math Score")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .title(function(d) {
            return "This " + d.key[2] + " received " + d.key[0] + " in Math and " + d.key[1] + " in Reading.";
        })
        .ordinalColors(genderColors)
        // .colorAccessor(function(d) {
        //    if (typeof d.key !== 'undefined') 
        //    return d.key[2];
        // })
        //.colors(genderColors)
        .dimension(scoreDim)
        .group(scoreGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}

// ************ Regression Analysis via Scatter Plot - Reading vs Writing *************

function show_reading_vs_writing_regression(ndx) { // Establish correlation between x (reading score) & y (writing score)

    var genderColors = d3.scale.ordinal() // Add colour to the scatter plot
        .domain(["female", "male"])
        .range(["pink", "blue"]);

    var readingDim = ndx.dimension(dc.pluck("reading_score")); // For x-axis
    var scoreDim = ndx.dimension(function(d) { // For y-axis
        return [d.reading_score, d.writing_score, d.gender]; // Array =  readingscore =[0], writingscore = [1] & gender = [2]
    });
    
    console.log(readingDim);
    console.log(scoreDim);
    
    var scoreGroup = scoreDim.group();
    
    console.log(scoreGroup);

    var minReading = readingDim.bottom(1)[0].reading_score;
    var maxReading = readingDim.top(1)[0].reading_score;

    dc.scatterPlot("#reading-vs-writing-regression")
        .width(600)
        .height(400)
        .useViewBoxResizing(true)
        .x(d3.scale.linear().domain([minReading, maxReading]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Writing Score")
        .xAxisLabel("Reading Score")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5)) 
        .title(function(d) {
            return "This " + d.key[2] + " received " + d.key[0] + " in Reading and " + d.key[1] + " in Writing.";
        })
        .ordinalColors(genderColors)
        // .colorAccessor(function(d) {
        //    if (typeof d.key !== 'undefined') 
        //    return d.key[2];
        // })
        //.colors(genderColors)
        .dimension(scoreDim)
        .group(scoreGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}

// ************ Regression Analysis via Scatter Plot - Math vs Writing *************

function show_math_vs_writing_regression(ndx) { // Establish correlation between x (math score) & y (writing score)

    var genderColors = d3.scale.ordinal() // Add colour to the scatter plot
        .domain(["female", "male"])
        .range(["pink", "blue"]);

    var mathDim = ndx.dimension(dc.pluck("math_score")); // For x-axis
    var scoreDim = ndx.dimension(function(d) { // For y-axis
        return [d.math_score, d.writing_score, d.gender]; // Array =  mathscore =[0], writingscore = [1] & gender = [2]
    });
    
    var scoreGroup = scoreDim.group();

    var minMath = mathDim.bottom(1)[0].math_score;
    var maxMath = mathDim.top(1)[0].math_score;

    dc.scatterPlot("#math-vs-writing-regression")
        .width(600)
        .height(400)
        .useViewBoxResizing(true)
        .x(d3.scale.linear().domain([minMath, maxMath]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .yAxisLabel("Writing Score")
        .xAxisLabel("Math Score")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5)) 
        .title(function(d) {
            return "This " + d.key[2] + " received " + d.key[0] + " in Math and " + d.key[1] + " in Writing.";
        })
        .ordinalColors(genderColors)
        // .colorAccessor(function(d) {
        //     if (typeof d.key !== 'undefined') 
        //    return d.key[2];
        // })
        //.colors(genderColors)
        .dimension(scoreDim)
        .group(scoreGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}

//************ Bar Chart - Ethnicity Distribution *************

function show_ethnicity_distribution(ndx) {
    var ethnicOrigin = d3.scale.ordinal() // x-axis
        .domain(["group A", "group B", "group C", "group D", "group E"])
        .range(["#091834", "#0A337F", "#1258DC", "#6395F2", "#DEE9FC"]);
    var ethnicityDim = ndx.dimension(function(d) { // y-axis
        return [d.ethnicity];
    });
    var ethnicityCluster = ethnicityDim.group();

    dc.barChart("#ethnicity-distribution")
        .width(600)
        .height(400)
        .useViewBoxResizing(true)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .colorAccessor(function(d, i) { return i; })
        .colors(ethnicOrigin)
        .dimension(ethnicityDim)
        .group(ethnicityCluster)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Ethnic Origin")
        .yAxisLabel("Student Count")
        .yAxis().ticks(5);
}

// ************ Bar Chart - Parents Education Distribution *************

function show_parents_education_distribution(ndx) {
    var parental_educationDim = ndx.dimension(dc.pluck('parental.education'))
    var parental_educationCluster = parental_educationDim.group();
   
    dc.barChart("#parents-education-distribution")
        .width(600)
        .height(400)
        .useViewBoxResizing(true)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(parental_educationDim)
        .group(parental_educationCluster)
        .transitionDuration(500)
        .x(d3.scale.ordinal()) // Ordinal scale used as units are levels of academia
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Parents Education")
        .yAxisLabel("Frequency")
        .elasticY(true)
        .yAxis().ticks(5);
   
}

// ******** Pie chart - Source of Students Nutrition ********

function show_source_student_nutrition(ndx) {
    
     var lunch_Dim = ndx.dimension(dc.pluck('lunch')) 
            var total_lunch_per_student = lunch_Dim.group();
            dc.pieChart('#nutrition-analysis')
                .height(350)
                .radius(150)
                .useViewBoxResizing(true)
                .transitionDuration(1500)
                .dimension(lunch_Dim)
                .group(total_lunch_per_student);

}

// ******** Pie chart - Exam Preparation ********

function show_exam_preparation(ndx) {
    
     var examPrep_Dim = ndx.dimension(dc.pluck('test.prep.course')) 
            var total_prep_per_student = examPrep_Dim.group();
            dc.pieChart('#test-preparation-analysis')
                .height(350)
                .radius(150)
                .useViewBoxResizing(true)
                .transitionDuration(1500)
                .dimension(examPrep_Dim)
                .group(total_prep_per_student);

}

