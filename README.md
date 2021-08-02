

________# TDD React Checkpoint - Build Server Backed GMDB Front End

## Objectives
    - Write user stories based off of feature requests and designs
    - Test Drive a connected CRUD React app using the relevant testing libraries (UI tests: Cypress, Unit tests/mocks: Jest)

## Background
You are creating your very own movie database (definitely not IMDB). You have been given some designs and feature requests of what a Minimum Viable Product should look like, and it's your responsibility to create your own user stories and work flow.

### Features:
- Browse movies anonymously
- Look at a specific movie with details and reviews
- Search movies
- Post a review on a movie
- Register a new user

### Designs:
- Browsing Movies
![View for browsing movies](images/Browse-Movies.png)

- Movie Details and Reviews
![movie details with corresponding review section](images/Movie-Detail-and-Post-Review.png) 

- Searching for movies
![filtered movie list view based on search criteria](images/Search.png)

- Login
![view of a login screen](images/Login.png)

## Acceptance Criteria
- All code is produced through TDD with a pair
- UI tests are performed using Cypress
- All functionality of the application is developed using component based architecture in React
- All persistent data is received and processed through network requests to the back end service
- The application is structured to consume data according to the structure provided by the back end service

## Instructions

### Server Setup:
- fork and clone this repo using git
- to install the back end service and dependencies, run `npm install` in the root of the `server/` directory
- To start the server, run `npm run start`
- The server will be available at `http://localhost:3001` 

#### Available Service Endpoints
- `GET movies` - returns a list of all movies
- `GET movies/:id` - returns details of a specific movie
- `GET movies?search=<query>` - returns a list of movies filtered on titles matching the given query
- `GET reviews/:movieId` - returns all reviews for a given movie
- `POST reviews` - creates a new review, returns success status in JSON response 
- `POST register` - creates a new user, returns success status in JSON response

### Front End Setup:
In a new directory
- run `npx create-react-app gmdb-frontend` to generate a new project
- In your command line, navigate to the generated project
- to install Cypress, run `npm install --save-dev cypress @testing-library/cypress`
- install and setup React Testing Library [following this link](https://testing-library.com/docs/react-testing-library/intro/)
- to test your app, run `npm run test`
- to run your app, run `npm run start`
- - The server will be available at `http://localhost:3000` 
___________________________________________________________________________________________________________________________________________________________________________
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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
