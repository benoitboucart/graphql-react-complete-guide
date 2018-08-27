import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_SONG } from '../queries/songs';

class SongDetail extends Component {
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
              <h3>{song.title}</h3>
            )
          }}
        </Query>
      </div>
    );
  };
};

export default SongDetail;
