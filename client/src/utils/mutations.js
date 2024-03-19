import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation 
  createBooking(
    $userId: ID!, 
    $serviceId: ID!, 
    $staffId: ID!, 
    $addOnId: ID,
    $phoneNumber: String
    $date: String!, 
    $time: String!
    ) {
    createBooking
    (user: $userId, 
      service: $serviceId, 
      addOn: $addOnId,
      phoneNumber: $phoneNumber
      staff: $staffId, 
      date: $date, 
      time: $time) {
      _id
    }
  }
`;



export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
    }
  }
}
`;
