# React Boilerplate

A starter repo for the ACA react exercises.

## Installation

Run `yarn` or `npm install` from root directory.


# Exercise

We are going to rebuild a bootstrap example page using the `react-bootstrap`
library.

Rebuild this example page here only using the react components from the
`react-bootstrap` library:

[offcanvas example](http://getbootstrap.com/examples/offcanvas/)

## The application needs to have the following specifications

- No hardcoded text values. Everything should be stored in variables and in the react state.
- Use functional components whenever possible

### Extending the functionality

- Add a button to the bottom of the page that opens a modal window with an input form to add a teaser
- When submitting the form, the modal should close and the teaser should be added to the end of the list
- Add a remove button to each teaser which should remove the selected teaser

### Extensions (optional)

- Use the builtin JSON server to load the teasers from the backend (Like we did with the contact list and `axios`).

Note: The URL is always `http://localhost:4000/propertyname`. Check the file `db.json` to get the correct REST URLs.

- Store added teasers in the backend
- Remove the teasers from the backend
- Extend the `db.json` file so that it can also store the links of the menu on the side, then load the menu via REST API calls.
- Add a remove and add functionality to the menu items
