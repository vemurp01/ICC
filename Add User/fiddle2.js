/************************************************************************************************************************

Title           :   fiddle2.js        
Developer       :   Poojitha Vemuri  
Page Description:   scripting of the page fiddle2.html
		    Validations and add_user() function to capture the email and name to display on the screen.
					
**************************************************************************************************************************/
function validate() {
	
var first_name = document.getElementById("FirstName").value;
var Email 	   = document.getElementById("Email").value;
var pattern    = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
var error 	   = document.getElementById("error");
var newElement = document.createElement('li');

//valiadations

if (first_name == '' || Email == '') {
error.innerHTML="Please fill all the fields";
return false;
}if(pattern.test(Email)==false) {
error.innerHTML="Please fill a valid email address";
return false;
} else {
	
// When Both of the inputs are valid, implement add_user function.
error.innerHTML="";
add_user();
}
return true;
}
function add_user() {
var default_msg = document.getElementById("default_msg");
var first_name  = document.getElementById("FirstName").value;
var Email       = document.getElementById("Email").value;
var static_div  = document.getElementById("static_div")
var newElement  = document.createElement('li');

//default message is "no users added to show" will be hidden
default_msg.style.display="none";

//show first_name and email added 
newElement.innerHTML = "First Name : " + first_name + "<br>" + "Email : " + Email;
static_div.appendChild(newElement); 
}
