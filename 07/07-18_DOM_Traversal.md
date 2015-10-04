TRAVERSING THE DOM WITH jQUERY

When you have made a jQuery selection, you can use these mthods to access other element nodes relative to the initial selection.


SELECTOR REQUIRED

.find() - All elements with current selection that match selector

.closest() - Nearest ancestor(not just the parent) that matches the selector.


SELECTOR OPTIONAL - BOTH the selector AND the method must match in order for the element to be added to the new selection.


.parent() - Direct parent of current selection.

.parents() - All parents of current selection.

.children() - All children of current selection.

.siblings() - All siblings of current selection.

.next() - Next sibling of current element.

.nextAll() - All subsequent siblings of current element.

.prev() - Previous sibling of current element.

.prevAll() - All previous siblings of current element.