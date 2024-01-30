import React, { useState } from "react";
import "./Home.css";
import CityWeatherCard from "../cityWeatherCard/CityWeatherCard";

const HomePage = () => {
  const [cities, setCities] = useState(['New York', 'Boston']);

  return (
    <div>
      <div className="row">
        <h1>hello</h1>
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
