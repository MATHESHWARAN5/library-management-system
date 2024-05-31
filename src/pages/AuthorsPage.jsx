import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import '../styles/AuthorsPage.css';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const deleteAuthor = (name) => {
    setAuthors(authors.filter(author => author.name !== name));
  };

  return (
    <div className="page-container">
      <h1>Authors</h1>
      <AuthorForm addAuthor={addAuthor} />
      <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
    </div>
  );
};

export default AuthorsPage;
