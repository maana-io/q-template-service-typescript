import gql from 'graphql-tag';

export default gql`
  # Boilerplate
  type Info {
    id: ID!
    version: String!
    name: String!
    description: String
  }

  # Query Root
  extend type Query {
    # Boilerplate
    info: Info
  }
`;
