$(document).ready(function(){
    $("#signup").on("click",function(){
       email =  $("#email").val()
       pass =   $("#password").val()
       
       firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
       
       }).then(function(){
         
            firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
           window.location.href = "mainpage.html";
        })
           
         
      })
    })
})