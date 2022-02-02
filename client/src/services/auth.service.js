import axios from 'axios';

class AuthService{
	
	constructor(){
		this.axiosApp = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
			withCredentials: true,
			timeout: 5000,
		});
	}

	signup = (email, password) => this.axiosApp.post('/signup', {email, password})
	login = (email, password) => this.axiosApp.post('/login', {email, password})
	logout = (user) => this.axiosApp.get('/logout', {user})
	isLoggedIn = (user) => this.axiosApp.get('/loggedin', user)
}

export default AuthService;