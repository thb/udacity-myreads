import React, { useState } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AddBook from './AddBook'
import Bookshelves from './Bookshelves'

const BooksApp = () => {

  const [bookshelves, setBookshelves] = useState({
    currentlyReading: { name: 'Currently Reading', books: []},
    wantToRead: { name: 'Want To Read', books: []},
    read: { name: 'Read', books: []}
  })

  let navigate = useNavigate()

  const handleAddBook = (book, bookshelf) => {
    const previousBookshelf = bookshelfOf(book)
    if (previousBookshelf === null) {
      addBook(book, bookshelf)
    } else {
      if (bookshelf === 'none') {
        removeBook(book, previousBookshelf)
      } else if (previousBookshelf !== bookshelf) {
        removeBook(book, previousBookshelf)
        addBook(book, bookshelf)
      }
    }
    navigate('/')
  }

  // adds a book to a bookshelf
  const addBook = (book, bookshelf) => {
    const newList = {}
    newList[bookshelf] = {...bookshelves[bookshelf]}
    newList[bookshelf].books = newList[bookshelf].books.concat([book])
    setBookshelves(currentBookshelves => ({
      ...currentBookshelves,
      ...newList
    }))
  }

  // removes a book from a bookshelf
  const removeBook = (book, bookshelf) => {
    const newList = {}
    newList[bookshelf] = {...bookshelves[bookshelf]}
    newList[bookshelf].books = bookshelves[bookshelf].books.filter(currentBook => currentBook.id !== book.id )
    setBookshelves(currentBookshelves => ({
      ...currentBookshelves,
      ...newList
    }))
  }

  // returns the bookshelf of a book
  const bookshelfOf = (book) => {
    let bookshelf = null;
    Object.entries(bookshelves).forEach(([key, value]) => {
      let found = value.books.find(currentBook => currentBook.id === book.id)
      if (found) {
        bookshelf = key
      }
    })
    return bookshelf
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={
          <Bookshelves
            bookshelves={bookshelves}
            onAddBook={handleAddBook}
          />
        } />
        <Route path="/add" element={
          <AddBook 
            onAddBook={handleAddBook}
            bookshelfOf={bookshelfOf}
          />}
        />
      </Routes>
    </div>
  )
}

export default BooksApp
