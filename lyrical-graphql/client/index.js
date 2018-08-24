import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import NotFound from './components/NotFound';

const client = new ApolloClient();

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path='/' component={SongList} />
            <Route path='/song/create' component={SongCreate} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>
    </ApolloProvider>
  );
};

render(
  <Root />,
  document.querySelector('#root')
);
