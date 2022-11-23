import { useQuery } from "react-query"
import { getAllEpisodes } from "../api/episodes";

export const useEpisode = () => {
	const allEpisodes = useQuery(['episodes'] , async () => {
		const data = await getAllEpisodes();
		return data;
	});

	return { allEpisodes };
}