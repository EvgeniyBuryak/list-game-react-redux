// JSX
import React from "react";
import ReactDom from "react-dom";
/* Import Redux store and the actions */
import configureStore from './store/configure-store';
import { Provider } from "react-redux";
import App from "./App";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);