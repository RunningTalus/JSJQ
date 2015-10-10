POSITION OF ELEMENTS ON THE PAGE

The .offset() and .position() methods can be used to determine the position of elements on the page.

.offset() - Gets or sets coordinates of the element relative to the top left-hand corner of the document object.

.position() - Gets or sets coordinates of the element relative to any ancestor that has been taken out of normal flow (using CSS box offsets). 
            - If no ancestor is out of normal flow, it will return the same as .offset().
            
BOTH .offset() and .position() returns an object that has TWO properties.
            top - the position from the top of the document or containing element.
            left - the position from the left of the document or containing element.
            
var offset = $('div').offset();
var text = 'Left: ' + offset.left + 'Right: ' + offset.right;            