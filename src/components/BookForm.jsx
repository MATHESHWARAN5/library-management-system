import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/BookForm.css';

const BookForm = ({ addBook }) => {
  return (
    <Formik
      initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        isbn: Yup.string().required('Required'),
        publicationDate: Yup.date().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addBook(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" className="form-control" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" type="text" className="form-control" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" className="form-control" />
            <ErrorMessage name="publicationDate" component="div" className="error" />
          </div>
          <button type="submit" className="btn">Add Book</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
