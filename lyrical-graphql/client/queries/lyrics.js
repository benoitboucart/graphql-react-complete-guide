import { gql } from 'apollo-boost';

export const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId){
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
