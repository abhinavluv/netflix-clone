// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBeFHRqTq43KkEiK-XyC5fDcyK80fuAYJE',
    authDomain: 'netflix-clone-53159.firebaseapp.com',
    projectId: 'netflix-clone-53159',
    storageBucket: 'netflix-clone-53159.appspot.com',
    messagingSenderId: '21380456788',
    appId: '1:21380456788:web:7e327037fc544208ede8c1',
    measurementId: 'G-Q7260YZNFK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
