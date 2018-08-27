import React, { Component } from 'react';

import { Query } from 'react-apollo';
import { GET_SONG } from '../queries/songs';

class SongDetail extends Component {
  render = () => {
    return (
      <div>
        <h3>Song detail</h3>

        <Query query={GET_SONG} variables={{ id: this.props.match.params.id }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            return (
              <p>
                { data.song.title }
              </p>
            )
          }}
        </Query>
      </div>
    );
  };
};

export default SongDetail;
