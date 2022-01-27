import useTimeWeather from "../hooks/useTimeWeather";

function TimeWeather ({coordinates}){

	const { timeWeatherData, loadingTimeWeather } = useTimeWeather(coordinates[0], coordinates[1]);
	console.log(timeWeatherData);

	return(
		<div>weather panel</div>
	);
}

export default TimeWeather;