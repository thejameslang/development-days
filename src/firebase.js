import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKkFCY4JeqZ3pILPzSPuZeZe4j-3FBlDM",
  authDomain: "development-days.firebaseapp.com",
  databaseURL: "https://development-days.firebaseio.com",
  projectId: "development-days",
  storageBucket: "development-days.appspot.com",
  messagingSenderId: "770484901324",
  appId: "1:770484901324:web:491229bd1544f62b993969"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
