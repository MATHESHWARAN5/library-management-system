import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </>
  );
}

export default App;
