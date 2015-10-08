$(function() {
    var $p, $clonedQuote, $moveItem;

    $p = $('p');

    // Create a clone of the <p> element and add it after the <h2> element.
    $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h2');

    // Remove first item, and add it to the end of the list.
    // Note how this happens in both lists.
    $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');

});

/*
* A jQuery selection is made containing the <p> element at the end of the page.
* This is cached in a variable called $p.
* The element is copied using the .clone() method (along with its content and child elements).
* It is stored in a variable called $cloneQuote.
* The paragraph is removed.
* The cloned version of the quote is inserted after the <h2> element at the top of the page.
* The first list item is detached from the DOM tree and stored in a variable called $moveItem (effectively removing it from the DOM tree).
* That list item is then appended to the end of the list.
* */