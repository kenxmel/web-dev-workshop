function timeDifference() {
	let date = new Date();
	date = date.getTime();

	const olympicDate = new Date('2021-07-23');

	const difference = olympicDate - date;

	const timer = document.getElementById("timer");
	timer.innerHTML = msToTime(difference);

	setTimeout(timeDifference, 1000);
}

function msToTime(duration) {
	duration = duration / 1000;
	let days = Math.floor(duration / (3600 * 24));
	let hours = Math.floor((duration % (3600 * 24)) / 3600);
	hours = ("0" + hours).slice(-2);
	let minutes = Math.floor(((duration % (3600 * 24)) % 3600) / 60);
	minutes = ("0" + minutes).slice(-2);
	let seconds = Math.floor(((duration % (3600 * 24)) % 3600) % 60);
	seconds = ("0" + seconds).slice(-2);

	return days + " : " + hours + " : " + minutes + " : " + seconds;
}

timeDifference();