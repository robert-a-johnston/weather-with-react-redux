import React from "react";

import "./Home.css";
import Header from "../header/Header";
import Card from "../cityWeatherCard/CityWeatherCard";

const HomePage = ({cities}) => (

    <div>
        <Header/>
        <div className="row">
            <h1>hello</h1>
        </div>
        <div className="row">
            {cities.map((city, index) => (
                <Card key={index} city={city}/>
            ))}
        </div>
    </div>
);

export default HomePage;