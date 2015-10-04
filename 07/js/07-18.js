$(function() {

    var $h2;
    $h2 = $('h2');

    $('ul').hide();
    $h2.append('<a class="show">show</a>');

    $h2.on('click', function() {
        $h2.next('ul')
            .fadeIn(500)
            .children('.hot')
            .addClass('complete');
        $h2.find('a').fadeOut();
    });

});

/*
* When the page loads the list is hidden.
* A link for show is appended to the <h2> element.
* A click event in the <h2> triggers an anonymous function.
* The .next() method is used to select the next sibling after the <h2> element, which is the <ul> element.
* The <ul> element is faded into view.
* The .children() method selects and any child elements of the <ul> element.
* The selector indicates that it should pick only those whose class attribute has a value of hot.
* The .addClass() method is then used on those <li> elements to add a class name of complete.
* This shows how you can chain methods and traverse from one node to another.
* The .find() method can be used to select the <a> element that is a child element and fade it out because the list is now being shown to the users.
* */