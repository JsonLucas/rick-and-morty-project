import { api } from "..";
import { ApiEpisodesResponse, IEpisode } from "../../interfaces/episodes";

export const getAllEpisodes = async () => {
	const { data } = await api.get<ApiEpisodesResponse>('/episode');
	return data;
}

export const getEpisodeByUrl = async (episodeUrl: string) => {
	const splitedUrl = episodeUrl.split('/');
	const id = splitedUrl[splitedUrl.length-1];
	const { data } = await api.get<IEpisode>(`/episode/${id}`);
	return data;
}

export const getEpisodeByName = async (name: string) => {
	const { data } = await api.get<ApiEpisodesResponse>(`/episode?name=${name}`);
	return data.results[0];
}

export const getEpisodesWithPaginate = async (page: number) => {
	const { data } = await api.get<ApiEpisodesResponse>(`/episode/?page=${page}`);
	return data;
}