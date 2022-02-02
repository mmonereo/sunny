import Nav from "../ui/blocks/Nav";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import AuthService from "../services/auth.service";
import { useContext } from "react";

const myAuthService = new AuthService();

function MainNav(){

	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();

	function logoutOnClick(){

		myAuthService.logout(user)
			.then(res => {
				setUser(null);
				navigate('/');
			}
		)
		.catch(err => console.log(err));
	}

	return (
		<Nav>
			<Nav.List>

				<Nav.Item>
					<NavLink to="/list/all">
						<Nav.Input value="Every Sun" type="button"/>
					</NavLink>
				</Nav.Item>

				<Nav.Item>
					<NavLink to="/list/sunrise">
						<Nav.Input value="Sunrises" type="button"/>
					</NavLink>
				</Nav.Item>

				<Nav.Item>
					<NavLink to="/list/sunset">
							<Nav.Input value="Sunsets" type="button"/>
					</NavLink>
				</Nav.Item>

				<Nav.Item>
					<NavLink to="/new">
							<Nav.Input value="New Sun" type="button"/>
					</NavLink>
				</Nav.Item>

				<Nav.Item>
					<Nav.Input value="Logout" type="button" onClick={logoutOnClick}/>
				</Nav.Item>

			</Nav.List>
		</Nav>
	);
}

export default MainNav;