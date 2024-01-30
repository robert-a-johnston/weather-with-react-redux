import React from "react";
import PropTypes from 'prop-types'


function CityWeatherCard(props) {
  const { city, currentTemp, lowTemp, highTemp, humidity, wind, feelsLike } = props;
  return (
      <div className="card">
      <div className="card-content">
          
        <div className="card-title">{city}</div>
        <div>current: {currentTemp}</div>
        <div>high: {highTemp}</div>
        <div>low: {lowTemp}</div>
        <div>humidity: {humidity}</div>
        <div>wind: {wind}</div>
        <div>feels like: {feelsLike}</div>
      </div>
        <div className="card-content">
          <span className="btn btn-details">Details</span>
          <span className="btn btn-remove">Remove</span>
        </div>
      </div>
  );
}

CityWeatherCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired,
  highTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

CityWeatherCard.defaultProps = {
  cityName: '',
  currentTemp: 68,
  lowTemp: 55,
  highTemp: 73,
  humidity: 20,
  wind: 3,
  feelsLike: 60,
};

export default CityWeatherCard;