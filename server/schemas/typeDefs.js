const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: SavedBooks 
  }

  type SavedBooks {
    authors: [String!]
    description: [String!]
    bookId: ID
    image: String
    link: String
    title: String!
  }

  type AddUserResponse {
    token: String!
    user: User!
  }



  type Query {
    profiles: [User]!
    getMe(UserId: ID!): User

  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): AddUserResponse!
    #addSkill(profileId: ID!, skill: String!): Profile
    #removeProfile(profileId: ID!): Profile
    #removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
