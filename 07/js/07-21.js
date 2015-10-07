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