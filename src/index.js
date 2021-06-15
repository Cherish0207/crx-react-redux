import React from "react";
import ReactDOM from "react-dom";
import List from "./components/list";
import store from "./store";
import { Provider } from "./react-redux";
ReactDOM.render(
  <Provider store={store}>
    <List />
  </Provider>,
  document.getElementById("root")
);
