import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


/** Custom Reducers */
import buscarUsuarioReducer from './reducers/buscarUsuarioReducer';

//configurar firestore
const firebaseConfig = {
    apiKey: "AIzaSyAoO_ofOrnAflzGaR6qbn4gYNNWepiB73Q",
    authDomain: "bibliostote.firebaseapp.com",
    databaseURL: "https://bibliostote.firebaseio.com",
    projectId: "bibliostote",
    storageBucket: "bibliostote.appspot.com",
    messagingSenderId: "66895561779",
    appId: "1:66895561779:web:7e9c06db217a295d"
}

//inicializar Firebase
firebase.initializeApp(firebaseConfig);

//configuracion de react-redux
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

//crear el enhancer con compose de redux y FS
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

//reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    usuario: buscarUsuarioReducer
})

//state inicial
const initialState = {};


// Create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;