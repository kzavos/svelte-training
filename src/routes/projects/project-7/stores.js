import { writable } from "svelte/store";
import { readable } from "svelte/store";

export const count = writable(0);

export const time = readable(new Date(), function start(set) {
    // set up code here
    const interval = setInterval(() => {
        set(new date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    }
})