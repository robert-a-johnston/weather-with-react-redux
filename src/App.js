import React, { useState } from 'react';
import './App.css';
import HomePage from './components/home/Home';

function App() {

  const[cities, setCities] = useState(['New York', 'Boston'])
    
  // This function adds a City name to the current state.
  // const addCity = newCityName => {
  //   setCities(prevCities => [...prevCities, newCityName]);
  //   };
  
  return (

    
    <HomePage cities={cities}/>
  );
}



export default App;
