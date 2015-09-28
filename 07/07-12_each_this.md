Working with each element in a selection

jQuery allows you to recreate the functionality of a loop on a selcetion of elements, using the .each() method.

.each()
    Allows you to perform one or more statements on each of the items in the selection of elements that is returned by a selector.
    It takes one parameter: a function containing statements you want to run on each element.
    
this or $(this)
    Access the current element using the this keyword.
    $(this) uses the this keyword to create a new jQuery selection containing the current element.
    It allows you to use jQuery methods on the current element. 