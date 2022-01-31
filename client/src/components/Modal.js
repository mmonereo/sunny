import Modal from '../ui/blocks/Modal';

function Modal ({closeModal, children}){
	return(
		<Modal>
			<Modal.Content>
				<button onClick={closeModal}>X</button>
				{children}
			</Modal.Content>
		</Modal>
	);
}

export default Modal;