import React from 'react';
import { useParams } from 'react-router-dom';

const AlgorithmDetails = () => {
  const { id } = useParams();

  // Fetch algorithm details based on the id parameter

  return (
    <div>
      <h1>Algorithm Details</h1>
      <p>Algorithm ID: {id}</p>
      {/* Add algorithm details content here */}
    </div>
  );
};

export default AlgorithmDetails;
