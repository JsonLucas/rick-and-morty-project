import { useQuery } from "react-query"
import { getAllLocations } from "../api/locations";

export const useLocation = () => {
	const allLocations = useQuery(['locations'], async () => {
		const data = await getAllLocations();
		return data;
	});

	return { allLocations };
}