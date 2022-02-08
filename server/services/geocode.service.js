const axios = require('axios');

class GeoCodeService {

	constructor(){
		this.axiosApp = axios.create({
			baseURL: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
		})
		this.key = `&key=${process.env.GOOGLE_API_KEY}`;
	}

	getCoordinates = (address) => {

		return this.axiosApp.get(`${address}${this.key}`)
				.then(response => {
					console.log(response)
					const { lat, lng } = response.data.results[0].geometry.location;
					return { coordinates: [lat, lng] };
				})
				.catch(err => console.log(err.response));
	} 
}

module.exports = GeoCodeService;