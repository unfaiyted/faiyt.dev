import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "@apollo/client";
import {StateProvider} from "./utils/store";

import { ApolloClient, InMemoryCache } from '@apollo/client';

//TODO: setup uri to handle accessing the live api.faiyt.dev
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <StateProvider>
        <App />
      </StateProvider>
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
