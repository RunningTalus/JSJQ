WINDOW AND PAGE DIMENSIONS

The .height() and .width() methods can be used to determine the dimensions of both the browser window and the HTML document (window and document objects).

There are also methods to get and set the position of the scroll bars.


.height() - Height of the jQuery selection

.width() - Width of the jQuery selection.

.scrollLeft() - Gets the horizontal position of the scroll bar for the first element in the jQuery selection, or sets the horizontal scroll bar position for matched nodes.

.scrollTop() - Gets the vertical position of the scroll bar for the first element in the jQuery selection, or sets the vertical scroll bar posistion for matched nodes.


NOTE: $(window).height() will often return the incorrect value unless a DOCTYPE declaration is specified for the HTML page.

