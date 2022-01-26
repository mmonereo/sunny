import { useSunsByCategory } from "../hooks/useSuns";
import { useParams } from "react-router-dom";
import SunsList from "../components/SunsList";

function SunsByCategory() {

	const category = useParams().category;

	const { allSuns, loading } = useSunsByCategory(category);

	return (
		<div>
			<h1>{`${category}`}s</h1>
			{loading ? <h2>Loading...</h2> :
				<>
					<SunsList suns={allSuns} />
				</>}
		</div>
	)
}

export default SunsByCategory;