import countdownSeconds from "../utils/countdownSeconds";
import { useState, useEffect } from "react";

function useCountDown(sunTime){
	
	const [countdown, setCountdown] = useState(countdownSeconds(sunTime));

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((countdown) => countdown - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [sunTime]);

	return {countdown};
}

export default useCountDown;