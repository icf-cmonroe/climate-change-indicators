(function ($) {
    // variable gets browser window
    var $window = $(window);
    function checkWidth() {
        // variable gets browser window width
        var windowsize = $window.width();
        //Set all blocks with class .lc-box to height of auto
        $('.cc').css('height', 'auto');
        //check window size for responsive design
        if (windowsize > 650) {
            var maxHeight = -1;
            //Checks each block with class of .lc-box
            $('.cc').each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            //Set all blocks with class .lc-box to height of maxHeight
            $('.cc, .myth, .fact').height(maxHeight);
        } else {
            //If less than the responsive break point revert all blocks with class .lc-box back to height auto
            $('.cc').css('height', 'auto');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
}(jQuery));