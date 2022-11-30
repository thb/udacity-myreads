import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AddBook from './AddBook'
import Bookshelves from './Bookshelves'
import { useState } from 'react'

const App = () => {

  const bookshelves = ['Currently Reading', 'Want to Read', 'Read']
  const [books, setBooks] = useState([])

  const handleAddBook = (book) => {
    setBooks([...books, book])
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={
          <Bookshelves
            bookshelves={bookshelves}
            books={books}
            onAddBook={handleAddBook}
          />
        } />
        <Route path="/add" element={
          <AddBook onAddBook={handleAddBook} />
        } />
      </Routes>
    </div>
  )
}

export default App
