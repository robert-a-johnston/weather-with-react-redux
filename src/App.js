import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home/Home';
import Header from './components/header/Header';
import AddCityForm from './components/addCityForm/AddCityForm';

function App() {

  
    
  // This function adds a City name to the current state.
  // const addCity = newCityName => {
  //   setCities(prevCities => [...prevCities, newCityName]);
  //   };
  
  return (
    <div>
      <Header/>
      <AddCityForm/>
      <HomePage/>
    </div>
  );
}



export default App;
