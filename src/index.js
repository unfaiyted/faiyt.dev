import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "faiyt-ui-components";
import {StateProvider} from "./utils/store";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {API} from "./utils/api";

//TODO: setup uri to handle accessing the live api.faiyt.dev
const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
      <ThemeProvider>
        <React.StrictMode>
          <StateProvider>
            <App />
          </StateProvider>
        </React.StrictMode>
      </ThemeProvider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
