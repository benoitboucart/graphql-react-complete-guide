import React, { Component } from 'react';

import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_SONG } from '../queries/songs';

import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render = () => {
    return (
      <div>
        <Link to="/">
          Back
        </Link>

        <Query query={GET_SONG} variables={{ id: this.props.match.params.id }}>
          {({ loading, error, data }) => {
            const { song } = data;
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            return (
              <div>
                <h3>{song.title}</h3>
                <ul className="collection">
                  {song.lyrics.map(lyric => (
                    <li key={lyric.id} className="collection-item">
                      {lyric.content}
                    </li>
                  ))}
                </ul>
                <LyricCreate
                  songId={this.props.match.params.id}
                />
              </div>
            )
          }}
        </Query>
      </div>
    );
  };
};

export default SongDetail;
