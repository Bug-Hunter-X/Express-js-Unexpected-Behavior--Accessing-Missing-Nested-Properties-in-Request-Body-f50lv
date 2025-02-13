# Express.js Unexpected Behavior: Accessing Missing Nested Properties in Request Body

This repository demonstrates a common issue in Express.js applications when handling request bodies: unexpected behavior when accessing nested properties that might be missing.

## Problem Description
The `bug.js` file showcases a scenario where the server attempts to access a nested property (`data.address.city`) within the request body. If the `address` or `city` property is missing from the request body, the application throws an error and crashes. This is because accessing a non-existent property throws a runtime error.

## Solution
The `bugSolution.js` demonstrates a solution using optional chaining and the nullish coalescing operator (`??`) to safely handle missing properties.  This approach prevents errors by checking for the existence of properties before accessing them and providing a default value if the property is undefined.

## How to reproduce

1. Clone this repo
2. Run `npm install express`
3. Run `node bug.js`
4. Send a POST request to `http://localhost:3000/data` with a JSON body **missing the 'address' or 'city' property**.  Observe the error.
5. Repeat step 3 with `node bugSolution.js` and send the same request. Observe that it does not crash and gracefully handles the missing property.
