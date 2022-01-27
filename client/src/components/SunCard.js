import Card from "../ui/blocks/Card";

function SunCard({sun}){
	return(
		<Card>
			<Card.Title>
				{sun.name}
			</Card.Title>
			<Card.Image src={sun.pictures[0]} />
			<Card.Text>
				{sun.comment}
			</Card.Text>
			<Card.Text>
				{sun.category}
			</Card.Text>
		</Card>
	);
}

export default SunCard;