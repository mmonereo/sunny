
function sunTimeToSeconds(sunTime){
	const sunHours = parseInt(sunTime.slice(0, 2));
	const sunminutes = parseInt(sunTime.slice(3, 5));
	const sunSeconds = sunHours * 3600 + sunminutes * 60;
	return sunSeconds;
}

function currentTimeToSeconds (){
	const now = new Date();
	const currentHours = now.getHours();
	const currentMinutes = now.getMinutes();
	const currentSeconds = currentHours * 3600 + currentMinutes * 60;
	return currentSeconds;
}

function countdownSeconds(sunTime){
	const sunSeconds = sunTimeToSeconds(sunTime);
	const currentSeconds = currentTimeToSeconds();
	const countdownSeconds = sunSeconds - currentSeconds;
	return countdownSeconds;
}

export default countdownSeconds;