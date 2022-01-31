import setSunDate from "../utils/setSunDate";
import formatTimeWeather from "../utils/formatTimeWeather";
import Countdown from "./CountDown";

function TimeWeatherDisplay({timeWeatherData, category}){

	const {sunDate, dayOffset} = setSunDate(timeWeatherData, category);

	const {sunTime, temperature, cloudcover } = formatTimeWeather(timeWeatherData, category, dayOffset);

	return(
		<div>
			<p>hora del {category}: {sunTime}</p>
			<Countdown sunDate={sunDate} />
		</div>
	
	)
}

export default TimeWeatherDisplay;