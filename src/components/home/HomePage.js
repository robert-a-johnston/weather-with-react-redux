import React from "react";
import "./HomePage.css";
import CityWeatherCard from "../cityWeatherCard/CityWeatherCard";

const HomePage = ({cities}) => {
  

  return (
    <div>
      <div className="row">
        <h1>WEATHER LIST</h1>
      </div>
      <div className="row">
        {cities.map((city, index) => (
          <CityWeatherCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;