$(function() {
    var $listHTML = $('ul').html(); /* The .html method gets all of the HTML inside it (the 4 <li> elements) and they are stored as a reference in a variable. */
    $('ul').append($listHTML);  /* This is then appended at the end of the selection to the existing <li> elements. */
});
