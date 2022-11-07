# JS - DOM and Events Fundamentals

## DOM(Documnet Object Model): DOM isn't part of JavaScript, It's an API(of Web APIs) that the browser gives us and we can access it through JavaScript.

## DOM tools :

- addEventListener('event', function, useCapture) : The addEventListener() method attaches an event handler to an element. [event & function is required but useCapture is optional]
- .querySelector('#id' or '.class' or 'tag') : The querySelector() method returns the first element that matches a CSS selector.
- .querySelectorAll('#id' or '.class' or 'tag') : The querySelectorAll() method returns all elements that matches a CSS selector(s) and a NodeList(is a list (collection) of nodes extracted from a document.).
- .textContent : The textContent property sets or returns the text content of the specified node, and all its descendants.
- .value : The value property sets or returns the value of an attribute.
- .style : The Style object represents an individual style statement.
- .classList : The classList property returns the CSS classnames of an element and a DOMTokenList(is a set of space separated tokens).
  - .add() : Adds one or more tokens to the list
  - .contains() : Returns true if the list contains a class
  - .remove() : Removes one or more tokens from the list
  - .toggle() : Toggles between tokens in the list
- KeyboardEvent : Events that occur when user presses a key on the keyboard, belongs to the KeyboardEvent Object.[onkeydown - onkeypress - onkeyup] ['keydown' - 'keypress' - 'keyup']

## DOM Projects

- [Game - Guess my number](https://github.com/MostafaFotouhi/Game---guess-my-number)
- [Game - Modal window](https://github.com/MostafaFotouhi/Modal-window)
