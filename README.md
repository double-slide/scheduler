# Interview Scheduler

A project for Lighthouse Labs Web Dev program using React.


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```




# Scheduler Project
Scheduler is a

## Final Product
!["Example page"](https://github.com/double-slide/public/images/screen-view1.png "Example page")
!["Example page with new entry"](https://github.com/double-slide/public/images/screen-view2.png "Example page with new entry")

## Getting Started
1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. With the server running, use your browser to navigate to `localhost:8080/`[^1]

## Dependencies
- Express
- Node
- Bodyparser
- Chance

## Responsive Design
- The app uses media queries to change the layout depend on page window size
- The character counter counts down as the user types their tweet
- The character counter becomes red if the character count is exceeded (and counter displays negative value)
- Tweet cards are shadowed and slightly highlighted when the user hovers over them
- Buttons on each tweet card for Flag, Retweet, and Like are highlighted red when the user hovers over them
- The tweet submission button shows a colorful border when the user hovers over it

## Functionality
- A user can scroll through existing tweets, which are displayed in reverse chronological order
- A user can create a new post by entering text and clicking "Tweet"
- The tweet is then displayed (using a partial page post back)
- Each tweet includes a user avatar, user name, user handle, the tweet content, and time elapsed since the tweet was posted
- An error message slides down if the user attempts to submit an empty tweet
- An error message slides down if the user attempts to submit a tweet exceeding the character limit 
- Error messages slide back up (out of view) upon successful tweet submission or full page refresh

## Security
- App is fortified against cross site scripting using secure input handling by "escaping text" [^2]

## Future Objectives
1. Add persistant data storage for user data
2. Add user accounts with login/logout functionality [^3]

[^1]: Currently only set-up for local running. Check back in future for the fully-hosted version
[^2]: For more info on cross site scripting, please [refer here] (https://en.wikipedia.org/wiki/Cross-site_scripting)
[^3]: Check back in future for persistant database functionality and user accounts