import {readable} from 'svelte/store';

let count = 0;

// set: provided by svelte to update value of the store
export const timer = readable(0, (set) => {
    const interval = setInterval(() => {
        count++;
        set(count);
    }, 1000);

    // function called automatically by svelte when the store is not needed anymore
    return () => {
        clearInterval(interval);
    }
} );