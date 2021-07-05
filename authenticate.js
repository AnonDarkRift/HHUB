

const account_form = document.querySelector("#login-content")
account_form.addEventListner("#register-register", (e) => {
  const email = account_form["uname"].value;
  const password = account_form["pword"].value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    return db.collection("users").doc(user).set({
      fname: account_form["fname"].value,
      lname: account_form["lname"].value
    })
    alert("test")
    })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
 });
})

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
