const typeDefs = `#graphql

  type Query {
    createUser(user: UserInput): User
    getUser(email: String): User
    getAllUsers: [User]
    createPost(email: String, post: PostInput): User
  }

  type User {
    email: String
    firstname: String
    lastname: String
    age: Int
    post: [Post]
  }

  type Post {
    message: String
    date: String
    likes: Int
  }

  input UserInput {
    email: String
    password: String
    firstname: String
    lastname: String
    age: Int
  }

  input PostInput {
    message: String
    likes: Int
  }
`;

export default typeDefs;
