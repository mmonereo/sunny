
// Get sunrise/sunset time from API raw data and format it
function formatTime(data, category, dayOffset){
	const day = dayOffset ? 1 : 0;
	const rawTime = category === 'sunset' ? data.daily.sunset[day] : data.daily.sunrise[day];
	const formattedTime = rawTime.substring(11);
	return formattedTime;
}

// API hourly weather info comes in an array where first index is 00:00 and index 23 is 24:00
function hourlyIndex(formattedTime, dayOffset){
	const day = dayOffset ? 2 : 1;
	const hours = parseInt(formattedTime.slice(0, 2));
	const minutes = parseInt(formattedTime.slice(3, 5));
	const hourlyIndex = Math.round(hours + minutes / 100 * day);
	return hourlyIndex; 
}

// returns the weather info and time for the given sunrise/sunset from the raw API data
function formatTimeWeather(data, category, dayOffset){
	const sunTime = formatTime(data, category, dayOffset);
	const index = hourlyIndex(sunTime, dayOffset);
	const temperature = data.hourly.temperature_2m[index];
	const cloudcover = data.hourly.cloudcover[index];
	return {sunTime, temperature, cloudcover};
}

export default formatTimeWeather;