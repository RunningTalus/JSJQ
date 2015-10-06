$(function() {

    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool');

});

/*
* The :lt() selector is used in the selector to pick list items with an index number less than 2.
* It removes the value hot from their class attribute.
* The .eq() method selects the first item (using the number 0 because the index numbers start at zero).
* It adds the value of complete to the class attribute.
* The :gt() selector is used in the jQuery selector to pick the list items with an index number higher than 2.
* It adds a value of cool to their class attribute.
* */