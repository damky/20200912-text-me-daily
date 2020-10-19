import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      // console.log(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      // allow value to be function
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // save state
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}