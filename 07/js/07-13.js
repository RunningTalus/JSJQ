$(function() {

    var ids;
    var $listItems;

    ids = '';
    $listItems = $('li');
    
    $listItems.on('mouseover click', function() {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <spam class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function() {
        $this.children('span').remove();
    });

});

/*
* The selector finds all list items on the page.
* The resulting jQuery object is uesd more than once so it is stored in a variable called $listItems.
* The .on() method creates an event listener, which waits for when the user moves a mouse over a list item or clicks on it.
* It triggers an anonymous function.
* Note how two events 'mouseover click' are specified in the same set of quote marks with a space between them.
* The anonymous function:
* 1) gets the value of the id attribute on that element.
* 2) Removes span elements from all of the list items.
* 3) Adds the balue of the id attribute to the list item in a new <span> element.
* The .mouseout() method triggers the removal of any child <span> elements to prevent build-up of added values.
*
* */