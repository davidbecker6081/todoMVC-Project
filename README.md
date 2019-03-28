## Instructions

- Familiarize yourself with all of the details in the 'familiarization' section
- Within the next 2 weeks, attempt to build a Todo app that meets the user requirements and technical constraints below
- After your initial familiarization, once you start actually setting up your environment and building the app, keep track of the time you spend, and the challenges you faced
- Try to be reasonably detailed when logging your time, or any thoughts that seem relevant as you work through things, so we can discuss them later and decide what to focus on
- Timebox your efforts
    - break it up however you like, but no more than about 8 hours total
    - if you don't completely finish in 8 hours, that will still be enough to gauge how well the project is going
- Share your project and your notes with me

## Familiarization

- Review the functionality of the TodoMVC.com example: http://todomvc.com/examples/react
- Review the Functional Acceptance Criteria
- Review the UI Acceptance Criteria
- Review the Technical Acceptance Criteria
- Review Redux action creators, reducers, store, middleware if you haven't used them recently
- If you want to see how I approached this project myself, check out https://github.com/mcondon/tp-todo-app

## Functional Acceptance Criteria

This app is a clone of the functionality from http://todomvc.com, without reusing any of their specific code examples or tutorials, and with your own CSS interpretation

- create todos
    - app should display a text input field and a list of todos
    - todos are listed in the order created
    - typing into the text input field and hitting enter should create a new todo
    - should not create a new todo if input is empty or whitespace
- delete todo
    - hovering over a todo should display a delete icon
    - clicking on the delete icon should delete the todo
- complete todo
    - each todo should have a checkbox icon
    - clicking on the checkbox icon should toggle completion state on or off
    - completed todos should display a checked checkbox, and strikethrough text
    - uncompleted todos should display an unchecked checkbox, and normal text
- edit todo
    - double-clicking on a todo should display an editable text field
    - typing in the text field and hitting enter should update the todo text
    - removing all of the text, or typing only whitespace, and hitting enter, should delete the todo
    - hitting the escape key should cancel the edits
- toggle all todos
    - header should contain an icon to toggle all todos
    - clicking on the icon, if one or more todos are incomplete, should mark them all complete
    - click on the icon, if all todos are complete, should mark them all incomplete
- incomplete count
    - app should display an 'x items remaining' count of incomplete todos
- clear completed todos
    - app should have a 'clear completed' button
    - clicking the 'clear completed' button should delete completed todos
- filter todos
    - app should have three filter options: all, active, complete
    - selecting 'all' should display all todos
    - selecting 'active' should display only incomplete todos
    - selecting 'complete' should display only complete todos
- remember state
    - when I refresh the browser, the app should remember my list of todos, the completion status of each todo, and the selected filter option
    - hint: use a localStorage middleware

## UI Acceptance Criteria
- UI should be reasonably clean, but do not spend much effort on design
- App does not need to exactly match the TodoMVC styles

## Technical Acceptance Criteria

**Project Setup**
- Must start from a blank project (i.e. don't build on top of Mars app, or any existing side project)
- May use any preferred starter kit or boilerplate
- May use some type of sandbox to build UI components
- Should use github or other git repo

**React**
- Must use React
- Must use PropTypes
- May use default props
- May use classes or functional components
- May use JSX
- May use router or not (todomvc uses router for filters - optional)

**Redux**
- Must thoroughly unit test reducers
- Must use plain JS objects for redux state and reducers
- Must not mutate objects in reducers
- Should write reducers as plain old functions, then integrate them into redux

**CSS**
- Must use CSS variables for color and font styles
- Must use BEM naming for most CSS classes
- Must not use an existing CSS framework