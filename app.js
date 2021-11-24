// Abdul Qadir
const firebaseConfig = {
    apiKey: "AIzaSyCTY5YEi9ICFuS8xe0GNx0KxkzENdDEeNs",
    authDomain: "intern-1776c.firebaseapp.com",
    projectId: "intern-1776c",
    storageBucket: "intern-1776c.appspot.com",
    messagingSenderId: "849921290488",
    appId: "1:849921290488:web:17aaf0feb28cf1b022cb0d",
    measurementId: "G-1L049ZZC1C"
  };

  firebase.initializeApp(firebaseConfig);
  let firebase_db = firebase.firestore();
  //Register
async function signup() {
  let username = document.getElementById('username').value
  let useremail = document.getElementById('useremail').value
  let userpass = document.getElementById('userpassword').value

  try {
      await firebase.auth().createUserWithEmailAndPassword(useremail, userpass)
      const user = await firebase.auth().currentUser
      if(user !== null)
      {
        user.updateProfile(
          {
            displayName: username,
          }
        )
      }
      console.log(user.displayName)
   window.location = "./home.html"
  }
  catch (error) {
    console.log(error.message)
  }
}

// Login
async function login() {
  let loggeduseremail = document.getElementById('loggeduseremail').value
  let loggeduserpass = document.getElementById('loggeduserpass').value
  try {
    let loginResult = await firebase.auth().signInWithEmailAndPassword(loggeduseremail, loggeduserpass)
    
  }
  catch (error) {
    alert("Your Crediential are not valid, Kindly recheck your crediential")

  }
}
