import axios from 'axios';

class AuthService{
	
	constructor(){
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/auth`,
			withCredentials: true,
			timeout: 5000,
		});
	}

	signup = (email, password) => this.axiosApp.post('/signup', {email, password})
	login = (email, password) => this.axiosApp.post('/login', {email, password})
	isLoggedIn = () => this.axiosApp.get('/loggedin')
}

export default AuthService;