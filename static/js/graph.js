queue()
    .defer(d3.csv, "data/studentsperformanceData.csv")
    .await(createAnalysis);

function createAnalysis(error, studentsperformanceData) {
    var ndx = crossfilter(studentsperformanceData); //Crossfilter gets passed to the function that will draw the graph
            studentsperformanceData.forEach(function(d){ 
                d.student = parseInt(d["student"]);  // Converts string to numbers
                d.math_score = parseInt(d["math.score"]);  // Converts string data to Integers.     
            }); 
     
    show_student_selector(ndx);
    show_gender_selector(ndx);
    
    show_gender_percentage(ndx, "female", "#female-student-percentage"); 
    show_gender_percentage(ndx, "male", "#male-student-percentage"); 
    
    show_average_math_score(ndx);

    dc.renderAll(); // Essential command for Chart to appear
}

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
}

function show_gender_selector(ndx) {
    var genderDim = ndx.dimension(dc.pluck('gender'));
    var genderGroup = genderDim.group();

     dc.selectMenu('#gender-selector') // x2 properties only
        .dimension(genderDim)
        .group(genderGroup);
        
}

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
            if (isNaN(d.math_score_count == "NaN")) {
                return 0;
            }
            else {
                return (d.math_score_count / d.total);
            }
        })
        .group(averageMathScore);
        
    
}
    