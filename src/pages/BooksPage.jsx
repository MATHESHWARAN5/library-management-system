import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import '../styles/BooksPage.css';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (isbn) => {
    setBooks(books.filter(book => book.isbn !== isbn));
  };

  return (
    <div className="page-container">
      <h1>Books</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default BooksPage;
