# Personal Movies Database

- [General info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [Room for improvement](#room-for-improvement)

## General info

Live: https://qapush-movies.netlify.app

This project I've made as my front-end path open ended project on Codecademy. It's a single page web application showing list of movies from a small [Notion database](https://www.notion.so/ac175d0f2a274aba8d750f0426369b43?pvs=21) I am maintaining.

Besides Notion API app is utilising TMDB API on movies' subpages. App is deployed on Netlify and takes advantage of it's Serverless Functions to handle some back-end like for example Nodemailer and also to hide my API keys.

## Technologies

- App is build with [React](https://react.dev)
- [Redux](https://redux.js.org) is used for state management
- [React Router](https://reactrouter.com/en/main) for client side routing
- Styling is made via plain css modules at this moment
- [React skeleton](https://www.npmjs.com/package/react-loading-skeleton) for displaying loading states
- [Lottie](https://lottiefiles.com) for dark/light mode switcher animation
- Deployment on [Netlify](https://www.netlify.com) from this repository
- APIs: [Notion](https://developers.notion.com), [TMDB](https://developer.themoviedb.org/reference/intro/getting-started)
- [Netlify Serverless Functions](https://www.netlify.com/platform/core/functions/) for actual communication with APIs and sending emails via Nodemailer
- [Nodemailer](https://nodemailer.com) for sending movies' recommendations via email

## Features

- Initial view of the app uses data fetched from the Notion database to display list of movies to the user. Every movie item is represented in form of a card with poster, title, year and list of genres.
- User can filter displayed elements by choosing between different genres and tags. These filters combine so too many filters selected results in no items displayed at all. According message is displayed to the user in this case.
- User can navigate to every movie's subpage showing related image and a description. This data is a result of querying the TMDB API with a selected movie title and year.
- User can fill a form with a film or serial recommendation on a corresponding page. Submitted data are sent via email using Serverless Functions and Nodemailer
- User can toggle between dark and light appearance modes. During the first visit the app sets appearance mode according to the current browser's settings. Appearance mode is saved to the local storage on every change so it keeps on next visit.

## Room for improvement

- Better code organisation. I've been changing my approach to different functionalities several times and the code organisation suffered. App's elements definitely could be organised much more efficiently.
- Using normalised state. I've discovered this concept after I've finished working on my implementation of the app's state. However I believe that implementing it could help keep things cleaner.
- Display more data on movie's subpage - director, genres, cast.
- Create a Notion database for submitted recommendations and display list of recommendations in the app.
- Style the application with a css framework.
- Remake the app with Next.js. Try to save the movies' images as static copies and use them on subpages and as a meta preview images.
