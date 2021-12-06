import React from "react";
import { useFormik } from 'formik'
// TODO: import useFormik from formik library

function App() {
  const validate = values => {
    const errors = {};
    if (!values.emailField) {
      errors.emailField = 'Field required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailField = 'Username should be an email';
    }

    if (!values.pswField) {
      errors.pswField = 'Field required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    validate,
    onSubmit: values => {
      alert("Login Successful");
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="emailField">Email Address</label>
      <input
        id="emailField"
        name="emailField"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.emailField}
      />
      {formik.errors.emailField ? <div id="emailError">{formik.errors.emailField}</div> : null}

      <label htmlFor="pswField">Password</label>
        <input
          id="pswField"
          name="pswField"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pswField}
        />
        {formik.errors.pswField ? <div id="pswError">{formik.errors.pswField}</div> : null}

        <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
}

export default App;
