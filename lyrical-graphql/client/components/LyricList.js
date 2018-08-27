import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import { LIKE_LYRIC } from '../queries/lyrics';


class LyricList extends Component {

  onLike = (e, id, likeLyric) => {
    e.preventDefault();

    likeLyric({ variables: { id } }).then(() => {
    });
  };

  renderLyrics = () => {
    return (
      this.props.lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}


          <Mutation mutation={LIKE_LYRIC}>
            {(likeLyric, { data }) => (
              <div>
                <i
                  onClick={e => this.onLike(e, id, likeLyric)}
                  className="material-icons"
                >
                  thumb_up
                </i>
                { likes }
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
