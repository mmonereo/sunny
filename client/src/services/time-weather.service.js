import axios from "axios";

class TimeWeatherService{
	constructor(){
		this.axiosApp = axios.create({
			baseURL: `https://api.open-meteo.com/v1/forecast`,
		});
	}

	getTimeWeather = (latitude, longitude) => this.axiosApp.get(`?latitude=${latitude}&longitude=${longitude}&hourly=cloudcover,temperature_2m&daily=sunrise,sunset&timezone=Europe%2FBerlin`);

}

export default TimeWeatherService;