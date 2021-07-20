var firebaseConfig = {
    apiKey: "AIzaSyCI-zBSlR5AiCbF2-uzAMmkP0vIavKPrDk",
    authDomain: "letschat-7755e.firebaseapp.com",
    databaseURL: "https://letschat-7755e-default-rtdb.firebaseio.com",
    projectId: "letschat-7755e",
    storageBucket: "letschat-7755e.appspot.com",
    messagingSenderId: "1045935255168",
    appId: "1:1045935255168:web:b17d9a1fb9f6dbf7678065"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function Send() {

    message = document.getElementById("msg").value;
  
    firebase.database().ref(room_name).push({
  
      username : user_name , 
      message : message , 
      likes : 0
  
    });
  
    document.getElementById("msg").value = "";
  
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
        } });  }); }
  
  getData();
  