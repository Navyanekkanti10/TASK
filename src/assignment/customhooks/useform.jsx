import React from 'react';
import useFormValidation from  './formvalidation';

const MyForm = () => {
  const validateForm = (values) => {
    // Implement your custom validation logic here
    const errors = {};
    // Example validation rule
    if (!values.email) {
      errors.email = 'Email is required';
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useFormValidation(
    { email: '', password: '' },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>

      {/* Add more form fields and validation messages as needed */}

      <div>
        <label>Password:</label>
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;