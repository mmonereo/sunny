import countdownSeconds from "../utils/countdownSeconds";
import timeStringFromSeconds from "../utils/timeStringFromSeconds";
import { useState, useEffect } from "react";

function useCountDown(sunDate){
	
	const [countdown, setCountdown] = useState(countdownSeconds(sunDate));
	const [timeString, setTimeString] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((countdown) => countdown - 1);
			setTimeString(timeStringFromSeconds(countdown));
		}, 1000);
		return () => clearInterval(interval);
	}, [sunDate, countdown]);

	return {countdown, timeString};
}

export default useCountDown;