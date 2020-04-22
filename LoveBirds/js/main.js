//Function to validate user email and password
function validateUser(){
    var text, mail, user, userEmail, userPassword;
    userEmail="user@gmail.com";
    userPassword="password.user";
    mail=document.getElementById("email").value;
    user=document.getElementById("pass").value;
    if(mail != "" && user != "") {  
        if((mail==userEmail)&&(user==userPassword)){
            text="Login successfully!";
            document.getElementById("message").style.color = "lightgreen";                        
        }
        else{
            text="Invalid Login details!";
            document.getElementById("message").style.color = "red";        
        }
        document.getElementById("message").innerHTML = text;
      }
      else{
            text="Feilds must not be empty!";
            document.getElementById("message").style.color = "red";        
            document.getElementById("message").innerHTML = text;
      }
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.transition = "ease-in 1s";
        x[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.transition = "ease-in 1s";
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Changes image every 2 seconds
}

function openToggle(){
	var toggle1 = document.getElementById("open");
	var toggle2 = document.getElementById("close");
	var navbar = document.getElementById("links");
	navbar.style.display = "block";
	toggle2.style.display = "block";
	toggle1.style.display = "none";

}

function closeToggle(){
	var toggle1 = document.getElementById("open");
	var toggle2 = document.getElementById("close");
	var navbar = document.getElementById("links");
	navbar.style.display = "none";
	toggle2.style.display = "none";
	toggle1.style.display = "block";
}

function showLogin(){
  var slider = document.getElementById("slides");
  var login = document.getElementById("container_login");
  var navbar = document.getElementById("links");
  var reg = document.getElementById("container_reg");
  var cont = document.getElementById("container_contact");
  var about = document.getElementById("container_about");
  about.style.display = "none";
  cont.style.display = "none";
  slider.style.display = "none";
  navbar.style.display = "unset";
  reg.style.display = "none";
  login.style.display = "block";
}


function Register(){
  var slider = document.getElementById("slides");
  var reg = document.getElementById("container_reg");
  var login = document.getElementById("container_login");
  var navbar = document.getElementById("links");
  var cont = document.getElementById("container_contact");
  var about = document.getElementById("container_about");
  about.style.display = "none";
  cont.style.display = "none";
  slider.style.display = "none";
  login.style.display = "none";
  navbar.style.display = "unset";
  reg.style.display = "block";
}

function Home(){
  var slider = document.getElementById("slides");
  var login = document.getElementById("container_login");
  var navbar = document.getElementById("links");
  var reg = document.getElementById("container_reg");
  var cont = document.getElementById("container_contact");
  var about = document.getElementById("container_about");
  about.style.display = "none";
  slider.style.display = "block";
  navbar.style.display = "unset";
  reg.style.display = "none";
  cont.style.display = "none";
  login.style.display = "none";

}

function Contact(){
  var slider = document.getElementById("slides");
  var login = document.getElementById("container_login");
  var cont = document.getElementById("container_contact");
  var navbar = document.getElementById("links");
  var reg = document.getElementById("container_reg");
  var about = document.getElementById("container_about");
  about.style.display = "none";
  slider.style.display = "none";
  navbar.style.display = "unset";
  reg.style.display = "none";
  login.style.display = "none";
  cont.style.display = "block";

}

function About(){
  var slider = document.getElementById("slides");
  var login = document.getElementById("container_login");
  var cont = document.getElementById("container_contact");
  var about = document.getElementById("container_about");
  var navbar = document.getElementById("links");
  var reg = document.getElementById("container_reg");
  about.style.display = "block";
  slider.style.display = "none";
  navbar.style.display = "unset";
  reg.style.display = "none";
  login.style.display = "none";
  cont.style.display = "none";

}