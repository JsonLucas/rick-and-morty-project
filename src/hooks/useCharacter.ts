import { useState } from 'react';
import { useQuery } from "react-query";
import { toast } from 'react-toastify';
import { getAllCharacters, getCharacterByUrl, getCharactersWithPagination } from "../api/characters";
import { ApiCharactersResponse, ICharacter } from '../interfaces/characters';
import { ParamRequestPage } from '../interfaces/req-res-protocols';

export const useCharacter = (page?: number) => {
	const { data, isLoading } = useQuery(['character-paginate'], async () => {
		if(page){
			const data = await getCharactersWithPagination(page);
			return data;
		}
	});

	const allPageCharactersRequest = async ({page, setLoading, setData}: ParamRequestPage<ApiCharactersResponse>) => {
		setLoading(true);
		try{
			const data = await getCharactersWithPagination(page);
			setData(data);
		}catch(e: any){
			toast(e.response.data);
		}
		setLoading(false);
	}

	return {
		allPageCharacters: { data, isLoading },
		allPageCharactersRequest,
	};
}