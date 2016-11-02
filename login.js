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


var listEits = [ 
'winnie.akoko@meltwater.org',
'anthony.kariuki@meltwater.org',
'ayodeji.oyinloye@meltwater.org',
'andrew.njage@meltwater.org',
'charles.agyemang@meltwater.org',
'stephen.amaza@meltwater.org',
'emmanuel.akin-awokoya@meltwater.org',
'kwaku.boateng@meltwater.org',
'frederick.boateng@meltwater.org',
'olorunfemi.bilesanmi@meltwater.org',
'chris.bimpong@meltwater.org',
'clement.udensi@meltwater.org',
'solomon.daboni@meltwater.org',
'eric.ondenyi@meltwater.org',
'gbekeloluwa.olufotebi@meltwater.org',
'hazel.otieno@meltwater.org',
'kelvin.wachira@meltwater.org',
'stella.ngugi@meltwater.org',
'nancy.ewurum@meltwater.org',
'solomon.appiah@meltwater.org',
'tony.marfo@meltwater.org',
'joseph.abokpoe@meltwater.org',
'teresa.wambugu@meltwater.org',
'thabiso.mokoena@meltwater.org',
'sakhile.xulu@meltwater.org',
'bongane.tshabangu@meltwater.org',
'david.obi@meltwater.org',
'duncan.muriithi@meltwater.org',
'dennis.damalie@meltwater.org',
'ebenezer.owusu@meltwater.org',
'gerald.munyingi@meltwater.org',
'gilbert.okiya@meltwater.org',
'joshua.ihejiamaizu@meltwater.org',
'joshua.oguntade@meltwater.org',
'hazel.otieno@meltwater.org',
'julius.ngigi@meltwater.org',
'jessica.agbanu@meltwater.org',
'john.otu@meltwater.org',
'joy.michael@meltwater.org',
'josephine.dassah@meltwater.org',
'mercy.kinoti@meltwater.org',
'kwame.sarpong@meltwater.org',
'neville.masheti@meltwater.org',
'margaret.aoko@meltwater.org',
'zolile.nonzapa@meltwater.org',
'peter.adu@meltwater.org',
'ugochukwu.onyejiaka@meltwater.org',
'john.muchiri@meltwater.org',
'luqman.musah@meltwater.org',
'edna.sawe@meltwater.org',
'yaw@meltwater.org',
'ashwin@meltwater.org',
'Jerry@meltwater.org',
'raquel@meltwater.org',
'dziffa@meltwater.org',
'enoch@meltwater.org',
'lars@meltwater.org',
'mike@meltwater.org']



const email  = document.getElementById('email');
const password = document.getElementById('pass');
const signInBtn = document.getElementById('btnSignIn'); 
const signUpBtn = document.getElementById('btnSignUp'); 
const signInParagraph = document.getElementById('signInParagraph');
const signUpParagraph = document.getElementById('signUpParagraph');


function removeSignUp () {

	signUpBtn.classList.remove('hidden');
	signInParagraph.classList.remove('hidden');
	signUpParagraph.classList.add('hidden');
	signInBtn.classList.add('hidden');
	
}

function removeSignIn () {

	signUpBtn.classList.add('hidden');
	signInParagraph.classList.add('hidden');
	signUpParagraph.classList.remove('hidden');
	signInBtn.classList.remove('hidden');

	
}



signUpBtn.addEventListener('click', e => {
	//TODO: check for real meltwater email.
	const lemail =  email.value;
	const lpass  =  password.value;
	const  auth   = firebase.auth();

	if (listEits.indexOf(lemail) != -1){
	 	const promise = auth.createUserWithEmailAndPassword(lemail, lpass)
		promise.catch(e => console.log(e.message));

		//window.alert('SignUp Successful')
	 }else{
	 	window.alert("Wrong meltwater email")
	 }
})


signInBtn.addEventListener('click', e =>{

	const lemail   =  email.value;
	const lpass    =     password.value;
	const auth     = firebase.auth();
	const promise  = auth.signInWithEmailAndPassword(lemail, lpass)
	promise.catch(e => console.log(e.message));

})


firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser)
		window.location.href = 'proj/HTML/price.html'
	} else {
		console.log('not logged in')
		
		//please login
		//show log in button

	}
})





