import { useState, useEffect } from "react";
import TimeWeatherService from "../services/time-weather.service";

const myTimeWeatherService = new TimeWeatherService();

function useTimeWeather(latitude, longitude){

	const [timeWeather, setTimeWeather] = useState({
		timeWeatherData: {},
		loadingTimeWeather: true,
	});

	useEffect(() => {
		myTimeWeatherService.getTimeWeather(latitude, longitude )
			.then(timeWeather => setTimeWeather({
				timeWeatherData: timeWeather.data,
				loading: false,
			}))
			.catch(err => console.log(err));
	}, []);

	return {...timeWeather};
}

export default useTimeWeather;