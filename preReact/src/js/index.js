$(document).ready(function() {

    var currentClass;

    $(".section-link").hover(function() {
        var myClass = $(this).attr("class").split(/\s+/)[1];
        $(".splash-section." + myClass).addClass("section-hover " + myClass + "-hover");
        $(this).parent().find(".back-image").css({"display": "block",
                                                    "opacity": "0.7",
                                                    "z-index": 1});

        // Workaround - adds and removes an element to get the actual css value from the stylesheet
        // instead of a COMPUTED value, as elements are being animated
        var $p = $("<p></p>", {"class" : myClass + "-hover"}).hide().appendTo("body");
        updateColor($p.css("background-color"));
        updateParent($(".section-link." + myClass), $p.css("background-color"));
        $p.remove();
    }, function() {
        var myClass = $(this).attr("class").split(/\s+/)[1];
        $(".splash-section." + myClass).removeClass("section-hover " + myClass + "-hover");
        $(this).parent().find(".back-image").css("opacity", "0");

        var $p = $("<p></p>", {"class" : "narci"}).hide().appendTo("body");
        updateColor($p.css("color"));
        $p.remove();

        updateParent($(".section-link." + myClass), "000");
    });

    $(".section-link").click(function() {
        currentClass = $(this).attr("class").split(/\s+/)[1];
        $(".splash-section." + currentClass).addClass("expand expand-" + currentClass);
        $(".splash-screen").addClass("slide-up");
    });

    $(".splash-screen").on("animationend", function(animation) {
        if (animation.originalEvent.animationName == "slide-up") {
            $(this).css("display", "none");
        }
    });

    $(".splash-section").on("transitionend", function(event) {
        if (event.originalEvent.propertyName == "transform") {
            $("section." + currentClass).addClass("active");
        }
    });

    $(".back-image").on("transitionend", function(event) {
        if (event.originalEvent.propertyName == "opacity" 
            && $(this).css("opacity") == 0) 
                $(this).css({"display": "",
                            "z-index": ""});
    });
    
    function updateColor(color) {
        $(".narci").css("color", color);
    }

    function updateParent(child, color) {
        child.parent().css("background-color", color);
    }


    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();  //Only prevent default if animation is actually going to happen
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 0, 
                function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { 
                        return false;
                    } 
                    else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
                window.location.hash = $(this).attr("href");
            }
        }
    }); 
});