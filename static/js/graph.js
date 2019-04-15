queue()
    .defer(d3.csv, "data/Studentsperformance.csv")
    .await(createAnalysis);

function createAnalysis(error, studentData) {
    var ndx = crossfilter(studentData); //Crossfilter gets passed to the function that will draw the graph
       
    show_student_selector(ndx);
    show_gender_selector(ndx);
    
    show_gender_percentage(ndx, "female", "#female-student-percentage"); 
    show_gender_percentage(ndx, "male", "#male-student-percentage"); 

    dc.renderAll(); // Essential command for Chart to appear
}

function show_student_selector(ndx) {
    var studentDim = ndx.dimension(dc.pluck('student')); // Both dimension & group created and passed back to dimensional charting select menu
    var studentGroup = studentDim.group();

    dc.selectMenu('#student-selector') // x2 properties only
        .dimension(studentDim)
        .group(studentGroup);
        
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