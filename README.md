# sticky-nav

## the aim of this project is to recreate the sticky nav menu from the [following tutorial](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prop_element_offsettop_sticky).

 The scroll position is the read-only Window property scrollY; it returns the number of pixels the document is currently scrolled along the vertical axis (that is, up or down) with a value of 0.0, indicating that the top edge of the Document is currently aligned with the top edge of the window's content area. This property's value will then be compared with that of the offsetTop property, which returns the top position (in pixels) relative to the parent.  If no offset parent exists, the offset is relative to the document body. This is the case here, as the offset is the navbar, whose parent is the document body. 
 so we are comparing: 
 - the position of navbar compared to document body in px (in the variable sticky)
 to:
 - the scroll position from the top of the document body (scrollY property, which also returns a number in px)

 When scrolling distance exceeds the height of the navbar, a new stickyCssClass is created and added to the navbar. This stickyCssClass sets the top to 0 and the position to fixed.

 I did not understand why the content margin top needs to go down by 60 pixels. and what the following code does:

 `.stickyCssClass + .content {
    padding-top: 60px;
}`
 
 To recreate this code, i removed code from css line 37-41 and added the elements separately if/else statement in the JS on line 15. This enabled me to test how stickyCssClass reacts vs how the content class reacts when given a margintop style. This helped me understand the following:
 
  Only the content class's padding top changes. This is because the above code is an adjacent (aka next) sibling combinator. 
  
  The next-sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element. 
  
  The twist here is, that because stickyCssClass is sometimes present, sometimes not, the sibling combinator behaves like an if-else statement, executing and not executing depending on the presence of stickyCssClass. That is why I was able to recreate it in the JS if-else statement. 
  `

 

    if(window.scrollY>=sticky){
            navbar.classList.add ("stickyCssClass");
    //avoid jump scroll of content by adding a margin top. 
    //Index always to be defined
         document.getElementsByClassName("content")[0].style.paddingTop = "60px";
        document.getElementsByID("contentInQuestion").style.paddingTop = "60px";
    }
    else{
        navbar.classList.remove("stickyCssClass");
        document.getElementsByClassName("content")[0].style.paddingTop = "16px";`
  
  The content element's style is manipulated by JS and it is important that when the stickyCssClass is not present, the content element's **padding is reset to its original** 16px (this would otherwise be done  by the  sibling combinator).

  **Conclusion**

  The next sibling combinator would have been easier to use and is more elegant code; however recreating it as above helped me understand how it works.