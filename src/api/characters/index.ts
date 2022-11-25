import { api } from "..";
import { ApiCharactersResponse, ICharacter } from "../../interfaces/characters";

export const getAllCharacters = async () => {
	const { data } = await api.get<ApiCharactersResponse>('/character');
	return data;
}

export const getCharactersWithPagination = async (page: number) => {
	const { data } = await api.get<ApiCharactersResponse>(`/character/?page=${page}`);
	return data;
}

export const getCharacterByname = async (name: string) => {
	const { data } = await api.get<ApiCharactersResponse>(`/character?name=${name}`);
	const { results } = data;
	return results[0];
}

export const getCharacterByUrl = async (characterUrl: string) => {
	const splitedUrl = characterUrl.split('/');
	const id = splitedUrl[splitedUrl.length-1];
	const { data } = await api.get<ICharacter>(`/character/${id}`);
	return data;
}