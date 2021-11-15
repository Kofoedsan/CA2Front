# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Preconditions

In order to use this code, you should have a vidual studio or similar IDE to view the code and node.js to test the code locally.

## Getting Started

### Fork this git.

Fork this git.
open a terminal in the project folder
Run the command:

npm install to install dependencies
npm start to start a local testing environment

### The project includes:

react
react-router-dom
react-bootstrap
npm uuid

### How to use.

Add path(s) and functions to App.js.
For each navlink add a route with an element pointing to a function or value.
Create new functions/methods in subfiles of the extension .jsx in the components folder.

The Covid & Recipies.jsx are examples of fetching from a REST api & rendering them on screen using the above method.

### Deploying

Open a terminal and run the command:

npm run-script build

The output will be in the "build" folder of your current directory.

Copy the content of the build folder to nginx or similar on your server.
