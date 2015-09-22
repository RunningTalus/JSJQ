$(':header').addClass('headline');  /* Selects all header elements and adds a value of headline to their class attribute. */
$('li:lt(3)').hide().fadeIn(1500);  /* Selects the 1st three list items, hides them, then fades them in. */
$('li').on('click', function() {  /* Event Listener on li elements. User click removes the element from the page. */
    $(this).remove();
});