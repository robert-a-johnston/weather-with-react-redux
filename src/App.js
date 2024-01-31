import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import './App.css';

import HomePage from './components/home/HomePage';
import AddCityForm from './components/addCityForm/AddCityForm';

function App() {
  const [cities, setCities] = useState(['New York', 'Chennai', 'Monterrey']);
  
  const addCity = newCityName => {
    setCities(prevCities => [...prevCities, newCityName]);
  };

  const removeCity = cityName => {
    setCities(prevCities => prevCities.filter(city => city !== cityName));
  };
  
  return (
    <div className="appContainer">
      <div className="header">
        <Link to="/home"> {/* Use Link for navigation */}
          <h1>My Weather App - React-Redux</h1>
        </Link>
      </div>
      <div className="contentArea">
        <AddCityForm addCity={addCity} />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage cities={cities} onRemove={removeCity} />}
          />
          <Route 
            exact 
            path="/home" 
            element={<HomePage cities={cities} onRemove={removeCity} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
