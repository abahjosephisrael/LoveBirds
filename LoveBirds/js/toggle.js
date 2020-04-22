function toggle(){
	var toggle1 = document.getElementById("toggle1");
	var toggle2 = document.getElementById("toggle2");
	var navbar = document.getElementById("navbar");
	navbar.style.display = "block";
	toggle2.style.display = "block";
	toggle1.style.display = "none";

}

function toggle2(){
	var toggle1 = document.getElementById("toggle1");
	var toggle2 = document.getElementById("toggle2");
	var navbar = document.getElementById("navbar");
	navbar.style.display = "none";
	toggle2.style.display = "none";
	toggle1.style.display = "block";
	

}