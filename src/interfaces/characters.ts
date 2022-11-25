import { IResponseInfo } from "./req-res-protocols";

export interface ICharacter {
	id: number,
	name: string,
	status: string,
	species: string,
	type: string,
	gender: string,
	origin: location,
	location: location,
	image: string,
	episode: Array<string>,
	url: string,
	created: string
}

export interface location{
	name: string,
	url: string
}

export type ApiCharactersResponse = { info: IResponseInfo, results: Array<ICharacter> };