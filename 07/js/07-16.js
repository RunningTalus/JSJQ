$(function() {
   $('h2').hide().slideDown();

    var $li;

    $li = $('li');

    $li.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(700);
    });

    $li.on('click', function() {
        $(this).fadeOut(700);
    });
});

/* The selector picks the <h2> element and hides it, so that it can be animated in.
* .slideDown() method is chained and used to show the hidden <h2> element.
* The list of items are hidden, the .each() method is used to loop through each of the <li> elements using .delay() and
* .fadeIn() methods.
* The index property is passed in as a parameter to the anonymous function.
* Index acts as a counter indicating which <li> element is the current one.
*/