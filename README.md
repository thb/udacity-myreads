# MyReads Project

This the final result of MyReads Project, with all the requirements.

## TL;DR

To get started developing right away:

With Yarn
* install all project dependencies with `yarn install`
* start the development server with `yarn start`

Or NPM
* install all project dependencies with `npm install`
* start the development server with `npm start`

Go to `http://localhost:3000` or the port you specified when you started the project

## What You're Getting

You're getting the project with the due requirements. Nothing more, I have not implemented
additionnal features like book ratings or bulk shelving.

You can add a book to a shelve by clicking sur '+' button

Use the SEARCH TERMS in the search bar to display books to add

And then add to the shelve you want.

## Notes about implementation

I'm using Functional Components only and React Hooks as I could not
use the previous version of React Router.

I used a `bookshelves` object in the state at the root of the App.

It is actually composed of 3 collections :

```
const [bookshelves, setBookshelves] = useState({
    currentlyReading: { name: 'Currently Reading', books: []},
    wantToRead: { name: 'Want To Read', books: []},
    read: { name: 'Read', books: []}
  })
```

I'm not sure about the performance of the AddBook component because
each book has to look for its bookshelf in the collection.

It would have been faster to execute to pass directly the books that
are in a bookkshelf to that component but it would have required more
code.
