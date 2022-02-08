import Form from "../ui/blocks/Form";
import { UserContext } from "../contexts/UserContext";
import { useState, useContext} from "react";
/* import { Transition } from "react-transition-group";
import Slide from "../ui/elements/Slide";
import ButtonBig from "../ui/elements/ButtonBig";
 */

function NewSunForm(){

	const {user} = useContext(UserContext);

	const [form, setForm] = useState({
		name: '',
		description: '',
		category: 'sunset',
		street: '',
		number: '',
		city: '',
		geolocation: false
	});

/* 	const [animate, setAnimate] = useState(false);

	const doAnimate = useCallback(() => {
		setAnimate(true);
		setTimeout(() => setAnimate(false), 3000);
	} , []); */

	function handleChange(e){
		const {name, value} = e.target;
		setForm({
			...form,
			[name]: value
		})
	}

	function getBrowserGeolocation(){
		if (!navigator.geolocation) {
			console.log("Geolocation is not supported by your browser");
		}
		navigator.geolocation.getCurrentPosition((position) => {
			const {latitude, longitude} = position.coords;
			setForm({
				...form,
				coordinates: [latitude, longitude],
				geolocation: true
			});
		});
	}

	return (
		<Form>
			<Form.FormElement>

				<Form.Group>
					<Form.Label htmlFor="name">Name</Form.Label>
					<Form.Input name="name" type="text" id="name" onChange={handleChange}/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="description">Description</Form.Label>
					<Form.TextArea name="description" type="text-area" id="description" onChange={handleChange}/>
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="category">Type</Form.Label>
					<Form.Select name="category" id="category" defaultValue="sunset" onChange={handleChange}>
						<option value="sunset">Sunset</option>
						<option value="sunrise">Sunrise</option>
					</Form.Select>
				</Form.Group>

{/* 				<Form.Group>
					<Form.Label htmlFor="location">Location</Form.Label>
					<Form.Input name="location" type="text" id="location" onChange={handleChange} />
				</Form.Group>

				CR <Form.Group>
					<Transition
						in={animate}
						timeout={3000}
						unmountOnEnter
					>
						{(state) => (<Slide state={state}>
							<Form.Label>Location</Form.Label>
							<ButtonBig onClick={doAnimate}>Use an adress</ButtonBig>
							<ButtonBig>Use my current location</ButtonBig>
						</Slide>)}

					</Transition>
				</Form.Group> */}
			
				<Form.Group>
					<Form.Label htmlFor="street">Street</Form.Label>
					<Form.Input name="street" type="text" id="street" onChange={handleChange} />
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="number">Number</Form.Label>
					<Form.Input name="number" type="text" id="number" onChange={handleChange} />
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="number">City</Form.Label>
					<Form.Input name="city" type="text" id="city" onChange={handleChange} />
				</Form.Group>

				<button type="button" onClick={getBrowserGeolocation}>use current location</button>

			</Form.FormElement>
		</Form>
	);
}

export default NewSunForm;