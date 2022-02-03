import styled from "styled-components";

const Slide = styled.div`
	transition: 3s;
	width: 300px;
	height: 200px;
	transform: translateX(
		${({state}) => (state === "entering" || state === "entered" ? "0" : "110%")}
	);
`;
export default Slide;