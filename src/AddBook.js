import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';


const AddBook = (props) => {

  const [results, setResults] = useState([])

  const search = (query) => {
    query = query.trim()
    if (query !== '' && query.length >= 3) {
      BooksAPI.search(query)
        .then((_results) => {
          if (Array.isArray(_results) && 0 !== _results.length) {
            setResults(_results)
          } else {
            setResults([])
          }
        })
    } else {
      setResults([])
    }
  }

  const getShelf = (book) => {
    let myReads = props.myReads
    let shelf = 'none'
    Object.keys(myReads).forEach((key) => {
      myReads[key].forEach((b) => {
        if (b.id === book.id) {
          shelf = key
        }
      })
    })
    return shelf
  }

  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'><button className="close-search">Close</button></Link>
        <div className="search-books-input-wrapper">
          <Debounce time="200" handler="onChange">
            <input
              type="text"
              placeholder="Search by Terms..."
              onChange={(event) => search(event.target.value)}
            />
          </Debounce>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {results !== undefined && results.map(book =>
            <Book book={book} key={book.id} onAddBook={props.onAddBook} shelf={getShelf(book)} />)
          }
        </ol>
      </div>
    </div>
  )
}

AddBook.propTypes = {
  myReads: PropTypes.object.isRequired,
  onAddBook: PropTypes.func.isRequired
}

export default AddBook