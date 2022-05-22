import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './store';
import Home from './pages/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
      {
        store.getState().detailNeeded && <h3 style={{color: 'red', backgroundColor: 'darkgrey'}}>FULL ACCESS CERTIFIED</h3>
      }
    </Provider>
  </React.StrictMode>
);
