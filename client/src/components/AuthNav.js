import Nav from "../ui/blocks/Nav";
import ModalComponent from '../components/ModalComponent.js';
import LoginForm from '../components/LoginForm';
import SignupForm from "./SignupForm";
import useShowModal from '../hooks/useShowModal.js';

function AuthNav(){

	const { showModal, displayModal, hideModal } = useShowModal();

	return(
		<Nav>
			<Nav.List>

				<Nav.Item>
					<Nav.Input onClick={displayModal} value="Login"/>
					<ModalComponent hideModal={hideModal} showModal={showModal}>
						<LoginForm />
					</ModalComponent>
				</Nav.Item>

				<Nav.Item>
					<Nav.Input onClick={displayModal} value="Signup" />
					<ModalComponent hideModal={hideModal} showModal={showModal}>
						<SignupForm />
					</ModalComponent>
				</Nav.Item>

			</Nav.List>
		</Nav>
	);
}

export default AuthNav;