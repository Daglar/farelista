$(document).ready(function(){

  var config = {
      apiKey: "AIzaSyBOGRjpA2s-1ZUKBTj2h8VPaZcylbEIZ1Q",
      authDomain: "ertuda-tourism.firebaseapp.com",
      databaseURL: "https://ertuda-tourism.firebaseio.com",
      projectId: "ertuda-tourism",
      storageBucket: "ertuda-tourism.appspot.com",
      messagingSenderId: "388853644233",
      appId: "1:388853644233:web:6239c119a9848c9d"
    };
  firebase.initializeApp(config);


  $("#signin").click(function(){

      var email = $("#email").val();
      var password = $("#password").val();

      firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function(){
              window.location.href = "mainpage.html";
          }).catch(function(error){
              alert(error.message);
      })


  })

})