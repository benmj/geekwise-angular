Write a todo list in JSfiddle using only core Javascript functions and the browser's API (don't use a library like jQuery, Angular, etc).

The application should have the following:

- an input box where the user can add a new "Todo"
- A button that submits the text from the input and adds the todo item to your list of todos
- The list of todos should be output to the user as an HTML list (`<ul>` filled with `<li>` tags)
- clicking the todo item marks it as done
    - it's up to you to determine what this looks like. How should the user get feedback to know that something happened? How can the user see old todos?

Extra (ways to trick this sucker out)

- create a button the clears completed todos from the list
- create a different button that sorts the list alphabetically
- create yet another button that sorts the list so all of the uncompleted tasks are at the top and all the completed tasks are at the bottom (but not removed)
- clicking on an item lets the user edit it (you determine what the interface looks like)

## Gotcha's/Hints

We were having some issues with JSFiddle throwing errors and saying pieces of our Javascript were undefined. On the left sidebar under "Frameworks and Extensions," try toggling between different options on the second `<select>` box -- if you have issues.