# Vue SSR State pullution 

## This example demonstrates state pollution if application state (vuex) is not properly set up

## Steps
1. `npm install`
2. `npm run dev`
3. Access localhost:8080/user - you will see Date object against users property
4. Now, open localhost:8080/item - you will see Date object set for both the propeties, item as well as users

## what to expect
On each reload of /item the object for users should be empty and vice-versa

## why is this happening?
Because we are using modules to assemble our store and each module is in a separate .js file.
This .js only exports the store object and each subsequent refresh/load does not reloads the object.

## How to fix it
We should instead return a function from individual modules and call those functions to assemble the store.
something like this: https://forum.vuejs.org/t/debugging-state-pollution-with-the-new-behaviour-of-vue-2-3-ssr/11724/4