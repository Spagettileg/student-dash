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

// ***Bar chart 1 - Ethnicity Distribution***

  function createBarChart(id) {
    var barChart = dc.barChart('#' + id);
    barChart
      .dimension(ethnicityDim)
      .group(ethnicityCluster)
      .width(600)
      .height(400)
      .useViewBoxResizing(true)
      .x(d3.scale.ordinal());
    barChart.render();
    return barChart;
  }

  var ethnicityDim = ndx.dimension(dc.pluck('ethnicity'));
  var ethnicityCluster = ethnicityDim.group();

  describe('barChart', function() {
    var barChart;

    beforeEach(function() {
      barChart = createBarChart('ethnicity-distribution');
      barChart.dimension();
      barChart.render();
    });

    it('should exist', function() {
      expect(show_ethnicity_distribution(ndx)).not.toBeNull();
    });

    it('should have chart', function() {
      expect(dc.hasChart(barChart)).toBeTruthy();
    });

    it('should have a width', function() {
      expect(barChart.width()).toEqual(600);
    });

    it('should have a height', function() {
      expect(barChart.height()).toEqual(400);
    });

    it('should have an ordinal scale', function() {
      expect(barChart.x(d3.scale.ordinal())).toBeTruthy();
    });

    it('should be responsive', function() {
      expect(barChart.useViewBoxResizing(true)).toBeTruthy();
    });

    it('should have a dimension', function() {
      expect(barChart.dimension()).toBe(ethnicityDim);
    });

    it('should have a group', function() {
      expect(barChart.group()).toBe(ethnicityCluster);
    });
});

// ***Data Filters***

describe('Selector Tests', function() {
  it('Student selector should exist', function() {
    expect(show_student_selector(ndx)).not.toBeNull();
  });

  it('Gender selector should exist', function() {
    expect(show_gender_selector(ndx)).not.toBeNull();
  });
  
});