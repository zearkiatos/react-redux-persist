import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import './index.css';
import {store, persistor} from "./redux/store";
import Home from './pages/home';
import Loading from "./components/Loading";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
