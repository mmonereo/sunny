import Nav from "../ui/blocks/Nav";
import ModalComponent from '../components/ModalComponent.js';
import LoginForm from '../components/LoginForm';
import SignupForm from "./SignupForm";
import { useState } from "react";

function AuthNav(){

	const [showModalLogin, setShowModalLogin] = useState(false);

	const [showModalSignup, setShowModalSignup] = useState(false);


	function toggleShowModalLogin(){
		setShowModalLogin(!showModalLogin);
	}

	function toggleShowModalSignup(){
		setShowModalSignup(!showModalSignup);
	}


	return(
		<Nav>
			<Nav.List>

				<Nav.Item>
					<Nav.Input onClick={toggleShowModalLogin} value="Login" type="button"/>
					<ModalComponent hideModal={toggleShowModalLogin} showModal={showModalLogin}>
						<LoginForm />
					</ModalComponent>
				</Nav.Item>

				<Nav.Item>
					<Nav.Input onClick={toggleShowModalSignup} value="Signup" type="button"/>
					<ModalComponent hideModal={toggleShowModalSignup} showModal={showModalSignup}>
						<SignupForm />
					</ModalComponent>
				</Nav.Item>

			</Nav.List>
		</Nav>
	);
}

export default AuthNav;