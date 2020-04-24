import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./app.component";
import { reducers } from "./redux";
import "./scss/index.scss";

export default class Root extends Component {
  constructor(props) {
    super(props);
    Object.keys(reducers).map(key =>
      props.Reducer.store.injectAsyncReducer(key, reducers[key])
    );
  }
  render() {
    return (
      <Provider store={this.props.Reducer.store}>
        <PersistGate loading={null} persistor={this.props.Reducer.persist}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
