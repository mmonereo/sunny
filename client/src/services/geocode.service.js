import axios from 'axios';
class GeoCodeService {

	constructor() {
		this.axiosApp = axios.create({
			baseUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
		})
		this.key = `&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
	}

	getCoordinates = (address) => {
	return this.axiosApp.get(`${this.key}+${address}`)
		
	}
}

export default GeoCodeService;