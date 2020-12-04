import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux";
import { spotifyReducer } from "./reducers/spotifyReducer"
import thunk from "redux-thunk"

const store = createStore(spotifyReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
