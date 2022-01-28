import useCountDown from "../hooks/useCountDown";

function Countdown ({sunTime}) {

	const {countdown} = useCountDown(sunTime);

	return (
		<div>
			{countdown}
		</div>
	);
}

export default Countdown;