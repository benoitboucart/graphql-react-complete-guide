import './style/style.css'
import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
// import ApolloClient from 'apollo-boost';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import NotFound from './components/NotFound';

const cache = new InMemoryCache({
  // Niet nodig, werkt al standaard zo:
  // dataIdFromObject: o => {
  //   console.log(o);
  //   return o.id;
  // }
});
const client = new ApolloClient({
  link: new HttpLink(),
  cache
});
// const client = new ApolloClient({
// });

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
