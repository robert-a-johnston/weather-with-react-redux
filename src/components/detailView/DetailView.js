import React from 'react';
import { useParams } from 'react-router-dom';

const DetailView = () => {
  const { city } = useParams();

  return (
    <div>
      <h2>City Name: {city}</h2>
      {/* Additional content */}
    </div>
  );
}

export default DetailView;
