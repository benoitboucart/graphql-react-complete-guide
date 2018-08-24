import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import NotFound from './components/NotFound';

const client = new ApolloClient();

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path='/' component={SongList}></Route>
            <Route path='/store/:storeId' component={SongList} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>

      {/* <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
        </Route>
      </Router> */}
    </ApolloProvider>
  );
};

render(
  <Root />,
  document.querySelector('#root')
);
