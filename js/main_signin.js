
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
		var x = document.getElementById('form');
		
		// var email = document.getElementById("mail").value;
		// var pass = document.getElementById("pass").value;
		//pass = parseInt(pass);
		x.addEventListener("submit", function(event){
			// var email = document.getElementById("mail").value;
			// var pass = document.getElementById("pass").value;
			//console.log(email);
			//console.log(pass);
			//pass = parseInt(pass);
			//console.log(pass > 12345);
			//console.log(email === "admin@admin");
			event.preventDefault();
			var email = document.getElementById("mail").value;
			var pass = document.getElementById("pass").value;
			//console.log(email === "admin@admin" && pass === "12345");
			
			if(email === "admin" && pass === "12345"){
				window.location="./home.html";
				//alert("......");
				 //window.location.href = "https://www.google.com";

			}else{
				alert("Please check your email/password");
			};
		})
 