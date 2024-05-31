import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/AuthorForm.css';

const AuthorForm = ({ addAuthor }) => {
  return (
    <Formik
      initialValues={{ name: '', birthDate: '', biography: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        birthDate: Yup.date().required('Required'),
        biography: Yup.string().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addAuthor(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <Field name="birthDate" type="date" className="form-control" />
            <ErrorMessage name="birthDate" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="biography">Biography</label>
            <Field name="biography" as="textarea" className="form-control" />
            <ErrorMessage name="biography" component="div" className="error" />
          </div>
          <button type="submit" className="btn">Add Author</button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
