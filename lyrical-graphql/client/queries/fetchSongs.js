import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
 query {
   songs {
     id
     title
   }
 }
`;
