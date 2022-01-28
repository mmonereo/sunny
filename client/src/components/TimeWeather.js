import useTimeWeather from "../hooks/useTimeWeather";
import formatTimeWeather from "../utils/formatTimeWeather";

function TimeWeather ({coordinates, category}){

	const { timeWeatherData, loadingTimeWeather } = useTimeWeather(coordinates[0], coordinates[1]);
	if (!loadingTimeWeather){
		
		console.log(formatTimeWeather(timeWeatherData, category));
	}

	return(
		<div>weather panel</div>
	);
}

export default TimeWeather;