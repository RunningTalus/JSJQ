$(function() {

    $('li').on('click', function() {
       $(this).animate({
          opacity: 0.0,
          paddingLeft: '+=80'
       }, 500, function() {
           $(this).remove();
       });
    });
});


/*
* All <li> items are selected.
* When a user clicks on an <li> element, an anonymous function is triggered.
* $(this) creates a new jQuery object holding the element the user clicked on.
* The .animate() method is the called on that jQuery object.
* Inside the .animate() method, the opacity and paddingLeft are changed.
* The value of paddingLeft property are increased by 80 pixels, shifting it to the right as it fades out.
* The .animate() method has two additional parameters. Speed of animation, and an anonymous callback function to execute
* on completion.
* When the animation has completed the callback function removes that list item from the page using the .remove() method.
* */