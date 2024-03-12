const typeDefs = `
  input ServiceInput {
    _id: ID
    name: String
    price: Float
    addOns: [AddOnInput] # Optional add-ons
  }

  input AddOnInput {
    _id: ID
    name: String
    price: Float
  }

  type Auth {
    token: ID! # JWT 
    user: User! # Authenticated 
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    birthday: String
    bookings: [Booking]
  }

  type Service {
    _id: ID
    serviceName: String
    servicePrice: Float
    addOns: [AddOn]
  }

  type Staff {
    _id: ID
    firstName: String
    lastName: String
    services: [Service]
  }

  type AddOn {
    _id: ID
    addOnName: String
    addOnPrice: Float
  }

  type Booking {
    _id: ID
    user: User
    service: [Service]
    staff: Staff
    date: String
    time: String
  }

  type Query {
    getUsers: [User]
    getUser(id: ID): User
    getStaff: [Staff]
    getServices: [Service]
    getBookings: User
  }

  type Mutation {
    login (email: String!, password: String!): Auth! # Login mutation
    
    logout: String! # Logout mutation
  
    createUser(
      firstName: String!, 
      lastName: String!, 
      email: String!, 
      password: String!): Auth

    createBooking(
      userId: ID, 
      services: [ServiceInput], 
      staffId: ID, 
      date: String, 
      time: String): Booking!
  }
`;

module.exports = typeDefs;
