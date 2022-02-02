import styled from "styled-components";

import Title from "./Title";
import FormElement from "./FormElement";
import Group from "./Group";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";



const Form = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

Form.Title = Title;
Form.FormElement = FormElement;
Form.Group = Group;
Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.TextArea = TextArea;

export default Form;