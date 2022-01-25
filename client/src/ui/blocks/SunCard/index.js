import styled from "styled-components";

import Title from "./Title";
import Image from "./Image";
import Text from "./Text";

const SunCard = styled.div`
	background-color: #fff;
	border-radius: 5px;
	padding: 2rem;
	box-shadow: 2px 2px 4px 0px #cfd8dc;
`
SunCard.Image = Image;
SunCard.Text = Text;
SunCard.Title = Title;

export default SunCard;