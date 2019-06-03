import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtaljoLxR_wAOOrG-KlXPYqZk8bA3nyRY",
    authDomain: "net-ninja-sandbox-b4a58.firebaseapp.com",
    databaseURL: "https://net-ninja-sandbox-b4a58.firebaseio.com",
    projectId: "net-ninja-sandbox-b4a58",
    storageBucket: "net-ninja-sandbox-b4a58.appspot.com",
    messagingSenderId: "976832134886",
    appId: "1:976832134886:web:57e2915a4b393a6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots:true });

export default firebase;