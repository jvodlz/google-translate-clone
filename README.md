# Google translate clone

This project was based on a tutorial to learn how to use APIs in React and NodeJS. Modifications have been made to accomodate a different API.

## What does it do?

- Allow users to enter a text to translate from one language to another
- Allows language selection from a list of languages 
- Swap languages e.g. English -> French, becomes French -> English
- Provide a quick clear of the text boxes
- Translates text after interacting with a button to limit API calls (keeps our wallet happy)

## Pre-requisites
A [RapidAPI](https://rapidapi.com) account will be required to access the API. Access to the RapidAPI key will be provided to use the [Google Translate API](https://rapidapi.com/googlecloud/api/google-translate1)

## What did I learn?
- More familiarity using JavaScript / React syntax and React hooks
    - Spread operator
    - `useState`
    - `useEffect`
    - etc.
- Make HTTP requests with Axios    
- Debug Axios errors

## Future Improvements
- UI Design to make better use of whitespace
- Add a Detect Language option for the text to translate box
- Use express, cors, nodemon, and dotenv to handle some backend implementations
