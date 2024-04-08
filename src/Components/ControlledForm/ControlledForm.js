import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("formData field on change", formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with formData
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      {/* the below label and input for checking purpose */}
      <label>
        New Prop:
        <input type="text" name="prop" value={formData.prop} onChange={handleInputChange} />
      </label>
      {/*  */}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
