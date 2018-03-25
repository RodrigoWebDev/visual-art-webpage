$(function () {
    //Dropdown menu
    let index = 0;
    $("nav i").click(function () {
        if ($('.drop-menu').is(':visible')) {
            let svg = $('nav i');
            svg.removeClass('icon-arrow-up');
            svg.addClass('icon-arrow-down');
        };
        if ($('.drop-menu').is(':hidden')) {
            let svg = $('nav i');
            svg.removeClass('icon-arrow-down');
            svg.addClass('icon-arrow-up');
        };
        $(".drop-menu").toggle(400);

    });

    //Lightbox
    $(".close").click(function(){
        $(".overlay").hide(500);
    });
    
    $(".work img").click(function(){
        $(".overlay img").attr("src",$(this).attr("src"));
        $(".overlay").show(500);
    });





});
