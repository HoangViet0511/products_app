import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyAOoKlVdFXSFHV7r4wkTU_baTw3bX1V9Zo',
    authDomain: 'productapp-85dcc.firebaseapp.com',
    databaseURL: 'productapp-85dcc.firebaseio.com',
    projectId: 'productapp-85dcc',
    storageBucket: 'rnfirebase-85dcc.appspot.com',
    messagingSenderId: '',
};
firebase.initializeApp(config);

export {firebase};
