import React, { Component } from 'react';

class SongCreate extends Component {
  state = {
    title: ``
  }

  render = () => {
    return (
      <div>
        <h3>Create a new song</h3>
        <form>
          <label>Song title</label>
          <input
            value={this.state.title}
            onChange={e => this.setState({ title: event.target.value })}
          />
          {this.state.title}
        </form>
      </div>
    );
  }
};

export default SongCreate;
