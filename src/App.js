import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/home/HomePage';
import DetailView from './components/detailView/DetailView';

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
        <Link to="/">
          <h1>My Weather App - React-Redux</h1>
        </Link>
      </div>
      <div className="contentArea">
        <Routes>
          <Route
            path="/"
            element={<HomePage cities={cities} onRemove={removeCity} />}
          />
          <Route path="/detailView/:city" element={<DetailView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
