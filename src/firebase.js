import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB3yIH7CFvsP0hN3sgSbIxTDIENHbBQPB0",
  authDomain: "clone1-react.firebaseapp.com",
  databaseURL: "https://clone1-react.firebaseio.com",
  projectId: "clone1-react",
  storageBucket: "clone1-react.appspot.com",
  messagingSenderId: "860233932078",
  appId: "1:860233932078:web:118a3488b7fc10e0076ebf",
  measurementId: "G-BJ84QMQF22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
