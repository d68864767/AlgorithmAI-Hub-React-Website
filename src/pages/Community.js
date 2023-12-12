// src/pages/Community.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALGORITHM_DISCUSSIONS } from '../graphql/queries';

const Community = () => {
  const { algorithmId } = useParams();
  const { loading, error, data } = useQuery(GET_ALGORITHM_DISCUSSIONS, {
    variables: { algorithmId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const discussions = data.algorithmDiscussions;

  return (
    <div>
      <h1>Community</h1>
      <h2>Algorithm Discussions</h2>
      <ul>
        {discussions.map((discussion) => (
          <li key={discussion.id}>{discussion.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Community;
