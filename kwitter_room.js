

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBglaYkI3yJYTK6udMo-XRgs1JFaCy8-uQ",
      authDomain: "kwitter-657cf.firebaseapp.com",
      databaseURL: "https://kwitter-657cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-657cf",
      storageBucket: "kwitter-657cf.appspot.com",
      messagingSenderId: "764529465804",
      appId: "1:764529465804:web:0c6b4b5bdc824bab396569"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function addRoom() {
      room_name = document.getElementById("room_name").Value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}