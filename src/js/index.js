$(document).ready(function() {

    var currentClass;

    $(".section-link").hover(function() {
        var myClass = $(this).attr("class").split(/\s+/)[1];
        $(".splash-section." + myClass).addClass("section-hover " + myClass + "-hover");

        // Workaround - adds and removes an element to get the actual css value from the stylesheet
        // instead of a COMPUTED value, as elements are being animated
        var $p = $("<p></p>", {"class" : myClass + "-hover"}).hide().appendTo("body");
        updateColor($p.css("background-color"));
        $p.remove();
    }, function() {
        var myClass = $(this).attr("class").split(/\s+/)[1];
        $(".splash-section." + myClass).removeClass("section-hover " + myClass + "-hover");
        updateColor("#333");
    });

    $(".section-link").click(function() {
        currentClass = $(this).attr("class").split(/\s+/)[1];
        $(".splash-section." + currentClass).addClass("expand expand-" + currentClass);
        $(".splash-screen").addClass("slide-up");
    });

    $(".splash-screen").on("animationend", function(animation) {
        if (animation.originalEvent.animationName == "slide-up") {
        }
    });

    $(".splash-section").on("transitionend", function(event) {
        if (event.originalEvent.propertyName == "transform") {
            $("section." + currentClass).addClass("active");
        }
    });

    function updateColor(color) {
        $(".narci").css("color", color);
    }

});