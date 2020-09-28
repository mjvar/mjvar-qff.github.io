window.onload=function(){
	const menuIcon = document.querySelector(".burger");
	const navbar = document.querySelector(".navbar");
	const tixButt = document.querySelector(".tixbutt");

	menuIcon.addEventListener('click', () => {
		navbar.classList.toggle("open");
		console.log(navbar.classList);
	});

	tixButt.addEventListener('click', () => {
		alert("Your tickets have been reserved! Please check your email for more details. Thank you for reserving with us!");
	});
}