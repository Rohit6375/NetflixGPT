# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Netflix GPT (what we did)
- Create react app using vite
- Configured TailwindCSS
- Header
- Routing of app
- Login form
- SignUp form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying app to production
- Implement sign in user api
- CREATED REDUX STORE WITH USERSLICE
- Implemented sign out
- updated profile api call
- Fetch Movies from  
- BugFix: sign up user displayName and profile picture update
- BugFix: if the user is not logged in redirect /browse to login page and vice-versa
- unsubscribed to the onauthstatechange callback
- Register TMDB API & create an app & get access token
- Get Data from TMDB now plyaing movie list api
- Custom Hook for nowplayingmovies
- create movie slice
- update store with movies data
- planning for main container and secondary container
- fetch data for trailer video
- update store with trailer video data
- Embeded youtube video and made it autoplay and mute
- tailwind classes to make main container look awesome
- Build Secondary Component
- Build Movie list
- build movie card
- TMDB Image cdn url
- made browse page amazing with tailwind css
- custom hooks for movie list categories

# FEATURES
- Login/Sign up
  - sign in/ sign up form
  - redirect to browse page

- Browse (AFTER AUTHENTICATION)
     - Header
     - main movie
         - trailer in background
         - title and description
         - Movie suggestions
           - movielist * N

- NetflixGPT
   - Search Bar
   - Movie Suggestion