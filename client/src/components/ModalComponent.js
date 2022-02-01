import Modal from '../ui/blocks/Modal';
import ReactDom from 'react-dom';

const portalRoot = document.getElementById('portal-root');

function ModalComponent({ showModal, hideModal, children}){

	if (!showModal) return null;

	return(
		ReactDom.createPortal(
			<Modal>
				<Modal.Content>
					<button onClick={hideModal}>X</button>
					{children}
				</Modal.Content>
			</Modal>,
			portalRoot
		)
	);
}

export default ModalComponent;