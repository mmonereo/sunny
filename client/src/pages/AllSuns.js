import useAllSuns from "../hooks/useAllSuns";
import SunsList from "../components/SunsList";


function AllSuns(){

	const { allSuns, loading } = useAllSuns();

	const sunrises = allSuns.filter(sun => sun.category === "sunrise");
	const sunsets = allSuns.filter(sun => sun.category === "sunset");

	return(
		<div>
			<h1>AllSuns</h1>
			{ loading ? <h2>Loading...</h2>: 
			<>
				<SunsList suns={sunrises} />  
				<SunsList suns={sunsets} />
			</> }
		</div>
	)
}

export default AllSuns;