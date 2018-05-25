- Authentication is the process of ascertaining that somebody really is who they claim to be.

- Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorised to read.

- HTTP is "Stateless" - requests don't know about each other

- On Github.com or any other website--why don't I have to log in on every page?  If it's stateless, how does it know that I'm logged in?
    - Cookies! Small pieces of data sent from a website in the headers and stored on the computer while browsing.  (show in "edit this cookie" Chrome Extension)
    - Domain Specific - show in different windows

- Add `cookies['variety'] = "chocolate-chip"` in the student show page; just a key-value pair (DON'T GO TO SHOW PAGE YET)

- Add `<%= cookies['variety'] %>` to index page to show cookie.  Go to index page, not there yet.  Then go to show page and back to index page

- Do the same thing with 'sessions' but show in Edit Cookie that it gets encrypted

- Building out sign-in; show on github what happens if you clear all cookies and reload (no longer logged in)
    - Cookies expire

- Create user model in app
    ` rails g model user username `- Authentication is the process of ascertaining that somebody really is who they claim to be.

- Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorised to read.

- HTTP is "Stateless" - requests don't know about each other

- On Github.com or any other website--why don't I have to log in on every page?  If it's stateless, how does it know that I'm logged in?
    - Cookies! Small pieces of data sent from a website in the headers and stored on the computer while browsing.  (show in "edit this cookie" Chrome Extension)
    - Domain Specific - show in different windows

- Add `cookies['variety'] = "chocolate-chip"` in the student show page; just a key-value pair (DON'T GO TO SHOW PAGE YET)

- Add `<%= cookies['variety'] %>` to index page to show cookie.  Go to index page, not there yet.  Then go to show page and back to index page

- Do the same thing with 'sessions' but show in Edit Cookie that it gets encrypted

- Building out sign-in; show on github what happens if you clear all cookies and reload (no longer logged in)
    - Cookies expire

- Create user model in app
    ` rails g model user username `- Authentication is the process of ascertaining that somebody really is who they claim to be.

- Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorised to read.

- HTTP is "Stateless" - requests don't know about each other

- On Github.com or any other website--why don't I have to log in on every page?  If it's stateless, how does it know that I'm logged in?
    - Cookies! Small pieces of data sent from a website in the headers and stored on the computer while browsing.  (show in "edit this cookie" Chrome Extension)
    - Domain Specific - show in different windows

- Add `cookies['variety'] = "chocolate-chip"` in the student show page; just a key-value pair (DON'T GO TO SHOW PAGE YET)

- Add `<%= cookies['variety'] %>` to index page to show cookie.  Go to index page, not there yet.  Then go to show page and back to index page

- Do the same thing with 'sessions' but show in Edit Cookie that it gets encrypted

- Building out sign-in; show on github what happens if you clear all cookies and reload (no longer logged in)
    - Cookies expire

- Create user model in app
    ` rails g model user username `