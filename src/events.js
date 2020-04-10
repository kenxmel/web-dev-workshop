sports = ["3x3 Basketball", "Archery", "Artistic Gymnastics", "Artistic Swimming", "Athletics", "Badminton", "Baseball / Softball", "Basketball", "Beach Volleyball", "Boxing", "Canoe Slalom", "Canoe Sprint", " Cycling BMX Freestyle", "Cycling BMX Racing"]

const main = document.getElementById("main");

const title = document.getElementById("event-title");
title.textContent = "Olympic Sports";

for (let i = 0; i < sports.length; i++) {
	const sportsContainer = document.createElement("div");
	sportsContainer.className = "sports-container";
	
	const sportsImage = document.createElement("img");
	sportsImage.src = "../assets/placeholder.png";
	sportsImage.alt = sports[i];
	sportsImage.className = "sports-image";

	const sportsName = document.createElement("div");
	sportsName.className = "sports-name";

	const textNode = document.createTextNode(sports[i]);

	sportsName.appendChild(textNode);
	sportsContainer.appendChild(sportsImage);
	sportsContainer.appendChild(sportsName);
	main.appendChild(sportsContainer);
}