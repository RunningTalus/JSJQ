$(function() {
   var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},
        function(e) {
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatus = 'Status: ' + e.data.status + '<br />';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
});

/* The event handler is triggered by click and mouseover events.
* The selector parameter filters out the element whose id attribute has a value of four.
* Additional data that will be used by the event handler is passed in as an object literal.
* The event handler uses the event object to display the content of the element the user interacts with,. the
* information from the data that was passed into the function, and the event type, under the list in a white box.
*
* .on(events[, selector][,data],function(e));
* */
