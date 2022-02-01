import styled from "styled-components";

import List from "./List";
import Item from "./Item";
import Input from "./Input";

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 70px;
	background-color: rgb(17, 16, 15, 0.30);
`;

Nav.List = List;
Nav.Item = Item;
Nav.Input = Input;

export default Nav;