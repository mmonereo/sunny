import axios from 'axios';

class SunService {

	constructor(){
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/suns`,
			withCredentials: true
		});
	}

	getAllSuns = () => this.axiosApp.get('/list/all');

	getSunsByCategory = ((category) => {
		if ((category !== 'sunrise') && (category !== 'sunset')){
			return;
		}

		return	this.axiosApp.get(`/list/${category}`)
	});

	getSunById = (id) => this.axiosApp.get(`/list/${id}`);

}

export default SunService;