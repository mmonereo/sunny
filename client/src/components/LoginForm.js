import Form from '../ui/blocks/Form';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import AuthService from '../services/auth.service';

const myAuthService = new AuthService();

function LoginForm(){

	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const { setUser } = useContext(UserContext);

	const navigate = useNavigate();

	function handleChange(e){
		const {name, value} = e.target;
		setForm({
			...form,
			[name]: value
		})
	}

	function handleSubmit(e){
		e.preventDefault();
		const {email, password} = form;
		console.log("submitting form");
		myAuthService.login(email, password)
			.then(res => {
				setUser(res.data);
				console.log(res.data);
				navigate('/list/all');
			})
			.catch(err => console.log(err));
	}

	return(
		<Form>
			<Form.Title>Log In</Form.Title>
			<Form.FormElement >

				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Input type="email" name="email" placeholder="Email" onChange={handleChange}/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Input type="password" name="password" current-password onChange={handleChange}/>
				</Form.Group>

			</Form.FormElement>
			<input type='submit' value='Submit' onClick={handleSubmit} ></input>
		</Form>
	)
}

export default LoginForm;