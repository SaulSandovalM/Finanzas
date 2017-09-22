import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAZl1JWd1nX2kSzJSdrH1fOtwlKOQJNqX0",
  authDomain: "finazas-7e923.firebaseapp.com",
  databaseURL: "https://finazas-7e923.firebaseio.com",
  projectId: "finazas-7e923",
  storageBucket: "",
  messagingSenderId: "876453280283"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth()
export default firebase;
