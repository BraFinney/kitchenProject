
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




$(document).ready(function (){
	var $countB = 0;
	var $countL = 0;
	var $countD = 0;

	$('#logOut').click(function (){
		firebase.auth().signOut()

	})

	$('.yesB').click(function (){	
		$(this).css({'background-color' : 'red'})
		$countB += 1
		if ($countB == 3) {

			$("#breakfastBox").hide();

		}
	})

	$('.yesL').click(function (){	
		$(this).css({'background-color' : 'red'})
		$countL += 1
		if ($countL == 5) {

			$("#lunchBox").hide();

		}
	})

	$('.yesD').click(function (){	
		$(this).css({'background-color' : 'red'})
		$countD += 1
		if ($countD == 5) {

			$("#dinnerBox").hide();

		}
	})

	


})//end of 



