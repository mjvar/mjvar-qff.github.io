const menuIcon = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
	navbar.classList.toggle("open");
	console.log(navbar.classList);
});