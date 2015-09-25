$(function() {
    $('ul').before('<p class="notice">Just Updated</p>');
    $('li.hot').prepend('+&#32;')
    var $newListItem;
    $newListItem = $('<li><em>gluten-free</em>&#32;soy sauce</li>');
    $('li:last').after($newListItem);
});

/* The <ul> element is selected, and the .before() method is used to insert a new paragraph before the list.
* All <li> elements with a class of hot are selected, and the prepend() method is used to add a + symbol before the existing text.
* A new <li> element is created and stored in a variable.
* Then the last <li> element is selected, and the new element is added using the .after() method.
*/