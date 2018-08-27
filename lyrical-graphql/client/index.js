import './style/style.css'
import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import NotFound from './components/NotFound';

const client = new ApolloClient();

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>{ /*forceRefresh={true}*/ }
        <App>
          <Switch>
            <Route exact path='/' component={SongList} />
            <Route path='/songs/new' component={SongCreate} />
            <Route path='/songs/:id' component={SongDetail} />
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
