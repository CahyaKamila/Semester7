// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword,
signInWithEmailAndPassword, signUp } from "https://www.gstatic.com/firebase.js/9.8.2/firebase-auth.js" ;


import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebase.js/9.8.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqEcFp9O0fvol9bt9qmuEFksdr5dvk-HU",
  authDomain: "authfirebase-695f4.firebaseapp.com",
  databaseURL: "https://authfirebase-695f4-default-rtdb.firebaseio.com",
  projectId: "authfirebase-695f4",
  storageBucket: "authfirebase-695f4.appspot.com",
  messagingSenderId: "706685533946",
  appId: "1:706685533946:web:3abc7af0bd2eb77eccd343"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const buttonSignup = document.getElementById("button_signup");
const buttonSignin = document.getElementById("button_sigin");


buttonSignup.addEventListener('click', (e)=> {
  let name = document.getElementById("name").value;
  let emailsignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value; 

  createUserWithEmailAndPassword(auth, emailsignup, passwordSignup)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    set(ref(database, "users/" + user.uid), {
      name: name,
      email: emailsignup,
      password: passwordSignup
    });
    // ...
  }),
    then(()=>{
      alert("User Telah ditambahkan");
    })
      .catch((error) => {
      alert(error);
    })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
       });
}); 