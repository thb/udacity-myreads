import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const Bookshelves = (props) => {

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { Object.keys(props.bookshelves).map(bookshelfName => (
            <Bookshelf
              key={bookshelfName}
              title={props.bookshelves[bookshelfName].name}
              books={props.bookshelves[bookshelfName].books}
              onAddBook={props.onAddBook}
              label={bookshelfName}
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