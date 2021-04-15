// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAfCCO-DiB4_yu0vPhMhK1z-uVz_kemGL8",
      authDomain: "kwitter-a3390.firebaseapp.com",
      databaseURL: "https://kwitter-a3390-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3390",
      storageBucket: "kwitter-a3390.appspot.com",
      messagingSenderId: "1036707766721",
      appId: "1:1036707766721:web:1f812f75eceda253aacf40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "WELCOME " + username + "!";

function addroom() {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "Adding Roomname"
      });
      localStorage.setItem("Roomname", roomname);
      window.location = "HeyChat_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomname(name) {
      localStorage.setItem("Roomname", name);
      console.log(name);
      window.location = "HeyChat_page.html";
}

function logout(){
      localStorage.removeItem("Roomname");
      localStorage.removeItem("username")
      window.location="index.html";
  }