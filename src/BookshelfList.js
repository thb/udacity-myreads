import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

const BookshelfList = (props) => {

  return(
    <div className="list-books">
      <div>
        {props.myReads.map(myRead => (
          <span key={myRead.book.id}>{myRead.book.title}({myRead.shelf})</span>
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
              books={props.myReads.filter(myRead => myRead.shelf === bookshelf).map(myRead => myRead.book)}
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

export default BookshelfList