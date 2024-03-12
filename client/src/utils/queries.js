import { gql } from '@apollo/client';

export const GET_STAFF = gql`
query GetStaff {
  getStaff {
    id
    firstName
    lastName
    services {
      id
      serviceName
      servicePrice
      addOns {
        addOnName
        addOnPrice
        id
      }
    }
  }
}
`;

export const GET_SERVICES = gql`
  query GetServices {
    getServices {
      id
    }
  }
`;

export const GET_BOOKINGS = gql`
query GetBookings($userId: ID!) {
  getBookings (userID: $userID){
    _id
    service{
      serviceName
      servicePrice
    }
    staff{
      firstName
      lastName
    }
    date
    time
  }
}
`;

// export const GET_USER = gql`
// query GetUser {
//   getUser {
// }
// }
// `;

