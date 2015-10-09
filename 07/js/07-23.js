$(function() {

    var listHeight;

    listHeight = $('#page').height();

    $('ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');

});

/*
* A variable called listHeight is created to store the height of the page container.
* It is obtained using the .height() method.
* The height of the page is written at the end of the list using the .append() method and may vary between browsers.
* The selector picks all the <li> elements and sets their with to 50% of their current width using the .width() method.
* These two statements set the width of the first list item to 125 pixels and the width of the second list item to be 75% of the width it was when the page loaded.
*
* Measurements in percentages or ems should be given as a string with the suffix % or em.
* Pixels do NOT require a suffix and are NOT enclosed in quotes.
* */