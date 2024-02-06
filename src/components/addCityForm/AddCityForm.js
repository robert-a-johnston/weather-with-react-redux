import React, { useState } from 'react';
import './AddCityForm.css';


function AddCityForm({ addCity }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addCity(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form id="addCity" onSubmit={handleSubmit}>
        <input
          type="text"
          name="_addCity"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter City"
        />
      </form>
    </div>
  );
}

export default AddCityForm;
