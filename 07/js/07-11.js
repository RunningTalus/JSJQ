$(function() {

    // Get the background color of the first list item.
    var backgroundColor;
    backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('li').css({
       'background-color': '#C5A996',
        'border': '1px solid #FFF',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    });
});

/* The variable backgroundColor is created.
* The jQuery selection contains all <li> elements, and the .css() method returns the value of the background-color property of the first list item.
* The background color of the first list item is written into the page using the append() method.
* append() is used to add content after the <ul> element.
* The selector picks all <li> elements, and then the .css() method updates several properties at the same time.
* The background color is changed to brown.
* A white border is added.
* The color of the text is changed to black.
* The typeface is changed to Georgia.
* Extra padding is added on the left.
* */