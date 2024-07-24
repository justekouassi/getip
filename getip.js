document.addEventListener("DOMContentLoaded", function () {
	/* Déclaration des événements */
	document.querySelector("div#reload").addEventListener("click", loadGetMyIP);
	document.querySelector("div#myip").addEventListener("click", copyMyIP);
	document.querySelector("div#about").addEventListener("click", function () {
		document.querySelector("div#info").style.display = "block";
	});
	document.querySelector("div#close").addEventListener("click", function () {
		document.querySelector("div#info").style.display = "none";
	});
	document.querySelector("#myip").addEventListener("mouseenter", function () {
		document.querySelector("div#help").style.color = "#333";
	});
	document.querySelector("#myip").addEventListener("mouseleave", function () {
		document.querySelector("div#help").style.color = "#aaa";
	});
	/* Chargement initial de l'adresse IP */
	loadGetMyIP();
});