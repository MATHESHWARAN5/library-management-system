import React from 'react';
import '../styles/BookList.css';

const BookList = ({ books, deleteBook }) => (
  <div className="list-container">
    <h2>Book List</h2>
    <ul className="list">
      {books.map(book => (
        <li key={book.isbn} className="list-item">
          <span>{book.title} by {book.author} (ISBN: {book.isbn})</span>
          <button onClick={() => deleteBook(book.isbn)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;
