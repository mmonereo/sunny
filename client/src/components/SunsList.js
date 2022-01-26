import { CardList } from "../ui/containers/CardList";
import { Link } from "react-router-dom";
import SunCard from "../ui/blocks/SunCard";

function SunsList ({suns}){
	return (
		<CardList>
			{suns.map(sun => (
			<Link to={`details/${sun._id}`} key={sun._id}>
				<SunCard key={sun._id}>
					<SunCard.Title>
						{sun.name}
					</SunCard.Title>
					<SunCard.Image src={sun.pictures[0]} />
					<SunCard.Text>
						{sun.comment}
					</SunCard.Text>
					<SunCard.Text>
						{sun.category}
					</SunCard.Text>
				</SunCard>
			</Link>
			))}
		</CardList>
	);
}

export default SunsList;