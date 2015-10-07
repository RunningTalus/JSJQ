SELECTING FORM ELEMENTS


SELECTOR    /     DESCRIPTION


:button - <button> and <input> elements whose type attribute has a value of button


:checkbox - <input> elements whose type attribute has a value of checkbox. 
     NOTE: Better performance with $('[type="checkbox"]')


:checked - checked elements from checkboxes and radio buttons (see :selected for select boxes).


:disabled - All elements that have been disabled.


:enabled - All elements that are enabled.


:focus - Element that currently has focus.
     NOTE: Better performance with $(document.activeElement)


:file - All elements that are file inputs.


:image - All image inputs.
     NOTE: Better performance with [type="image"]


:input - All <button>, <input>, <select>, and <textarea> elements.
     NOTE: Better performance from selecting elements, then using .filter(":input")

     
:password - All password inputs.
     NOTE: Better performance with $('input:password')
     
     
:radio - All radio inputs.
       - To select a group of radio input use: $('input[name="gender"]:radio')


:reset - All inputs that are reset buttons.


:selected - All elements that are selected.
     NOTE: Better performance using a CSS selector inside the .filter() method (e.g. .filter(":selected").
     
     
:submit - <button> and <input> elements whose type attribute has a value of submit.
     NOTE: Better performance using [type="submit"]
     
     
:text - Selects <input> elements with a type attribute whose value is text, or whose type attribute is NOT present.
      NOTE: Likely to get better performance using ('input:text').
     