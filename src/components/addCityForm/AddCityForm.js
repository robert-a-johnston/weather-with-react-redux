import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addCity } from '../../redux/actions/locationAction';
import './AddCityForm.css';


function AddCityForm(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addCity(inputValue);
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

const mapDispatchToProps = dispatch => {
  return {
    addCity: cityName => dispatch(addCity(cityName)),
  };
};

export default connect(
  null, mapDispatchToProps)(AddCityForm);
