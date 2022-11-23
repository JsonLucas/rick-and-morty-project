import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getCharacterByUrl } from '../../../api/characters';
import { Loading } from '../../Loading';
import { CharacterDetailsComponent } from '../CharacterDetailsComponent';

interface props{
	characterUrls: Array<string>
}

export function CharacterAppearanceList({characterUrls}: props) {
	const { data, isLoading } = useQuery(['character-appearances-list'], async () => {
		let data = [];
		for (let i of characterUrls) {
			const request = await getCharacterByUrl(i);
			data.push(request);
		}
		return data;
	});
	return (
		<Box>
			{isLoading && <Loading />}
			{data && <Box display='flex' w='100%' overflowX='scroll'>
				{data.map((item, index) => <CharacterDetailsComponent character={item} isCharacterDetailsPage={false} key={index} /> )}
			</Box>}
		</Box>
	);
}