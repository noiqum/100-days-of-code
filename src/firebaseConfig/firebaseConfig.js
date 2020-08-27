import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAAyw-5tP9uk0Wh5kgqqSIu3MdosCq69o8",
    authDomain: "coding-challenge-29d43.firebaseapp.com",
    databaseURL: "https://coding-challenge-29d43.firebaseio.com",
    projectId: "coding-challenge-29d43",
    storageBucket: "coding-challenge-29d43.appspot.com",
    messagingSenderId: "1014741877640",
    appId: "1:1014741877640:web:279b7786a2963e9f74303d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;