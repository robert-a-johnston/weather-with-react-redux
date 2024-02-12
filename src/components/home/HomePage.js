import React from 'react';
import { connect } from 'react-redux';

import CityWeather from '../cityWeatherCard/CityWeatherCard';
import { removeCity } from '../../redux/actions/locationAction';

import './HomePage.css';

const HomePage = ({ cities }) => (
  <div>
    <div className="row">
      <h1>Overview - Weather Widget</h1>
    </div>
    
    <div className="weatherList">
      {cities.map(city => (
        <div key={city}> 
          <CityWeather cityName={city} onRemove={() => removeCity(city)} />
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  cities: state.locations,
});

const mapDispatchToProps = {
  removeCity,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
