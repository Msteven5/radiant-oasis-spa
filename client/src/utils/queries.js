import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      _id
    }
  }
`;

export const CREATE_BOOKING = gql`
  mutation CreateBooking($userId: ID!, $services: [ServiceInput]!, $staffId: ID!, $date: String!, $time: String!) {
    createBooking(userId: $userId, services: $services, staffId: $staffId, date: $date, time: $time) {
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
