import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import { LIKE_LYRIC } from '../queries/lyrics';


class LyricList extends Component {

  onLike = (e, lyric, likeLyric) => {
    e.preventDefault();
    likeLyric({
      variables: { id: lyric.id },
      optimisticResponse: {
        __typename: `Mutation`,
        likeLyric: {
          id: lyric.id,
          __typename: `LyricType`,
          likes: lyric.likes + 1,
        }
      }
    }).then(() => {
    });
  };

  renderLyrics = () => {
    return (
      this.props.lyrics.map(lyric => (
        <li key={lyric.id} className="collection-item">
          {lyric.content}

          <Mutation mutation={LIKE_LYRIC}>
            {(likeLyric, { data }) => (
              <div className="vote-box">
                <i
                  onClick={e => this.onLike(e, lyric, likeLyric)}
                  className="material-icons"
                >
                  thumb_up
                </i>
                { lyric.likes }
              </div>
            )}
          </Mutation>
        </li>
      ))
    );
  }

  render = () => {
    return (
      <ul className="collection">
        { this.renderLyrics() }
      </ul>
    );
  }
}

export default LyricList;
