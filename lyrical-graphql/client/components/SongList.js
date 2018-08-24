import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SONGS = gql`
 query {
   songs {
     id
     title
   }
 }
`;

class SongList extends Component {
  renderSongs = songs => {
    return songs.map(song => {
      return <li key={song.id} className="collection-item">{song.title}</li>
    })
  }

  render = () => {
    return (
      <Query query={GET_SONGS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return (
            <ul className="collection">
              { this.renderSongs(data.songs) }
            </ul>
          )
        }}
      </Query>
    )
  };
}

export default SongList;
