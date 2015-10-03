ANIMATING CSS PROPERTIES

The .animate() method allows you to create some of your own effects and animations by changing CSS properties.

.animate({
 // Styles you want to change
 } [,speed][,easing][,complete]);
 
 Speed indicates the duration of the animation in milliseconds. It also takes the keywords (slow and fast).
 
 Easing can have two values.
    Linear - ths speed of the animation is uniform.
    Swing - Speeds up in the middle of the transition and is slower at the start and end.
 
 Complete is used to call a function that should run when the animation has finished.  This is known as a callback function.
    
 
 Examples of jQuery Equivalents of CSS Property Names
    
    bottom
    left
    right
    top
    
    backgroundPositionX
    backgroundPositionY
    
    height
    width
    maxHeight
    minHeight
    maxWidth
    minWidth
    
    margin
    marginBottom
    marginLeft
    marginRight
    marginTop
    
    outlineWidth
    padding
    paddingBottom
    paddingLeft
    paddingRight
    paddingTop
    
    fontSize
    letterSpacing
    wordSpacing
    lineHeight
    textIndent
    
    borderRadius
    borderWidth
    borderBottomWidth
    borderLeftWidth
    borderTopWidth
    borderSpacing