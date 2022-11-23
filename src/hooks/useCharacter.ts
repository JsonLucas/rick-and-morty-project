import { useQuery } from "react-query"
import { getAllCharacters, getCharactersWithPagination } from "../api/characters";

export const useCharacter = () => {
	const allCharacters = useQuery(['characters'], async () => {
		const data = await getAllCharacters();
		console.log(data);
		return data;
	}, { staleTime: 60*5 });

	const characterPagination = (page: number) => {
		const { data, isLoading } = useQuery(['character-paginate'], async () => {
			const data = await getCharactersWithPagination(page);
			return data;
		});
		return { data, isLoading };
	};
	
	return { 
		allCharacters,
		characterPagination: { request: characterPagination }
	};
}