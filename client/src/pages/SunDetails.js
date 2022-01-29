import { useSunById } from "../hooks/useSuns";
import { useParams } from "react-router-dom";
import SunCard from "../components/SunCard";
import TimeWeather from "../components/TimeWeather";
import useTimeWeather from "../hooks/useTimeWeather";
import {useEffect} from "react";



function SunDetails(){

	const {id} = useParams();

	const {sunById, loadingSunById} = useSunById(id);
	const {timeWeatherData, loadingTimeWeather} = useTimeWeather(sunById.coordinates[0], sunById.coordinates[1], sunById.category);


	console.log("sunbyid", sunById);


	return (
		<div>
			<h1>Sun Details</h1>
			{loadingSunById ? <h2>Loading...</h2> :
				<>
					<SunCard sun={sunById} />
					<TimeWeather coordinates={sunById} category={sunById} />
				</>}
		</div>
	)
}

export default SunDetails;