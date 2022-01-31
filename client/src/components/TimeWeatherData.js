import	useTimeWeather from '../hooks/useTimeWeather';
import TimeWeatherDisplay from './TimeWeatherDisplay';

function TimeWeatherData ({latitude, longitude, category}){

	const {timeWeatherData, loadingTimeWeather} = useTimeWeather(latitude, longitude);

	return(
		<div>
			{loadingTimeWeather ? <h2>Loading...</h2> : <TimeWeatherDisplay timeWeatherData={timeWeatherData} category={category} />}
		</div>
	);
}

export default TimeWeatherData;