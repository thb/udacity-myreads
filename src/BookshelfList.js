import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const BookshelfList = (props) => {

  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          { props.bookshelves.map(bookshelf => (
            <Bookshelf
              key={bookshelf}
              name={bookshelf}
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

BookshelfList.propTypes = {
  bookshelves: PropTypes.array.isRequired,
  myReads: PropTypes.array.isRequired,
  onAddBook: PropTypes.func.isRequired
}

export default BookshelfList