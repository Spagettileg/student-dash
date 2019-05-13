// ***Tests to see if the data set is working***

describe('Data test', function(){
  it('Shows data is there', function(){
    expect("data/StudentsPerformance.csv").toBeDefined();
  });
});


function progress(loading, id) {
  if (loading === 6 || loading === 0) {
    document.getElementById(id).style.display = 'block';
    return 'loaded';
  }
  document.getElementById(id).style.display = 'none';
  return 'loading';
}

// ***Global Variable for tests***
    var ndx = crossfilter();


// ***Data Filters***

describe('Selector Tests', function() {
  it('Student selector should exist', function() {
    expect(show_student_selector(ndx)).not.toBeNull();
  });

  it('Gender selector should exist', function() {
    expect(show_gender_selector(ndx)).not.toBeNull();
  });
  
});

// ***Exam Score Verification***

describe('Exam Score Tests', function() {
  it('Exams scores should exist', function() {
    expect(show_stats_all_subjects(ndx)).not.toBeNull();
  });
});