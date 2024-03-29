import gql from 'graphql-tag';

export default gql`
  # Scalars
  scalar Date

  # Custom Types
  type Person {
    # Kind fields
    id: ID! # internal identifier (unique)
    name: String # external identifier (non-unique)
    givenName: String
    familyName: String
    dateOfBirth: Date
    age: Int
  }

  # Custom Inputs
  input PersonInput {
    id: ID # if known, otherwise one will be generated
    name: String
    givenName: String
    familyName: String
    dateOfBirth: Date
  }

  # Query Root
  type Query {
    # Custom queries
    allPeople: [Person!]!
    person(id: ID!): Person
  }

  # Mutation Root
  type Mutation {
    # Custom mutations
    addPerson(input: PersonInput): ID
    updatePerson(input: PersonInput): ID
    deletePerson(id: ID!): Person
  }

  # Custom Event Types
  type PersonEvent {
    id: ID
    name: String
    givenName: String
    familyName: String
    dateOfBirth: Date
  }
`;
