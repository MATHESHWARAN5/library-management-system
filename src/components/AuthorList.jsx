import React from 'react';
import '../styles/AuthorList.css';

const AuthorList = ({ authors, deleteAuthor }) => (
  <div className="list-container">
    <h2>Author List</h2>
    <ul className="list">
      {authors.map(author => (
        <li key={author.name} className="list-item">
          <span>{author.name} (Born: {author.birthDate})</span>
          <button onClick={() => deleteAuthor(author.name)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default AuthorList;
