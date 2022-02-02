import Form from "../ui/blocks/Form";
import { UserContext } from "../contexts/UserContext";
import { useState, useContext } from "react";
import ButtonBig from "../ui/elements/ButtonBig";

function NewSunForm(){

	const {user} = useContext(UserContext);

	const [form, setForm] = useState({
		name: '',
		description: '',
		category: 'sunset',
	});

	function handleChange(e){
		const {name, value} = e.target;
		setForm({
			...form,
			[name]: value
		})
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

				<Form.Group>
					<Form.Label>Location</Form.Label>
					<ButtonBig>Use an adress</ButtonBig>
					<ButtonBig>Use my current location</ButtonBig>
				</Form.Group>


			</Form.FormElement>
		</Form>
	);
}

export default NewSunForm;