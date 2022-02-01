import { useSunsByCategory } from "../hooks/useSuns";
import { useParams } from "react-router-dom";
import SunsList from "../components/SunsList";
import MainNav from "../components/MainNav";

function SunsByCategory() {

	const category = useParams().category;

	const { sunsByCategory, loading } = useSunsByCategory(category);

	return (
		<div>
			<MainNav />
			<h1>{`${category}`}s</h1>
			{loading ? <h2>Loading...</h2> :
				<>
					<SunsList suns={sunsByCategory} />
				</>}
		</div>
	)
}

export default SunsByCategory;