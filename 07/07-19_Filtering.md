Add and Filter Elements in a Selection

Once you have a jQuery selection, you can add more elements to it, or you can filter the selection to work with a subset of the elements.


ADDING ELEMENTS TO A SELECTION

.add() - Selects ALL elements that contain the text specified (parameter is case sensitive).


FILTERING WITH A SECOND SELECTOR

.filter() - Finds elements in matched set that in turn match a second selector.

.find() - Finds descendants of elements in matched set that match the selector.

.not() / :not() - Finds elements that do NOT Match the selector.

.has() / :has() - Finds elements from the matched set that have a descendant that matches the selector.

:contains() - Selects all elements that contain the text specified (parameter is case sensitive).


The following two selectors are equivalent.

$('li).not('.hot').addClass('cool');
$('li:not(.hot)').addClass('cool');

NOTE: In browsers that support querySelector() / querySelectorAll(), 
:not() is faster than .not()
:has() is faster than .has()


TESTING CONTENT

.is() - Checks whether current selection matches a condition (returns Boolean). Helpful in conditional statements.
