sports = ["Archery", "Athletics", "Badminton", "Baseball / Softball", "Basketball", "Fencing", "Football", "Golf", "Hockey", "Rowing", "Rugby", "Shooting", "Skateboarding", "Sport Climbing", "Surfing", "Swimming", "Table Tennis", "Volleyball"];

const main = document.getElementById("main");

const title = document.getElementById("event-title");
title.innerHTML = "Available Sports";

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