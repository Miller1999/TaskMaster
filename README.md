# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot
#### Desktop
![desktop](https://github.com/Miller1999/TaskMaster/assets/22383830/5cb3474f-71f0-429b-b145-96715c23ad02)
#### Mobile
![mobile](https://github.com/Miller1999/TaskMaster/assets/22383830/2b6db43b-31a1-4408-be40-9377060f5d74)


### Links

- Solution URL: [Repository](https://github.com/Miller1999/TaskMaster)
- Live Site URL: [Task Master](https://taskmaster-pi-mocha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - React framework
- [SASS](https://sass-lang.com/) - For styles

### What I learned

I've picked up a ton by playing around with local storage, messing with hooks, and getting the hang of drag-and-drop. About 10 months back, I tackled a similar project, but it was missing cool stuff like drag-and-drop and theme switching.

To see how you can add code snippets, see below:

```js
import { useState, useEffect } from "react";

/**
 * Custom hook for managing data in localStorage.
 * @param {string} name - The key under which the data will be stored in localStorage.
 * @param {any} initialValue - The initial value to be stored in localStorage if no value is found under the specified key.
 * @returns {object} An object containing the current value stored in localStorage and a function to update it.
 */
function useLocalStorage(name, initialValue) {
	// State variable to hold the current value stored in localStorage
	const [item, setItem] = useState(initialValue);

	// useEffect hook to load data from localStorage when the component mounts
	useEffect(() => {
		try {
			// Attempt to retrieve data from localStorage using the provided key
			const localStorageItem = localStorage.getItem(name);
			let parsedItem;

			// If no data is found under the specified key, set the initial value and store it in localStorage
			if (!localStorageItem) {
				localStorage.setItem(name, JSON.stringify(initialValue));
				parsedItem = initialValue;
			} else {
				// If data is found, parse it and update the state with the retrieved value
				parsedItem = JSON.parse(localStorageItem);
				setItem(parsedItem);
			}
		} catch (error) {
			// Log any errors that occur during the process
			console.error("Error accessing localStorage:", error);
		}
	}, []); // This effect runs only once, when the component mounts

	// Function to update the value stored in localStorage
	const saveItem = (newItem) => {
		localStorage.setItem(name, JSON.stringify(newItem)); // Store the new value in localStorage
		setItem(newItem); // Update the state with the new value
	};

	// Return an object containing the current value stored in localStorage and the function to update it
	return { item, saveItem };
}

export default useLocalStorage;

```

### Continued development

I've really delved into custom hooks lately, and I'm pumped to incorporate them heavily in this project. Plus, I'm thinking big—I want to turn this app into a full-stack powerhouse. That means setting up a database and building out the backend from scratch.

### Useful resources

- [Drag and Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) - This helped me for work in Drag and Drop 

## Author

- Website - [Miller Arias](https://portafolio-miller-arias.vercel.app)
- Frontend Mentor - [@Miller1999](https://www.frontendmentor.io/profile/Miller1999)
- Twitter - [@miller_arias](https://twitter.com/miller_arias)
- Github - [@Miller1999](https://github.com/Miller1999)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

