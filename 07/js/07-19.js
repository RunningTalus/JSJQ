$(function(){

    var $listItems;
    $listItems = $('li');

    $listItems.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItems.has('em').addClass('complete');

    $listItems.each(function() {
        var $this;
        $this = $(this);

        if ($this.is('.hot')) {
            $this.prepend('Priority item: ');
        }
    });

    $('li:contains("honey")').append(' (local)');

});

/*
* The .filter() method finds the last list item with a class attribute whose value is hot.
* It then removes that value from the class attribute.
* The :not() selector is used with the jQuery selector to find <li> elements without a value of hot in their class attribute and adds a value of cool.
* The .has() method finds the <li> element that has an <em> element within it and adds the value complete to the class attribute.
* The .each() method loops through the list items.
* The current element is cached in a jQuery object.
* The .is() method looks to see if the <li> element has a class attribute whose value is hot.
* If an <li> element has the hot class, 'Priority item: ' is added to the start of the item.
* The :contains selector checks for <li> elementsthat contain the text "honey" and appends the text " (local)" to the end of those items.
* */