// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBT_VCGhN1rbpyN9r34W9Pyj9HiuxIam24",
  authDomain: "hhub-database.firebaseapp.com",
  projectId: "hhub-database",
  storageBucket: "hhub-database.appspot.com",
  messagingSenderId: "794199320276",
  appId: "1:794199320276:web:569ddddc80cc9cf80cfd41",
  measurementId: "G-GVXRNPJM3R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

// Add a new document in collection "cities"
db.collection("users").doc(uid).set({
    uname: user,
    fname: first,
    lname: last
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
