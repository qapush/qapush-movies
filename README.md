# Personal Movies Database

- [General info](#general-info)
- [Technologies](#technologies)

## General info

This project I've made as my front-end path open ended project on Codecademy. It's a single page web application showing list of movies from a small [Notion database](https://www.notion.so/ac175d0f2a274aba8d750f0426369b43?pvs=21) I am maintaining.

Besides Notion API app is utilising TMDB API on movies' subpages. App is deployed on Netlify and takes advantage of it's Serverless Functions to handle some back-end like for example Nodemailer and also to hide my API keys.

## Technologies

- App is build with [React](https://react.dev)
- [Redux](https://redux.js.org) for state management
- [React Router](https://reactrouter.com/en/main) for client side routing
- Styling is made via plain css modules at this moment
- [React skeleton](https://www.npmjs.com/package/react-loading-skeleton) for displaying loading states
- [Lottie](https://lottiefiles.com) for dark/light mode switcher animation
- Deployment on [Netlify](https://www.netlify.com) from this repository
- APIs: [Notion](https://developers.notion.com), [TMDB](https://developer.themoviedb.org/reference/intro/getting-started)
- [Netlify Serverless Functions](https://www.netlify.com/platform/core/functions/) for actual communication with APIs and sending emails via Nodemailer
- [Nodemailer](https://nodemailer.com) for sending movies' recommendations via email
