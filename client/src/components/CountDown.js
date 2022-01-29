import useCountDown from "../hooks/useCountDown";

function Countdown ({sunDate}) {

	const {timeString} = useCountDown(sunDate);

	return (
		<div>
			{timeString}
		</div>
	);
}

export default Countdown;