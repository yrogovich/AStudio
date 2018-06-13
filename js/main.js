$(document).ready(function(){

    /*Start owl carousel*/
    $("#owl-carousel1").owlCarousel({
        // Most impotant owl features
        items:1,
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        smartSpeed: 1000,
        autoplayTimeout: 5000
    });

    /*Scroll animate*/
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false; // Off standart action
    });

    $('#modal-programLearning').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
});
