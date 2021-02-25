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

// Scroll to top of dashboard function

    $("a[href='#move-up']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    // If position of vertical scroll is above 575px, for 
    // return to top button to disappear.
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 575) {
            $('.move-top').fadeIn();
        } else {
            $('.move-top').fadeOut();
        }
    });
