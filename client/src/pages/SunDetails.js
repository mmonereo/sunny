import { useSunById } from "../hooks/useSuns";
import { useParams } from "react-router-dom";
import SunCard from "../components/SunCard";
import TimeWeather from "../components/TimeWeather";



function SunDetails(){

	const {id} = useParams();

	const {sunById, loadingSunById} = useSunById(id);


	return (
		<div>
			<h1>Sun Details</h1>
			{loadingSunById ? <h2>Loading...</h2> :
				<>
					<SunCard sun={sunById} />
					<TimeWeather coordinates={sunById.location.coordinates} category={sunById.category} />
				</>}
		</div>
	)
}

export default SunDetails;