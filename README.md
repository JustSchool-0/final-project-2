# Movie App with React Context

This movie app is built with React and React Router and uses Context API to
manage global state for movie data. It features a streamlined way to fetch,
display, and add movies with smooth error handling.

## Features

* Global State Management: Utilizes `MovieResourceContext` to manage movie data
  across components, avoiding prop drilling.
* Fetching and Suspense: Movie data is fetched with a custom promise wrapper,
  using Suspense for loading states and ErrorBoundary for fallback handling.
* Adding Movies: Users can add new movies, which are sent to the backend and
  updated in the global context.
* Routing: Includes pages for the movie list, adding a movie, and credits,
  managed through React Router.

## Key Files

* `MovieResourceContext.jsx`: Provides and manages global state with
  `movieResource` and `addMovie` functions.
* `MovieList.jsx` and `MovieData.jsx`: Components that display the list of
  movies.
* `AddMovie.jsx`: Form to add new movies, updating context and backend.
* `ErrorBoundary.jsx`: Catches and displays errors during data fetch.

## Quick Start

* Install dependencies: `npm install`
* Run the app in development mode: `vite dev`
* API Setup: Ensure the API is available at http://localhost:3000/movies

This app demonstrates effective usage of React Context, custom hooks, and
React Router to create a scalable and maintainable movie database.