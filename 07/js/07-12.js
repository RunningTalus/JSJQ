$(function() {
   $('li').each(function() {
       var ids;
       ids = this.id;
       $(this).append(' <span class="order">' + ids + '</span');
   })
});

/* The selector creates a jQuery object containing all <li> elements.
* The .each() method calls an anonymous function for each of the list items in the matched set.
* The this keyword refers to the current element node in the loop.
* It is used to access the calue of the curren element's id attribute, which is stored in a variable called ids.
* $(this) is used to create a jQuery object that contains the current element in the loop.
* Having the element in a jQuery object enables you to use jQuery methods on that element.
* In this case the .append() method is used to add a new <span> element to the current list item.
* The content of that element is the value of its id attribute.
* */