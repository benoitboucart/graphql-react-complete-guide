import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title){
      id,
      title
    }
  }
`;

class SongCreate extends Component {
  // state = {
  //   title: ``
  // };

  render = () => {
    return (
      <Mutation mutation={ADD_SONG}>
        {(addSong, { data }) => (
          <div>
            <h3>Create a new song</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                addSong({ variables: { title: this.input.value } });
                this.input.value = "";
              }}
            >
              <input
                ref={node => {
                  this.input = node;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
        {/* <div>
          <form onSubmit={this.onSubmit}>
            <label>Song title</label>
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            {this.state.title}
          </form>
        </div> */}
      </Mutation>
    );
  }
};

export default SongCreate;
