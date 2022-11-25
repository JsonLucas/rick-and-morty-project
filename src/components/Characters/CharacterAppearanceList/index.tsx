import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getCharacterByUrl } from '../../../api/characters';
import { ICharacter } from '../../../interfaces/characters';
import { Loading } from '../../Loading';
import { CharacterDetailsComponent } from '../CharacterDetailsComponent';

interface props{
	characterUrls: Array<string>
}

export function CharacterAppearanceList({characterUrls}: props) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([] as Array<ICharacter>);
	useEffect(() => {
		(async () => {
			setLoading(true);
			try{
				let data = [];
				for (let i of characterUrls) {
					const request = await getCharacterByUrl(i);
					data.push(request);
				}
				setData(data);
			}catch(e: any){
				toast(e.response.data);
			}
			setLoading(false);
		})();
	}, characterUrls);
	return (
		<Box w='100%'>
			{loading && <Loading />}
			{data && <Box className='character-appearance-box' 
			overflowX={((window.innerWidth >= 501) && (data.length >= 2)) ? 'scroll' : undefined}>
				{data.map((item, index) => <Box mr='10px' key={index}>
					<CharacterDetailsComponent character={item} isCharacterDetailsPage={false} /> 
				</Box>
				)}
			</Box>}
		</Box>
	);
}