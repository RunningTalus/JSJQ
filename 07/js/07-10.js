$(function() {
    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id', 'group');
});

/* The first statement selects an <li> element with an ID of three.  It then removes the class hot from honey.
*  The second statement selects  <li> elements with a class of hot, and adds the class favorite.
* The third statement selects the <ul> element and adds an id attribute, assigning it the value of group. This triggers a CSS rule that adds margin and border styles.
* */