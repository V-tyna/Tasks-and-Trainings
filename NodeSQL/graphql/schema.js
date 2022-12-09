const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Todo {
    id: ID!,
    title: String!,
    done: Boolean!,
    createdAt: String,
    updatedAt: String
  }

  input TodoInput {
    title: String!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    createTodo(todo: TodoInput!): Todo!,
    editTodo(id: ID!): Todo!,
    deleteTodo(id: ID!): Boolean!,
  }
`);

// module.exports = buildSchema(`
//   type User {
//     name: String!,
//     age: Int!,
//     email: String!
//   }

//   input UserInput {
//     name: String!,
//     email: String!
//   }

//   type TestType {
//     count: Int!,
//     users: [User!]!
//   }

//   type Query {
//     test: TestType!,
//     random(min: Int!, max: Int!, count: Int!): [Float!]!
//   }

//   type Mutation {
//     addTestUser(user: UserInput!): User!
//   }
// `);