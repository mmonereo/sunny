import { useState, useEffect } from "react";
import TimeWeatherService from "../services/time-weather.service";
import formatTimeWeather from "../utils/formatTimeWeather";

const myTimeWeatherService = new TimeWeatherService();

function useTimeWeather(latitude, longitude, category){

	const [timeWeather, setTimeWeather] = useState({
		timeWeatherData: {},
		loadingTimeWeather: true,
	});

	useEffect(() => {
		myTimeWeatherService.getTimeWeather(latitude, longitude )
			.then(timeWeather => setTimeWeather({
				timeWeatherData: formatTimeWeather(timeWeather.data, category),
				loading: false,
			}))
			.catch(err => console.log(err));
	}, []);

	return {...timeWeather};
}

export default useTimeWeather;