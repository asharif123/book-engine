import {gql} from '@apollo/client';
//define get route
//return data
export const USER = gql`
  {
    getMe {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;