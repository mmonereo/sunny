import axios from 'axios';

class AuthService{
	
	constructor(){
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/auth`,
			withCredentials: true,
			timeout: 5000,
		});
	}

	signup = (user) => this.axiosApp.post('/signup', user)
	login = (user) => this.axiosApp.post('/login', user)
	isLoggedIn = () => this.axiosApp.get('/loggedin')
}

export default AuthService;