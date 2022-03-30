import { applyMiddleware, createStore  } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export * from './actions';