function registerhere(event){

	event.preventDefault();
let name= document.getElementById("name").value;
let	email= document.getElementById("email").value;
let phone = document.getElementById("phone").value;

	document.getElementById("result").innerHTML=
	
	"Name:"+ name+ "<br>"+
	"email:"+ email+ "<br>"+
	"phone:"+ phone;
	
	alert("Registration Successfully !");
	alert("Welcome GeoEstate.com!");
}