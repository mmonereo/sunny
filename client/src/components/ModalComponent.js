import Modal from '../ui/blocks/Modal';

function ModalComponent ({hideModal, children}){
	return(
		<Modal>
			<Modal.Content>
				<button onClick={hideModal}>X</button>
				{children}
			</Modal.Content>
		</Modal>
	);
}

export default ModalComponent;