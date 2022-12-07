import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';
import { titelizeString } from './utils';

const Bookshelf = (props) => {

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titelizeString(props.shelf)}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { props.books.map(book => (
            <Book book={book} key={book.id} shelf={props.shelf} onAddBook={props.onAddBook} />
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onAddBook: PropTypes.func.isRequired
}

export default Bookshelf