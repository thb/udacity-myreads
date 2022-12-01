# MyReads Project

This the final result of MyReads Project, with all the requirements.

## Install project

Install the project with your prefered package manager

With Yarn
* install all project dependencies with `yarn install`
* start the development server with `yarn start`

Or NPM
* install all project dependencies with `npm install`
* start the development server with `npm start`

Go to `http://localhost:3000` or the port you specified when you started the project

## What You're Getting

You're getting the project with the due requirements. I have not implemented
additionnal features like book ratings or bulk shelving.

You can add a book to a shelve by clicking the '+' button

Use the SEARCH TERMS in the search bar to display books to add
(see SEARCH_TERMS.md)

And then add to the shelve you want.

## Notes about implementation

I'm using Functional Components and React Hooks as I could not
use the previous version of React Router.

I used a `bookshelves` simple array and a myReads object that contains the books with their shelf.
