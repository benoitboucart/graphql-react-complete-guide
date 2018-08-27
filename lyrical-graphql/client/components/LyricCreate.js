import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { PropTypes } from 'prop-types';
import { Mutation } from 'react-apollo';
import { ADD_LYRIC_TO_SONG } from '../queries/lyrics';
import { GET_SONG } from '../queries/songs';

class LyricCreate extends Component {
  static propTypes = {
    songId: PropTypes.string.isRequired
  };

  render = () => {
    return (
      <Mutation mutation={ADD_LYRIC_TO_SONG}>
        {(addLyricToSong, { data }) => (
          <div>
            <hr/>
            <h5>Add lyric to song</h5>
            <form
              onSubmit={e => {
                e.preventDefault();
                addLyricToSong({
                  variables: {
                    content: this.input.value,
                    songId: this.props.songId
                  },
                  // No refetchQueries needed as the addLyricToSong function returns also updated lyrics
                  //refetchQueries: [{ query: GET_SONG, variables: { id: this.props.songId } }]
                }).then(() => {
                  this.input.value = "";
                });
              }}
            >
              <input
                ref={node => {
                  this.input = node;
                }}
              />
              <button type="submit">Add lyric</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  };
}

export default LyricCreate;
