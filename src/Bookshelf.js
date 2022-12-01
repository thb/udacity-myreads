import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const Bookshelf = (props) => {

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { props.books.map(book => (
            <Book book={book} key={book.id} bookshelf={props.name} onAddBook={props.onAddBook} />
          ))}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onAddBook: PropTypes.func.isRequired
}

export default Bookshelf