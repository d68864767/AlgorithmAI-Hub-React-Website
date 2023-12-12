src/utils/api.js

import { gql } from '@apollo/client';

// Define GraphQL queries and mutations
export const GET_ALGORITHMS = gql`
  query GetAlgorithms {
    algorithms {
      id
      name
    }
  }
`;

export const GET_ALGORITHM_DETAILS = gql`
  query GetAlgorithmDetails($algorithmId: ID!) {
    algorithm(id: $algorithmId) {
      id
      name
      description
      complexity
      code
    }
  }
`;

export const CREATE_ALGORITHM = gql`
  mutation CreateAlgorithm($input: AlgorithmInput!) {
    createAlgorithm(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_ALGORITHM = gql`
  mutation UpdateAlgorithm($algorithmId: ID!, $input: AlgorithmInput!) {
    updateAlgorithm(id: $algorithmId, input: $input) {
      id
      name
    }
  }
`;

export const DELETE_ALGORITHM = gql`
  mutation DeleteAlgorithm($algorithmId: ID!) {
    deleteAlgorithm(id: $algorithmId)
  }
`;

// Define API functions for interacting with the backend
const api = {
  getAlgorithms: async () => {
    const response = await client.query({ query: GET_ALGORITHMS });
    return response.data.algorithms;
  },
  getAlgorithmDetails: async (algorithmId) => {
    const response = await client.query({
      query: GET_ALGORITHM_DETAILS,
      variables: { algorithmId },
    });
    return response.data.algorithm;
  },
  createAlgorithm: async (input) => {
    const response = await client.mutate({
      mutation: CREATE_ALGORITHM,
      variables: { input },
    });
    return response.data.createAlgorithm;
  },
  updateAlgorithm: async (algorithmId, input) => {
    const response = await client.mutate({
      mutation: UPDATE_ALGORITHM,
      variables: { algorithmId, input },
    });
    return response.data.updateAlgorithm;
  },
  deleteAlgorithm: async (algorithmId) => {
    const response = await client.mutate({
      mutation: DELETE_ALGORITHM,
      variables: { algorithmId },
    });
    return response.data.deleteAlgorithm;
  },
};

export default api;
