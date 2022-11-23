import { IResponseInfo } from "./response-info"

export interface ILocations{
	id: number,
	name: string,
	type: string,
	dimension: string,
	residents: Array<string>,
	url: string,
	created: string
}

export type ApiLocationsResponse = { info: IResponseInfo, results: Array<ILocations> };