
// Get sunrise/sunset time from API raw data and format it
function formatTime(data, category){

	let rawTime = category === 'sunset' ? data.daily.sunset[0] : data.daily.sunrise[0];
	let formattedTime = rawTime.substring(11);
	return formattedTime;
}

// API hourly weather info comes in an array where first index is 00:00 and index 23 is 24:00
function hourlyIndex(formattedTime){
	const hours = parseInt(formattedTime.slice(0, 2));
	const minutes = parseInt(formattedTime.slice(3, 5));
	const hourlyIndex = Math.round(hours + minutes / 100);
	return hourlyIndex; 
}

// returns the weather info and time for the given sunrise/sunset from the raw API data
function formatTimeWeather(data, category){
	const sunTime = formatTime(data, category);
	const index = hourlyIndex(sunTime);
	const temperature = data.hourly.temperature_2m[index];
	const cloudcover = data.hourly.cloudcover[index];
	return {sunTime, temperature, cloudcover};
}

export default formatTimeWeather;