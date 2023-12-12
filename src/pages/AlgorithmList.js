import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALGORITHMS } from '../graphql/queries';

const AlgorithmList = () => {
  const { loading, error, data } = useQuery(GET_ALGORITHMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const algorithms = data.algorithms;

  return (
    <div>
      <h1>Algorithm List</h1>
      <ul>
        {algorithms.map((algorithm) => (
          <li key={algorithm.id}>{algorithm.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlgorithmList;
