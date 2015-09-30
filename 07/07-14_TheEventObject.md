THE EVENT OBJECT

Every event handling function receives an event object.
It has methods and properties related to the event that occurred.

PROPERTY    -    DESCRIPTION

type - Type of event (e.g., click, mouseover)

which - Button or key that was pressed.

data - An object literal containing extra information passed to the function when the event fires.

target - DOM element that initiated the event.

pageX - Mouse position from left edge of viewport.

pageY - Mouse position from top of viewport.

timeStamp - Number of milliseconds from Jan 1st, 1970, to when the event was triggered (UNIX time). Does NOT work in Mozilla Firefox.



METHOD     -     DESCRIPTION

.preventDefault() - Prevents the default (e.g., submitting a form).

.stopPropagation() - Stops the event bubbling up to ancestors.