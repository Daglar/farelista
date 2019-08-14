$(document).ready(function(){

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOGRjpA2s-1ZUKBTj2h8VPaZcylbEIZ1Q",
    authDomain: "ertuda-tourism.firebaseapp.com",
    databaseURL: "https://ertuda-tourism.firebaseio.com",
    projectId: "ertuda-tourism",
    storageBucket: "ertuda-tourism.appspot.com",
    messagingSenderId: "388853644233",
    appId: "1:388853644233:web:6239c119a9848c9d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //add user
  $("#signup").on("click",function(){
    email =  $("#email").val()
    pass =   $("#password").val()

    firebase.database().ref("users/").set({
        adin:"Daglar",
        soyadin:"Semedli"
    }).catch(function(error){
        console.log(error.message)
    })
    /*firebase.auth().createUserWithEmailAndPassword(email, pass)
     .then(function(){
        
     }).catch(function(error){
        alert(error.message);
     })*/
 }) 
})
