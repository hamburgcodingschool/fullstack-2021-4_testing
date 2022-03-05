# Assignment 1: Unit Testing
> Remember Unit Testing is used to verify that individual and isolated parts (i.e. units) of our application work as expected. Therefore we will start by testing the utils functions we use throughout the application: 

## 1.1
#### Setting things up: 

- [ ] Run `npm install` in the project directory to install all dependencies 
- [ ] Create new directory `__tests__` in the `utils` directory 
- [ ] Create your first test file called `Filter.test.js` in the newly created `__tests__` directory 

#### Test your first function: 

- [ ] import the `filterPinnedNotes` utility function from the `Filter` module in the directory above 
- [ ] Write your first test to ensure that the `filterPinnedNotes` function returns all pinned notes in an array of notes 
	- [ ] Hint: You need to create the notes you pass to the function manually in your test. An exemplary note might look like this:
	`{ id: 1, text: “Test Note”, pinned: true } `
- [ ] Run `npm run test:unit` and make sure your first test passes 
	- [ ] Take a moment to celebrate this achievement 🎉 🙌
- [ ] Write another test to ensure `filterPinnedNotes` returns an empty array when being called without any notes

#### Go ahead test the rest of the module: 
- [ ] import removeNoteById from the Filter module
- [ ] Write a test to ensure that the note with the given id is deleted from the array 
- [ ] Write a test to ensure that an empty array is returned when no notes are given import filterByText from the Filter module
- [ ] Write a test to ensure that the note with the given id is deleted from the array
- [ ] Write a test to ensure that an empty array is returned when no notes are given 

## 1.2
#### Now we will go over the second aspect of Unit Testing: testing components in isolation: 

- [ ] In the components directory you will find `__test__` directory. Create a new file `Note.test.js` inside of it 
- [ ] In your newly created component test file please import Vitest and the Note component which lies in the directory above 
	- [ ] Hint: You can peek in the other component test files in this directory to get you started 
- [ ] Write a test that renders a note and assert that it has an element with note- content testId that has the correct textContent 
	- [ ] Also assert that the elements with the testIds delete-note and pin-note are defined 
- [ ] Make sure you call cleanup after each test
- [ ] Write a test that renders a note, clicks the delete button and asserts that 
onDeleteClick handler has been called
- [ ] Write a test that renders a note clicks the pin button and asserts that the 
onPinClick handler has been called
- [ ] Write a test that renders a pinned note clicks the unpin button and asserts that the onPinClick handler has been called 



