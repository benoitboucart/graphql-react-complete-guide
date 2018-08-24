import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { PropTypes } from 'prop-types';
import { GET_SONGS } from '../queries/fetchSongs';

const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title){
      id,
      title
    }
  }
`;

class SongCreate extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };
  // state = {
  //   title: ``
  // };

  render = () => {
    return (
      <Mutation mutation={ADD_SONG}>
        {(addSong, { data }) => (
          <div>
            <Link to="/">
              Back
            </Link>
            <h3>Create a new song</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                addSong({
                  variables: { title: this.input.value },
                  refetchQueries: [{ query: GET_SONGS }]
                }).then(() => {
                  this.input.value = "";
                  this.props.history.push(`/`);
                });
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
