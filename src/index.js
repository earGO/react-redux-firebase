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
        reduxFirestore(fbConfig), // redux bindings for firestore
        reactReduxFirebase(fbConfig,{
            userProfile:'users',
            useFirestoreForProfile: true,
            attachAuthIsReady:true}), // redux binding for firebase , and we add await for firebaseAuth

    )
);

//we then render our app only when the attachAuthIsReady-promise will be fullfilled.
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})
    .catch(err=>{
        ReactDOM.render(<div>Error with Firebase Auth</div>, document.getElementById('root'));
    });

