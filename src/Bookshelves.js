import React, {useEffect} from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const Bookshelves = (props) => {

  return(
    <div className="list-books">
      <div>
        {props.books.map(book => (
          <span key={book.id}>{book.title}({book.bookshelf})</span>
        ))}
      </div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { props.bookshelves.map(bookshelf => (
            <Bookshelf
              key={bookshelf}
              title={bookshelf}
              books={props.books.filter(book => book.bookshelf === bookshelf)}
              onAddBook={props.onAddBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to='/add'><button>Add a book</button></Link>
      </div>
    </div>
  )
}

export default Bookshelves