import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/home/HomePage';
import DetailView from './components/detailView/DetailView';
import AddCityForm from './components/addCityForm/AddCityForm';

function App() {
  return (
    <div className="appContainer">
      <div className="header">
        <Link to="/">
          <h1>My Weather App - React-Redux</h1>
        </Link>
        <div className='addCity'><AddCityForm /></div>
      </div>
      <div className="contentArea">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/detailView/:city" element={<DetailView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
