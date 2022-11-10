# STARS WARS APP - EXPO 🤖

### Intro

Application developed with Expo (React Native) and TypeScript, to consume and display the results of the swapi public [API](https://swapi.dev).

### Stack Libraries 📚

- [Axios](https://axios-http.com/docs/intro): It's used for HTTP requests to swapi
- [React Query](https://tanstack.com/query/v4/docs/overview): It's main function is to improve the state of the application with HTTP responses from axios, managing cache and improving speed.
- [React Navigation](https://reactnavigation.org/): It's used to manage the navigation of the app between screens.
- [React Native Shimmer Place Holder](https://www.npmjs.com/package/react-native-shimmer-placeholder): Its main use is to create loading components

### Next Libraries to implement ⎘

- [TailwindCSS]() 🌿

### Intructions to run 🚀

Please make sure you use [`node >= 18.0.0`](https://nodejs.org/en/) and have [`expo`](https://docs.expo.dev/get-started/installation/) installed.

Clone repositorie:
`git clone git@github.com:israel-dv/star-wars-rn.git && cd swapi-app`
and run the project
` yarn expo`

**Works on iOS 🍏 and Android🤖**

### Features 🛠️

- The Searcher: People search works every time you type a letter. React Query maintains a cache for each query you type, so if you search for the same word twice or more, react query takes its cache and avoids calling the endpoint.
- Pagination: pagination is achieved when the end of the last element of the list is reached, automatically making the request to the second page. If your internet is slow you will see a loading component at the bottom of the list, otherwise it will load the following characters. Remember, react query keeps its cache for each request, this is the magic of this library

### Demo 📹
