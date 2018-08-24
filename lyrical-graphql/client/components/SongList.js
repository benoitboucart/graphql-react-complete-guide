import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_SONGS } from '../queries/fetchSongs';
// import { PropTypes } from 'prop-types';

class SongList extends Component {
  // static propTypes = {
  //   history: PropTypes.object.isRequired
  // };

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
            <div>
              <ul className="collection">
                { this.renderSongs(data.songs) }
              </ul>
              <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
              </Link>
              {/* <a onClick={() => { this.props.history.push(`/songs/new`) }}>Create</a> */}
            </div>
          )
        }}
      </Query>
    )
  };
}

export default SongList;
