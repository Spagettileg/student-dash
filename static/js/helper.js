// Reset filters

$('#reset-filters').click(function() {
    dc.filterAll();
    dc.renderAll();
});


// Hide article content

$('.hide-content-btn').click(function() {
    $(this).parent().nextAll('.hide-content-toggle').slideToggle();
    $(this).parent().parent().parent().toggleClass('eq-column-height');
    $(this).toggleClass('fa-angle-down');
    $(this).toggleClass('fa-angle-up');
});

// Website authors developer years appear in the footer

$(document).ready(function () {
     
    $('#developer-years').text('2018 - ' + new Date().getFullYear());
    
});
