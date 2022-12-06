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
    BooksAPI.getAll().then((results) => {
      const _myReads = {currentlyReading: [], wantToRead: [], read: []}
      results.forEach((book) => {
        _myReads[book.shelf].push(book)
      })
      setMyReads(_myReads)
    })
  })

  const handleAddBook = (book, shelf) => {
    updateBook(book, shelf)
  }

  const findInMyReads = (book) => {
    return myReads.filter(myRead => myRead.book.id === book.id)
  }

  const shelfOfBook = (book) => {
    const myRead = findInMyReads(book)[0]
    return myRead ? myRead.shelf : 'None'
  }

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((_result) => {
        console.log(_result)
      })
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
          <AddBook onAddBook={handleAddBook} shelfOfBook={shelfOfBook} />
        } />
      </Routes>
    </div>
  )
}

export default App
