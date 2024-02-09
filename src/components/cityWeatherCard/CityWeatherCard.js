import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CityWeatherCard.css'
import { connect } from 'react-redux'
import { removeCity } from '../../redux/actions/locationAction'




const CityWeatherCard = ({ cityName, currentTemp, lowTemp, highTemp, humidity, wind, feelsLike, onRemove }) => {

  const handleRemoveClick = () => {
    console.log('removing city: ', cityName)
    if(onRemove) {
      onRemove(cityName);
    }
  }
  
  return (
      <div className="card">
      <div className="card-content">
          
        <div className="card-title">{cityName}</div>
        <div>current: {currentTemp}</div>
        <div>high: {highTemp}</div>
        <div>low: {lowTemp}</div>
        <div>humidity: {humidity}</div>
        <div>wind: {wind}</div>
        <div>feels like: {feelsLike}</div>
      </div>
        <div className="card-content">
          <Link to={`/detailView/${cityName}`} className="btn btn-details">Details</Link>
            <button className="btn btn-remove"      onClick={handleRemoveClick}>Remove</button>
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
  wind: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,

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

export default connect(null,{onRemove: removeCity})(CityWeatherCard);