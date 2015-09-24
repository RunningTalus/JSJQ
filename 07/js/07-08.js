$(function() {
   $('li:contains("pine")').text('almonds');

    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>'; /* this refers to the current list item. $(this) places that element in a new jQuery object so you can use jQuery methods on it. */
    });

    $('li#one').remove();
});

/* Finds all <li> elements with that contain the word "pine."
* Uses the text() method to change the text to "almonds."
* Finds all <li> elements with a class of hot. The html() method is used to place the content inside <em> elements.
* <li> elements with an ID of one are removed with jQuery's remove() Method.
* This removes fresh figs from the list.
* */