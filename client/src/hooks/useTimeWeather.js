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
			.then(response => setTimeWeather({
				timeWeatherData: response.data,
				loadingTimeWeather: false,
			}))
			.catch(err => console.log(err));
		console.log("TtimeWeathe useEffect");
	}, [latitude, longitude]);

	return {...timeWeather};
}

export default useTimeWeather;