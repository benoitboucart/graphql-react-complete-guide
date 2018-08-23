import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { LIST_TYPE } from 'graphql/language/kinds';

const GET_SONGS = gql`
 query {
   songs {
     title
   }
 }
`;

class SongList extends Component {
  renderSongs = songs => {
    return songs.map(song => {
      return <li key={song.id}>{song.title}</li>
    })
  }

  render = () => {
    return (
      <Query query={GET_SONGS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return (
            <ul>
              { this.renderSongs(data.songs) }
            </ul>
          )
        }}
      </Query>
    )
  };
}

export default SongList;
