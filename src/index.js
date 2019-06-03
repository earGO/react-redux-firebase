import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import { createStore, applyMiddleware, compose } from 'redux'
import {rootReducer} from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fb.config'
import {logger} from "redux-logger/src";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}),logger),
        reactReduxFirebase(fbConfig), // redux binding for firebase
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));