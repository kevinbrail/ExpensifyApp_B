import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDSBsCJR9yR5UFb1OPKY2zAi3DY_pVYH1Y",
    authDomain: "expensify-74fe0.firebaseapp.com",
    databaseURL: "https://expensify-74fe0.firebaseio.com",
    projectId: "expensify-74fe0",
    storageBucket: "expensify-74fe0.appspot.com",
    messagingSenderId: "1084283285581"
  };
  firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };