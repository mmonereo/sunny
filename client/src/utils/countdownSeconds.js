// returns difference between current date and date of the sun in seconds for countdown
function countdownSeconds(sunDate){
	const sunSeconds = sunDate.getTime() / 1000;
	const currentSeconds = new Date() / 1000;
	const countdownSeconds = Math.abs(sunSeconds - currentSeconds);
	return countdownSeconds;
}

export default countdownSeconds;