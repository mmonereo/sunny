import styled from "styled-components";

const Image = styled.img`
	width: 200px;
	height: 150px;
	url(${props => props.src});
`;

export default Image;