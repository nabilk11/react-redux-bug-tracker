import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import './index.css';
import App from './App';

// Reducers Import
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

// REDUX CONFIGURATION
// combining reducers as there can only be one in the store - using combineReducers
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
})
// must configure the store for redux
const store = configureStore({
  reducer,
});

ReactDOM.render(
  // must add Provider to the react app
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

