import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/state-management/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { saveState } from './app/helpers/'

store.subscribe(() => {
  saveState(store.getState().loginReducer)
})

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

