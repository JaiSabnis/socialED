
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDRpW2nRR1lWU7CsbBJ-4XQEZ5YrO6qA-8",
    authDomain: "dated-da3dc.firebaseapp.com",
    databaseURL: "https://dated-da3dc.firebaseio.com",
    projectId: "dated-da3dc",
    storageBucket: "dated-da3dc.appspot.com",
    messagingSenderId: "1093720938384",
    appId: "1:1093720938384:web:6a47f8a51324700e27c515"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Get elements 
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const logoutButton = document.getElementById("logoutButton");

// Login pressed 
loginButton.addEventListener('click', e => {

    const email = txtEmail.value ;
    const password = txtPassword.value;
    const auth = firebase.auth();
    const loginError = "Email not registered with datED, sign up please!";

    const promise = auth.signInWithEmailAndPassowrd(email,password);
    promise.catch(e => document.getElementById("error").innerHTML = loginError);


});

registerButton.addEventListener('click', e => {

    const email = txtEmail.value ;
    const password = txtPassword.value;
    const auth = firebase.auth();
    var isEmailValid = tr.split(" ").length == 1 && str.endsWith("@ed.ac.uk");
    const registerError = "Invalid email: please register with a Univeristy of Edinburgh email account";
    const unableRegisterMsg = "We are unable to register you right now, try again later";


if(isEmailValid){
    const promise = auth.createUserWithEmailAndPassowrd(email,password);
    promise.catch(e => document.getElementById("error").innerHTML = unableRegisterMsg );
} else {
     document.getElementById("error").innerHTML = registerError ;
}
});

firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser){
    window.location = 'index.php';
 
}else{
    console.log("Na bruh");

}


});


}());
