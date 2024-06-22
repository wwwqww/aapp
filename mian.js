
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-datale";
    import { } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
    import {  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-functions.js";
    import {  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC9w5vjNMBo9mG1ke0lEadzgGVkB7Ex8-U",
    authDomain: "command-93e18.firebaseapp.com",
    projectId: "command-93e18",
    storageBucket: "command-93e18.appspot.com",
    messagingSenderId: "1002951082955",
    appId: "1:1002951082955:web:56fa975330a791c43a2c4e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click', function(e){
  set(ref (db, 'user/' + document.getElementById("username").value)
  {
  username: document.getElementById("username").value,
  email: document.getElementById("email").value,

  }); alert("Login Sucessfull !");
  
  })