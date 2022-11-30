import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Book = (props) => {
  const navigate = useNavigate();

  const [bookshelf, setBookshelf] = useState(props.bookshelf || 'none')

  const handleChange = (e) => {
    const _bookshelf = e.target.value
    console.log(_bookshelf)
    console.log(props)
    setBookshelf(_bookshelf)
    console.log(bookshelf)
    props.onAddBook(props.book)
    navigate('/')
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={bookshelf || 'none'} onChange={handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Want to Read">Want to Read</option>
              <option value="Read">Read</option>
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