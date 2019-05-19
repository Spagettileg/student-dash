// ***Tests to see if the data set is working***

describe('Data test', function() {
  it('Shows data is there', function() {
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

// *** Defensive Programming - SpyOn() ***

var examPrep = function() {
  //defaults
  var _lazy = 'none',
    _focused = 'completed';

  this.initialize = function(focused, lazy) {
    _focused = focused || _focused;
    _lazy = lazy || _lazy;
  };
  if (arguments.length) this.initialize();

  //getters and setters
  this.getFocused = function() { return _focused; };
  this.setFocused = function(focused) { _focused = focused; };

  //public methods
  this.addNoprep = function() { _lazy++; };
  this.toString = function() { return 'Successful students will " + this.getFocused() + " and poor results show " + _lazy + " preparation completed.'; };
};

describe("examPrep toString() Test", function() {
  it("calls the getFocused() function", function() {
    var testexamPrep = new examPrep();
    spyOn(testexamPrep, "getFocused");
    testexamPrep.getFocused();
    expect(testexamPrep.getFocused).toHaveBeenCalled();
  });
});


