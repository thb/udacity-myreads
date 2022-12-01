import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AddBook from './AddBook'
import BookshelfList from './BookshelfList'
import { useLocalStorage } from './utils'

const App = () => {

  const bookshelves = ['Currently Reading', 'Want to Read', 'Read']
  const [myReads, setMyReads] = useLocalStorage('myReads', [])

  const handleAddBook = (book, shelf) => {
    if (bookshelves.includes(shelf)) {
      setMyReads([...myReads.filter(myRead => myRead.book.id !== book.id), {book, shelf}])
    } else {
      setMyReads(myReads.filter(myRead => myRead.book.id !== book.id))
    }
  }

  const findInMyReads = (book) => {
    return myReads.filter(myRead => myRead.book.id === book.id)
  }

  const shelfOfBook = (book) => {
    const myRead = findInMyReads(book)[0]
    return myRead ? myRead.shelf : 'None'
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={
          <BookshelfList
            bookshelves={bookshelves}
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
