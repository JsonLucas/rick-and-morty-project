import { Box, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getEpisodeByName } from '../../../api/episodes';
import { CharacterAppearanceList } from '../../Characters/CharacterAppearanceList';
import { Loading } from '../../Loading';

export function EpisodeData() {
	const { episodeName } = useParams();
	const { data, isLoading } = useQuery(['episode-details'], async () => {
		if(episodeName){
			const data = await getEpisodeByName(episodeName);
			return data;
		}else{
			navigate(-1);
		}
	});
	const navigate = useNavigate();
	return (
		<Box w='90%' m='50px auto'>
			{isLoading && <Loading />}
			{data && <Box>
				<Box display='flex' alignItems='center' fontSize='21px' cursor='pointer' onClick={() => navigate(-1)}>
					<IoIosArrowBack size={20} color='black' /> Voltar
				</Box>
				<Box>
					<Text>All Character Appearances</Text>
					<CharacterAppearanceList characterUrls={data.characters} />
				</Box>
			</Box>}
		</Box>
	);
}