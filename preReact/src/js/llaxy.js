$(document).ready(function() {
    $(".llaxy").each(function() {
        var para = $(this); //The element to parallax
        var paraParent = $(this).parent();

        function parallaxy() {
            var speed = para.data('speed');
            var paraY = paraParent.offset().top;
            var windowY = $(this).scrollTop();
            var paraHeight = $(this).height();
            var parentHeight = paraParent.innerHeight();

            //Next pixel to show
            var windowBottom = windowY + paraHeight;

            // If block is shown on screen
            if (windowBottom > paraY && windowY < paraY + parentHeight) {
                // Number of pixels shown after block appear
                var paraBottom = ((windowBottom - paraY) * speed);
                // Max number of pixels until block disappear
                var paraTop = paraHeight + parentHeight;
                // Percentage between start showing until disappearing
                var paraPercent = ((paraBottom / paraTop) * 100) + (50 - (speed * 50));
            }

            para.css({
                top: paraPercent + '%',
                //Transform allows for coping with the changing top value
                transform: 'translate(-50%, -' + paraPercent + '%)' 
            });
        }

        $(document).on({
            scroll: function () {
                parallaxy();
            }, 
            ready: function () {
                parallaxy();
            }
        });
    });
});