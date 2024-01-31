import React from "react";
import "./HomePage.css";
import CityWeatherCard from "../cityWeatherCard/CityWeatherCard";

const HomePage = ({cities, onRemove}) => {
  return (
    <div>
      <div className="title">
        <h1>WEATHER LIST</h1>
      </div>
      <div className="weatherList">
        {cities.map((city, index) => (
          <CityWeatherCard key={index} city={city} onRemove={() => onRemove(city)} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
