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
		<Box w='100%'>
			{isLoading && <Loading />}
			{data && <Box className='character-appearance-box' 
			overflowX={((window.innerWidth >= 501) && ((data.length >= 4) || (data.length >= 2))) ? 'scroll' : undefined}>
				{data.map((item, index) => <Box mr='10px' key={index}>
					<CharacterDetailsComponent character={item} isCharacterDetailsPage={false} /> 
				</Box>
				)}
			</Box>}
		</Box>
	);
}