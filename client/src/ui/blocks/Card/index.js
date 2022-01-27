import styled from "styled-components";

import Title from "./Title";
import Image from "./Image";
import Text from "./Text";

const Card = styled.div`
	background-color: #fff;
	border-radius: 5px;
	padding: 2rem;
	box-shadow: 2px 2px 4px 0px #cfd8dc;
`
Card.Image = Image;
Card.Text = Text;
Card.Title = Title;

export default Card;