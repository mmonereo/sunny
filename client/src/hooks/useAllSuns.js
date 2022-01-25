import { useState, useEffect } from "react";
import SunService from "../services/suns.service";

const mySunService = new SunService();

function useAllSuns(){
	const [suns, setSuns] = useState({
		allSuns: [],
		loading: true,
	});

	useEffect(() => {
		mySunService.getAllSuns()
			.then(suns => setSuns({
				allSuns: suns.data,
				loading: false,
			}))
			.catch(err => console.log(err));
	}, []);

	return {...suns};
}

export default useAllSuns;