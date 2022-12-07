import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AddBook from './AddBook'
import BookshelfList from './BookshelfList'
import { useLocalStorage } from './utils'
import * as BooksAPI from './BooksAPI'
import { useEffect } from 'react'

const App = () => {

  const [myReads, setMyReads] = useLocalStorage('myReads', {currentlyReading: [], wantToRead: [], read: []})

  useEffect(() => {
    const _myReads = {currentlyReading: [], wantToRead: [], read: []}
    BooksAPI.getAll().then((results) => {
      results.forEach((book) => {
        _myReads[book.shelf].push(book)
      })
      setMyReads(_myReads)
    })
  })

  const handleAddBook = (book, shelf) => {
    updateBook(book, shelf)
  }

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={
          <BookshelfList
            myReads={myReads}
            onAddBook={handleAddBook}
          />
        } />
        <Route path="/add" element={
          <AddBook onAddBook={handleAddBook} myReads={myReads} />
        } />
      </Routes>
    </div>
  )
}

export default App
