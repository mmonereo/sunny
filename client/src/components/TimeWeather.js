import useTimeWeather from "../hooks/useTimeWeather";
import Countdown from "./CountDown";


function TimeWeather ({coordinates, category}){

	const { timeWeatherData, loadingTimeWeather } = useTimeWeather(coordinates[0], coordinates[1], category);


	return(
		<div>
			{loadingTimeWeather ? <h2>Loading Time and Weather</h2> :
			<>
			<p>{timeWeatherData.sunTime} {timeWeatherData.temperature} {timeWeatherData.cloudcover}</p>
			<Countdown sunTime={timeWeatherData.sunTime} />
			</>}
		</div>
	);
}

export default TimeWeather;