queue()
    .defer(d3.csv, "data/Studentsperformance.csv")
    .await(makeGraphs);
    
function makeGraphs(error, studentData) {
     
}