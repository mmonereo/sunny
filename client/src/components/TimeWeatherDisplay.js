import setSunDate from "../utils/setSunDate";
import formatTimeWeather from "../utils/formatTimeWeather";
import Countdown from "./CountDown";

// generates date object after cheking if the sun is today or tomorrow
// then it gets the weather and time from the API raw response

function TimeWeatherDisplay({timeWeatherData, category}){

	const {sunDate, dayOffset} = setSunDate(timeWeatherData, category);

	const {sunTime, temperature, cloudcover } = formatTimeWeather(timeWeatherData, category, dayOffset);

	return(
		<div>
			<p>hora del {category}: {sunTime}</p>
			<p>temperatura: {temperature}</p>
			<p>porcentaje de nubes: {cloudcover}</p>
			<Countdown sunDate={sunDate} />
		</div>
	
	)
}

export default TimeWeatherDisplay;