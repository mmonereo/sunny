import SunCard from "./SunCard";
import { CardList } from "../ui/containers/CardList";
import { Link } from "react-router-dom";


function SunsList ({suns}){
	return (
		<CardList>
			{suns.map(sun => (
			<Link to={`/details/${sun._id}`} key={sun._id}>
				<SunCard key={sun.id} sun={sun}/>
			</Link>
			))}
		</CardList>
	);
}

export default SunsList;