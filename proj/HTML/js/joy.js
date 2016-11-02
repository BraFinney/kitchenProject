
(function () {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOPFOtL7a-A2C9vWwt9Sg_pO3lkUxzLMk",
    authDomain: "kitchenapp-bd5e0.firebaseapp.com",
    databaseURL: "https://kitchenapp-bd5e0.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "14211257786"
  };
  firebase.initializeApp(config);

})();


firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		alert(firebaseUser)
	} else {
		console.log('not logged in')
		window.location.href = '../../index.html'
		//please login
		//show log in button

	}
})



var btnLogOut = document.getElementById('logOut');

btnLogOut.addEventListener('click', e =>{
	firebase.auth().signOut()
})




function select (idSelected, idUnselected){	
	document.getElementById(idSelected).style.background='red'; 
	document.getElementById(idUnselected).style.background='white';
	document.getElementById(idUnselected).disabled = true;
	
	if (idSelected.slice(-3) === "Yes") {
		//obj[idSelected.slice(0,-3)] += 1
		prompt("you chose Yes");

	}else{

		//obj[idSelected.slice(0,-3)] += 0 
		prompt("you chose No");
	}
}


function changeYourMind (cymId, idSelected, idUnselected) {
	document.getElementById(idSelected).style.background='white'; 
	document.getElementById(idUnselected).style.background='white';
}

function misplace () {
	document.getElementById('coffcoff').style.visibilty = 'hidden';
}
