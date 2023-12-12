src/graphql/queries.js

import { gql } from '@apollo/client';

export const GET_ALGORITHMS = gql`
  query GetAlgorithms {
    algorithms {
      id
      name
    }
  }
`;
