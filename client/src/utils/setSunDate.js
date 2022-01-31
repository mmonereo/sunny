// Check if the required sunrise/sunset is today or tomorrow and set the date accordingly

function checkDayDate(hours, minutes) {

	const dateInfo = {
		sunDate: null,
		dayOffset: false,
	}

	let sunTime = new Date();
	sunTime.setHours(hours, minutes);
	let today = new Date();

	if (sunTime.getTime() < today.getTime()) {
		dateInfo.sunDate = new Date(sunTime.getTime() + 86400000);
		dateInfo.dayOffset = true;
	}
	else {
		dateInfo.sunDate = sunTime;
	}

	return dateInfo;
}

function setSunDate(data, category) {

	let rawTime = category === 'sunset' ? data.daily.sunset[0] : data.daily.sunrise[0];
	let formattedTime = rawTime.substring(11);
	const hours = parseInt(formattedTime.slice(0, 2));
	const minutes = parseInt(formattedTime.slice(3, 5));
	const dateInfo = checkDayDate(hours, minutes);
	return dateInfo;
}

export default setSunDate;