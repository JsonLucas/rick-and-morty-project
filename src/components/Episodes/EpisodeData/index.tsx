import { Box, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getEpisodeByName } from '../../../api/episodes';
import { CharacterAppearanceList } from '../../Characters/CharacterAppearanceList';
import { Loading } from '../../Loading';
import { EpisodeDetailsComponent } from '../EpisodeDetailsComponent';

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
		<Box w='90%' m='25px auto' position='relative'>
			{isLoading && <Loading />}
			{data && <Box>
				<Box className='back-button' onClick={() => navigate(-1)}>
					<IoIosArrowBack size={20} /> Voltar
				</Box>
				<Box className='detail-section-label'>
					<Text>Episode Details: </Text>
					<EpisodeDetailsComponent episode={data} isEpisodeDetailsPage={true} />
				</Box>
				<Box>
					<Text className='detail-section-label'>All Character Appearances:</Text>
					<CharacterAppearanceList characterUrls={data.characters} />
				</Box>
			</Box>}
		</Box>
	);
}