$(document).ready(function() {
    /* Every time the window is scrolled ... */
    function ScrollHandler (event){
        // shows the object when scrolled 1/6 way through it
        $('.hidemehalf').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight()/6;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if(bottom_of_window > bottom_of_object){
                $(this).removeClass('hidemehalf');
            }
        });
        // activate the neon border animation
        $('.quoteNeonBase').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if(bottom_of_window > bottom_of_object){
                $(this).addClass('quoteNeon');
            }
        });
        // activate the line across screen animation
        $('.line').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight()*1.25;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if(bottom_of_window > bottom_of_object){
                $(this).addClass('lineLight');
            }
        });
        // activate the line across screen animation
        $('.line2').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if(bottom_of_window > bottom_of_object){
                $(this).addClass('lineLight2');
            }
        });
        // activate the line across screen animation
        $('.line3').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if(bottom_of_window > bottom_of_object){
                $(this).addClass('lineLight3');
            }
        });
        // activate the line across screen animation
        $('.line4').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if(bottom_of_window > bottom_of_object){
                $(this).addClass('lineLight4');
            }
        });
        $('.titleScroll').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if(bottom_of_window > bottom_of_object) {
                $(this).addClass('reveal-text');
            }
        });
        $('.titleScroll2').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if(bottom_of_window > bottom_of_object) {
                $(this).addClass('reveal-text2');
            }
        });
    }
    $(window).scroll(ScrollHandler);

    function pageInit() {
        ScrollHandler();
        // menu show animation
        // $('.hamburger').on('click', function() {
        $('.hamburger').click(function() {
            $('.fullMenu').toggleClass('fullMenuShow');
        });//end mobile click
        // ******************************************************************
        // $('.hamburger').click(function() {
        // /*$('.dropdownNav').toggleClass('expand');*/
        // $('.dropdownNav').slideToggle();
        // $(this).toggleClass('click');
        // });//end mobile click
    }
    pageInit();

    // page transition - smooth state
    var $body  = $('html, body'), content = $('#wrapper').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
            // Set the duration of our animation
            duration: 500,
            // Alterations to the page
            render: function ($container) {
                // Quickly toggles a class and restarts css animations
                $container.addClass('is-exiting');
                content.restartCSSAnimations();
                // Scroll user to the top
                $body.animate({ 'scrollTop': 0 }, 300);
                // removing click event on hamburger menu (to avoid memory leak)
                $('.hamburger').off('click');
            },
        },
        onReady: {
            duration: 0,
            render: function ($container, $newContent) {
                // Remove your CSS animation reversing class
                $container.removeClass('is-exiting');
                content.restartCSSAnimations();
                // Inject the new content
                $container.html($newContent);
                pageInit();
            }
        },
    }).data('smoothState'); // makes public methods available
});

