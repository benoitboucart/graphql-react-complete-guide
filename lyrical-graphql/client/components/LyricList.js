import React, { Component } from 'react';

class LyricList extends Component {
  render = () => {
    const { lyrics } = this.props;

    return (
      <ul className="collection">
        {lyrics.map(lyric => (
          <li key={lyric.id} className="collection-item">
            {lyric.content}
          </li>
        ))}
      </ul>
    );
  }
}

export default LyricList;
