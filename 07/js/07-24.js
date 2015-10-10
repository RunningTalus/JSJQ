$(function() {

    var $window, $slideAd, endZone;

    $window = $(window);
    $slideAd = $('#slideAd');
    endZone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function() {

        if ( (endZone) <$window.scrollTop() ) {
            $slideAd.animate({ 'right': '0px' }, 250);
        } else {
            $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
        }

    });

});

/*
* Cache the window and advertisement.
* Calculate the end zone and store it in the variable endzone.
* The scroll event triggers an anonymous function EVERY TIME the user scrolls up or down.
* A conditional statement checks if the user's position is further from the top of the page than the start of the end zone.
* If the condition returns true, the box slides in from the right-hand edge of the page.
* The box slide takes 250 ms.
* If the condition is false or the box is in the middle of animating, it is stopped using the .stop() method.
* The ad then slides off the right-hand edge of the page.
*
* Calculating the END ZONE
*
* Getting the height from the top of the page to the top of the footer in pixels.
* Subtracting the height fo the viewport from this result.
* Subtracting a further 500px for the area where the box will come into view.
*
* You can tell how far the user has scrolled down the page using: $(window).scrollTop();
*
* If the distance extends down further than the height at which the end zone should show, the box should be made visible.
* If NOT, then the box should move off the page.
*
* */