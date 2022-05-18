import React, { useState } from 'react'

const Book = (props) => {

  const handleChange = (e) => {
    const bookshelfName = e.target.value
    props.onAddBook(props.book, bookshelfName)
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={props.bookshelf || 'none'} onChange={handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">
          { props.book.authors && props.book.authors.length !== 0 && (
              props.book.authors.map((author) => (
                <div key={author}>{author}</div>
              ))
          )}
        </div>
      </div>
    </li>
  )
}

export default Book