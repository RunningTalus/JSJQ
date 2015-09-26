Getting and Setting Attribute Values - 4 Methods

1) .attr() - This method can GET or SET a specified attribute and its value.
    
To get the value of an attribute, you specify the name of the attribute in parentheses. $('li#one').attr.('id');
To update the value of an attribute, you specify both the attribute name and its new value. $('li#one').attr('id','hot');

2) .removeAttr() - This method removes a specified attribute (and its value). You just specify the name of the attribute that you want to remove from the element in parentheses. $('li#one').removeAttr('id')

3) .addClass() - This method adds a new value to the existing value of teh class attribute.  It does not overwrite existing values.  Non-destructive.

4) .removeClass() - This method removes a value from the class attribute, leaving any other class names within that attribute intact. 