import MainNav from "../components/MainNav";
import NewSunForm from "../components/NewSunForm";

function NewSun(){
	return(
		<div>
			<MainNav />
			<h1>Create New Sun</h1>
			<NewSunForm />
		</div>
	)
}

export default NewSun;