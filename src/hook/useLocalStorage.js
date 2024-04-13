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
