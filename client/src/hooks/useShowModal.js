import { useState } from "react";

function useShowModal(){
	
	const [showModal, setShowModal] = useState(false);

	function displayModal(){
		setShowModal(true);
	}

	function hideModal(){
		setShowModal(false);
	}

	return {showModal, displayModal, hideModal};
}

export default useShowModal;