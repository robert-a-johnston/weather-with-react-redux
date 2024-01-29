import React from "react";


function Card(props) {
    return (
        <div className="card">
        <div className="card-content">
          
            <div className="card-title">{props.city}</div>
          
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="card-content">
          <span className="btn btn-details">Details</span>
          <span className="btn btn-remove">Remove</span>
        </div>
      </div>
  );
}

export default Card;