import Firebase from 'firebase';

let config = {
    apiKey: 'AIzaSyAOoKlVdFXSFHV7r4wkTU_baTw3bX1V9Zo',
    authDomain: 'productapp-85dcc.firebaseio.com',
    databaseURL: 'productapp-85dcc.firebaseio.com',
    projectId: 'productapp-85dcc',
    storageBucket: 'rnfirebase-85dcc.appspot.com',
    messagingSenderId: '',
};
let app = Firebase.initializeApp(config);

export const db = app.database();
