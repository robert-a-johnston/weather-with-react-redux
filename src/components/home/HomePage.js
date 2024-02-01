import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import CityWeatherCard from '../cityWeatherCard/CityWeatherCard';

const HomePage = ({ cities, onRemove }) => {
  return (
    <div>
      <div className="title">
        <h1>WEATHER LIST</h1>
      </div>
      <div className="weatherList">
        {cities.map((city, index) => (
          <Link key={index} to={`/detailView/${city}`}>
            <CityWeatherCard city={city} onRemove={() => onRemove(city)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
