import { Box, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getLocationByName } from '../../../api/locations';
import { CharacterAppearanceList } from '../../Characters/CharacterAppearanceList';
import { Loading } from '../../Loading';
import { LocationDetailsComponent } from '../LocationDetailsComponent';

export function LocationsData () {
	const { locationName } = useParams();
	const { data, isLoading } = useQuery(['episode-details'], async () => {
		if(locationName){
			const data = await getLocationByName(locationName);
			return data;
		}else{
			navigate(-1);
		}
	});
	const navigate = useNavigate();
	return (
		<Box w='90%' m='25px auto'>
			{isLoading && <Loading />}
			{data && <Box>
				<Box className='back-button' onClick={() => navigate(-1)}>
					<IoIosArrowBack size={20} /> Voltar
				</Box>
				<Box className='detail-section-label'>
					<Text>Location Details: </Text>
					<LocationDetailsComponent location={data} />
				</Box>
				<Box>
					<Text className='detail-section-label'>All Residents: </Text>
					<CharacterAppearanceList characterUrls={data.residents} />
				</Box>
			</Box>}
		</Box>
	);
}