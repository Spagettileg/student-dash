queue()
    .defer(d3.csv, "data/Studentsperformance.csv")
    .await(createAnalysis);

function createAnalysis(error, studentData) {
    var ndx = crossfilter(studentData); //Crossfilter gets passed to the function that will draw the graph
    
    show_student_selector(ndx);

    dc.renderAll(); // Essential command for Chart to appear
}

function show_student_selector(ndx) {
    var studentDim = ndx.dimension(dc.pluck('ethnicity')); // Both dimension & group created and passed back to dimensional charting select menu
    var studentGroup = studentDim.group();

    dc.selectMenu('#student-selector') // x2 properties only
        .dimension(studentDim)
        .group(studentGroup);
        
}
