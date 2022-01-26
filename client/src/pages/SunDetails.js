import { useSunById } from "../hooks/useSuns";
import { useParams } from "react-router-dom";
import SunsList from "../components/SunsList";

function SunDetails(){

	const {id} = useParams();

	const {sunById, loading} = useSunById(id);

	console.log(sunById);

	return (
		<div>
			<h1>sa</h1>
			{loading ? <h2>Loading...</h2> :
				<>
					<SunsList suns={sunById} />
				</>}
		</div>
	)
}

export default SunDetails;