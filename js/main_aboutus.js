document.querySelector('.form').style.display = "none";
	var cmt = document.getElementById("ask");
	
	
	cmt.addEventListener("click", (e)=>{
		document.querySelector('.form').style.display = "block";
		
	})
	var send = document.getElementById("send");
	send.addEventListener("click", (e)=>{
		var a = document.getElementById("name").value;
		
		var b = document.getElementById("comment").value;
		if(a === "" || b === ""){
			alert("Please reinput the account")
		}else(
		alert("Your message has been sent")
		)
	})
	
var x = document.getElementById("logout");
x.addEventListener("click", (e)=>{
	window.location="./sign_in.html";
	

})











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	