import React from 'react'
import { useNavigate } from 'react-router-dom'

const Book = (props) => {

  const navigate = useNavigate();

  const handleChange = (e) => {
    const _bookshelf = e.target.value
    props.onAddBook(props.book, _bookshelf)
    if (_bookshelf !== 'None') {
      navigate('/')
    }
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={props.bookshelf} onChange={handleChange}>
              <option disabled>Move to...</option>
              {['Currently Reading', 'Want to Read', 'Read', 'None'].map((bookshelf) => (
                <option key={bookshelf} value={bookshelf}>{bookshelf}</option>
              ))}
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