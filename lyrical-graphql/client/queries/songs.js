import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
 query {
   songs {
     id
     title
   }
 }
`;

export const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title){
      id,
      title
    }
  }
`;

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id){
      id
    }
  }
`;
