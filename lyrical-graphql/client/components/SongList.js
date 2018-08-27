import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import { GET_SONGS, DELETE_SONG } from '../queries/songs';

class SongList extends Component {
  onSongDelete = (e, deleteSong, id) => {
    e.preventDefault();
    deleteSong({
      variables: { id },
      refetchQueries: [{ query: GET_SONGS }]
    }).then(() => {
    });
  };

  renderSongs = songs => {
    return songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          <Link to={`/songs/${song.id}`}>
            {song.title}
          </Link>

          <Mutation mutation={DELETE_SONG}>
            {(deleteSong, { data }) => (
              <i
                className="material-icons"
                onClick={e => this.onSongDelete(e, deleteSong, song.id)}
              >
                delete
              </i>
          )}
          </Mutation>
        </li>
      );
    })
  }

  render = () => {
    return (
      <Query query={GET_SONGS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return (
            <div>
              <ul className="collection">
                { this.renderSongs(data.songs) }
              </ul>
              <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
              </Link>
            </div>
          )
        }}
      </Query>
    )
  };
}

export default SongList;
