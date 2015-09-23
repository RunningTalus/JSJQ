$(function() {
    var $listText;
    $listText = $('ul').text(); /* The selector returns the <ul> element. The .text() method gets the text from all of the <ul> element's children. */
    $('ul').append('<p>' + $listText + '</p.'); /* The text() content from the <ul> child elements is then appended to the existing <ul> children in a <p> tag. */
});


