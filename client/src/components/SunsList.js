import { CardList } from "../ui/containers/CardList";
import SunCard from "../ui/blocks/SunCard";

function SunsList ({suns}){
	return (
		<CardList>
			{suns.map(sun => (
				<SunCard key={sun.id}>
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
			))}
		</CardList>
	);
}

export default SunsList;