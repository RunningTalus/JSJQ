FORM METHODS AND EVENTS


Retrieve the Value of Elements

.val() - Primarily used with <input>, <select>, and <textarea> elements.
       - It can be used to get the value of the first element in a matched set, or update the value of all of them.


Other Methods


.filter() - Used to filter a jQuery selection using a second selector (especially form-specific filters).


.is() - Often used with filters to check whether a form input is selected/checked.


$.isNumberic() - Checks whether the value represents a numeric value and returns a Boolean.
     Returns TRUE for the following...
        $.isNumeric(1);
        $.isNumeric("1");
        $.isNumeric(+1);
        $.isNumeric(-3);
        $.isNumeric(4.4);
        $.isNumeric(0xFF);
        


EVENTS

.on() - Used to handle ALL events.


blur - When an element loses focus.


change - When the value of an input changes.


focus - When an element gains focus.


select - When the option for a <select> element is changed.


submit - When a form is submitted.


.serialize() - Collects form data.