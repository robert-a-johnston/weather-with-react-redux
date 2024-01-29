import React from "react";
// import { Link } from "react-router-dom";

import Card from "../card/CardComponent";

const HomePage = ({cities}) => (
    <div>
        <div className="row">
            <h1>Cities</h1>
        </div>
        <div className="row">
            <Card/>
        </div>
    </div>
);

export default HomePage;