var firebaseConfig = {
    apiKey: "AIzaSyDITlIr9K6un7niiVSJUqo0n9L0V5vV93E",
    authDomain: "fir-f350b.firebaseapp.com",
    databaseURL: "https://fir-f350b.firebaseio.com",
    projectId: "fir-f350b",
    storageBucket: "",
    messagingSenderId: "703789920506",
    appId: "1:703789920506:web:00fa91f7c0031b89aed943"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var messageRef=firebase.database().ref("list")
document.getElementById("contactForm").addEventListener("submit",submitform)
function submitform(e){
    e.preventDefault()
    // methode js
var name =document.getElementById("name").value;
// methode jquerry
var tracks=$("#tracks").val()
var email = $("#email").val()
var phone = $ ("#phone").val()
saveMessage(name,email,tracks,phone);
document.getElementById("contactForm").reset();
}
// save message to fire base 
function saveMessage(name,email,tracks,message){
    var newMessageRef=  messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        password:tracks,
        message:message
    });
}


