import { useSunById } from "../hooks/useSuns";
import { useParams } from "react-router-dom";
import SunCard from "../components/SunCard";
import TimeWeather from "../components/TimeWeatherData";

function SunDetails(){

	const {id} = useParams();

	const {sunById, loadingSunById} = useSunById(id);


	return (
		<div>
			<h1>Sun Details</h1>
			{loadingSunById ? <h2>Loading...</h2> :
				<>
					<SunCard sun={sunById} />
					<TimeWeather latitude={sunById.location.coordinates[0]} longitude={sunById.location.coordinates[1]} category={sunById.category} />
				</>}
		</div>
	)
}

export default SunDetails;