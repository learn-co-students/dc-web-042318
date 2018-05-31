HTML - the skeleton of the page making up its structure
CSS - the styling & appearance of the page

Show http://csszengarden.com/ and its HTML with view source.  Show how different style sheets drastically change the markup but the HTML is the same

Why should we care?
http://art.yale.edu/  Terrible design.  I’m not giving them my credit card or going to Yale Art School.  Not responsive, define and show https://www.theatlantic.com/notes/ footer for example.

Show simple HTML self page, then one with Bootstrap included (Semantic also a good option)


Demo external, internal and inline styling.  Promote external. External vs internal precedence is whichever comes first.  Inline takes precedence over them.  

Intro to classes and IDs
    Add .greybox to stylesheet and class to HTML


Show tv shows page

    Link to style sheet
    <link rel="stylesheet" href="css/tv_styles.css">
    make <li> elements be green

    What if we just wanted to make the good ones green and the bad ones red?
could add class to each element
or could add class to ul and select lis under (show)

Add new list without attributes.  Add li tag to make things blue.  Put it at the top of the style sheet.  Why don’t they all turn blue?  (Incorrect answer:  order of code.  Correct answer:  Specificity and precedence.)  
Specificity
Type -> Class -> ID.  Within a given category, things can be made more specific. Show how li color blue  is overwritten in the inspector
 Talk about !important and why it shouldn’t be used

Show how to add bootstrap and add a nav bar.  Multiple stylesheets OK.  Multiple classes on an element OK
