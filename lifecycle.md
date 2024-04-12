# Understanding the life cycle of the App component.
This outlines what happens when the user loads the page, before any other interaction with the DOM (ei clicking on a dropdown). 

There are much simpler ways to achieve what we're trying to do here, but the purpose of doing it the way we are below is to better understand how useState and useEffect work together. This isn't a _best practices_ lesson, but rather a lesson that dives deeper into how a `useState` setter function triggers a component to rerender and how `useEffect` responds to this. 

## Initial render
  1. Declare our state and each sate receives it's initial value
  2. `console.log("I log with every render")`
  3.1. useEffect #1 runs
     1. `console.log("I only log on the initial render")`
     2. `getProducts` -> this is asynchronous, therefore `setAllProducts` wont happen until the data gets back. 
     3. `getProductTypes` -> this is asynchronous, therefore `setAllProducts` wont happen until the data gets back.  
  3.2. useEffect #2 runs
    1. `console.log("I log on initial render AND whenever userTypeSelection changes OR whenever allProducts changes")`
    2. if statement will evaluate to true because `userTypeSelection` holds its initial value of `0`
    4. call `setFilteredProducts` and pass it the value of `allProducts` which holds its initial value of `[]`
  1. Render the JSX (all state still has initial values)
     1. map `productTypes` which holds its initial value of `[]`
     2. map `filteredProducts` which holds its initial value of `[]`
   
## `filteredProducts` state changed (step 3.2 -> 4 above) and triggered a RERENDER of the component.
 1. `console.log("I log with every render")`
 2. No useEffects run

## all of our products came back from the db and we called `setAllProducts` (step 3.1 -> 2), therefore triggering a RERENDER of the component
1. `console.log("I log with every render")`
2. `allProducts` state changed, therefore useEffect #2 runs
   1. `console.log("I log on initial render AND whenever userTypeSelection changes OR whenever allProducts changes")`
   2. if statement will evaluate to true because `userTypeSelection` still holds its initial value of `0`
   4. call `setFilteredProducts` and pass it the value of `allProducts` which contains the array of products from the database

## all of our product types came back from the db and we called `setAllProductsTypes` (step 3.1 -> 3), therefor triggering a RERENDER of the component
  1. `console.log("I log with every render")`
  2. No useEffects run
  3. Rerender the JSX with the new value of `allProductTypes` which is now our populated array of product types from the database

## `setFilteredProducts` was called (step 2 -> 4 when `setAllProducts` triggered a rerender), therefore triggering a RERENDER of the component.
 1. `console.log("I log with every render")`
 1. No useEffects run
 2. Render JSX with the new value of `filteredProducts`, which finally contains all the products