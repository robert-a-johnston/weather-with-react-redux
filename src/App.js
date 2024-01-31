import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Route and Link
import './App.css';

import HomePage from './components/home/HomePage';
import AddCityForm from './components/addCityForm/AddCityForm';

function App() {
  const [cities, setCities] = useState(['New York', 'Chennai', 'Monterrey']);
  console.log(cities);
  const addCity = newCityName => {
    setCities(prevCities => [...prevCities, newCityName]);
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
            render={() => <HomePage cities={cities} />}
          />
          <Route 
            exact 
            path="/home" 
            element={ <HomePage cities={cities} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';
// import AddCityForm from './components/AddCityForm/AddCityForm';
// import CityWeather from './components/CityWeather/CityWeather';

// function App() {
//   const [cities, setCities] = useState(['New York', 'Chennai', 'Monterrey']);

//   const addCity = newCityName => {
//     setCities(prevCities => [...prevCities, newCityName]);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h1>My Weather App - React-Redux</h1>
//       </div>
//       <div className="contentArea">
//         <AddCityForm addCity={addCity} />
//         <div className="weatherList">
//           {cities.map(city => (
//             <CityWeather key={city} cityName={city} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
