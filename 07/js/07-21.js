$(function() {
   var $newItemButton, $newItemForm, $textInput;

   $newItemButton = $('#newItemButton');
   $newItemForm = $('#newItemForm');
   $textInput = $('input:text');

   $newItemButton.show();
   $newItemForm.hide();

   $('#showForm').on('click', function() {
       $newItemButton.hide();
       $newItemForm.show();
   });

   $newItemForm.on('submit', function(e){
       e.preventDefault();

       var newText;
       newText = $('input:text').val();

       $('li:last').after('<li>' + newText + '</li>');
       $newItemForm.hide();
       $newItemButton.show();
       $textInput.val('');
   });

});

/*
* New jQuery objects are created to hold the new item button, the form to add new items, and the add button.
* New jQuery objects are cached in variables.
* When the page loads, the CSS hides the new item button (and shows the form), so jQuery methods show the new item button and hide the form.
* If a user clicks on the new item button (the <button> element whose id attribute has a value of of showForm), the new button is hidden and the form is shown.
* When the form is submitted, an anonymous function is called and it is passed the Event object.
* The .preventDefault() method can stop the form from being submitted.
* The :text selector picks the <input> element whose type attribute has a value of text, and the .val() method gets the value the user entered into it.
* This value is stored in a variable called newText.
* A new item is added to the end of the list using the .after() method.
* The form is hidden, then new item button is shown again, and the content of the text input is emptied.
* */