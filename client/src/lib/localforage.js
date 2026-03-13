// src/lib/localforage.js
import localforage from 'localforage';

// Optionally configure store name and driver
localforage.config({
  name: 'HackathonApp',
  storeName: 'keyval_store', // IndexedDB object store name
});

// Usage examples (wrap these in exported functions if desired)
export const setItem = (key, value) => localforage.setItem(key, value);
export const getItem = (key) => localforage.getItem(key);
export const removeItem = (key) => localforage.removeItem(key);

export default localforage;
