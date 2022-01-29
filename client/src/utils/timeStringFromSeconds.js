function timeStringFromSeconds(seconds){
	const hours = Math.floor(seconds / 3600).toFixed().padStart(2, '0');
	const minutes = Math.floor((seconds - hours * 3600) / 60).toFixed().padStart(2, '0');
	const secondsLeft = (seconds - hours * 3600 - minutes * 60).toFixed().padStart(2, '0');
	return `${hours}:${minutes}:${secondsLeft}`;
}

export default timeStringFromSeconds;