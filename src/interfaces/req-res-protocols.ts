import { ApiCharactersResponse } from "./characters"
import { ApiEpisodesResponse } from "./episodes"
import { ApiLocationsResponse } from "./locations"

export interface IResponseInfo{
	count: number,
	pages: number,
	next?: string,
	prev?: string
}

export interface ParamRequestPage<S>{
	page: number,
	setLoading: (param: boolean) => void,
	setData: (param: S) => void
}

export interface PaginationRequestProps {
	numPages: number,
	setPage: (param: number) => void,
	setLoading: (param: boolean) => void,
	setData: (param: ApiCharactersResponse | ApiEpisodesResponse | ApiLocationsResponse) => void,
	requestFn: (props: ParamRequestPage<ApiCharactersResponse | ApiEpisodesResponse | ApiLocationsResponse>) => Promise<void>
}

export type StatePropsType = ApiCharactersResponse | ApiEpisodesResponse | ApiLocationsResponse; 