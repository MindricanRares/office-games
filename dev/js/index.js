import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/lib/integration/react'
 
import configureStore from './configureStore'
let { store, persistor } = configureStore()

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//   }


// const logger = createLogger();
// const store = createStore(
//     allReducers,
//     applyMiddleware(thunk, promise, logger)
// );

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
