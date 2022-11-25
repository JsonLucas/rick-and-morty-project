import { useQuery } from "react-query"
import { toast } from "react-toastify";
import { getAllEpisodes, getEpisodesWithPaginate } from "../api/episodes";
import { ApiEpisodesResponse } from "../interfaces/episodes";
import { ParamRequestPage } from "../interfaces/req-res-protocols";

export const useEpisode = (page: number) => {
	const { data, isLoading } = useQuery(['episodes'] , async () => {
		const data = await getAllEpisodes();
		return data;
	});

	const allPageEpisodeRequest = async ({page, setLoading, setData}: ParamRequestPage<ApiEpisodesResponse>) => {
		setLoading(true);
		try{
			const data = await getEpisodesWithPaginate(page);
			setData(data);
		}catch(e: any){
			toast(e.response.data);
		}
		setLoading(false);
	}

	return { 
		allEpisodes: { data, isLoading },
		allPageEpisodeRequest
	};
}