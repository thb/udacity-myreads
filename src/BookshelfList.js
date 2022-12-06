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
          { Object.entries(props.myReads).map(([shelf, books]) => (
            <Bookshelf
              key={shelf}
              shelf={shelf}
              books={books}
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
  myReads: PropTypes.object.isRequired,
  onAddBook: PropTypes.func.isRequired
}

export default BookshelfList