$(function(){

    $('li').on('click', function(e) {
        $('li span').remove();

        var date;
        date = new Date();
        date.setTime(e.timeStamp);

        var clicked;
        clicked = date.toDateString();

        $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
    });

});

/*
* Any <span> elements that already exist inside the <li> elements are removed.
* A new Date object is created, and its time is set to the time at which the event was clicked.
* The time the event was clicked is then converted to a date that can be read.
* The date that the list item was clicked is written into the list item (along with the type of event that was used).
* */