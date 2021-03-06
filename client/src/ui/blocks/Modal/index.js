import styled from "styled-components";

import Content from "./Content";

const Modal = styled.div`
	position: fixed; 
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4); 
`;

Modal.Content = Content;

export default Modal;