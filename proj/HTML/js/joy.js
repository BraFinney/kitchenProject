var obj = {
	coffee: 0,
	tea: 0,
	oats: 0
}



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