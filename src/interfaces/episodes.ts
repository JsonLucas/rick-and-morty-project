import { IResponseInfo } from "./req-res-protocols"

export interface IEpisode {
	id: number,
	name: string,
	air_date: string,
	episode: string,
	characters: Array<string>,
	url: string,
	created: string
}

export type ApiEpisodesResponse = { info: IResponseInfo, results: Array<IEpisode> };