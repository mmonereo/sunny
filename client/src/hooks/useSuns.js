import { useState, useEffect } from "react";
import SunService from "../services/suns.service";

const mySunService = new SunService();

export function useAllSuns(){
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

export function useSunsByCategory(category){

	const [suns, setSuns] = useState({
		sunsByCategory: [],
		loading: true,
	});

	useEffect(() => {
		mySunService.getSunsByCategory(`${category}`)
			.then(suns => setSuns({
				sunsByCategory: suns.data,
				loading: false,
			}))
			.catch(err => console.log(err));
	}, [category]);

	return {...suns};
}

export function useSunById(id){
	const [sun, setSun] = useState({
		sunById: [],
		loading: true,
	});
	console.log("id en hook", id);
	useEffect(() => {
		mySunService.getSunById(id)
			.then(sun => setSun({
				sunById: [sun.data],
				loading: false,
			}))
			.catch(err => console.log(err));
	}, [id]);

	return {...sun};
}