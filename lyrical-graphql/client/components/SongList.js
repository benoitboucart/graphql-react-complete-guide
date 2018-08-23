import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SONGS = gql`
 query {
   songs {
     title
   }
 }
`;

class SongList extends Component {
  render = () => {
    return (
      <Query query={GET_SONGS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return (
            <div>
              { data.songs.map((song) => {
                return <p key={song.id}>song</p>
              }) }
              {console.log(data)}
            </div>
          )
        }}
      </Query>
    )
  };
}

export default SongList;
