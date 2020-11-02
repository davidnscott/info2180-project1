/* Add your JavaScript to this file */
window.onload=function(){
	var btn = document.getElementsByClassName("btn")[1];
	btn.addEventListener("click", function(e){
		var email = document.getElementById("email").value;
		var msg = document.getElementsByClassName("message")[0];
		if (email.length != 0 && email.includes("@")){
			msg.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
		}
		else{
			msg.textContent = "Please enter a valid email address";
		}
		e.preventDefault();
	});
	
}