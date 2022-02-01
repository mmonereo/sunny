import ModalComponent from '../components/ModalComponent.js';
import LoginForm from '../components/LoginForm';
import useShowModal from '../hooks/useModal.js';


function Landing(){

	const {showModal, displayModal, hideModal} = useShowModal();



	return(
		<div className="landing">
			<h1>Welcome to the Suns</h1>
			<button onClick={displayModal}>Login</button>
			{showModal && 
			<ModalComponent hideModal={hideModal}>
				<LoginForm />
			</ModalComponent>}
		</div>
	)
}

export default Landing;