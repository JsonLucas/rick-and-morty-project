import { Box, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { getLocationByName } from '../../../api/locations';
import { ILocations } from '../../../interfaces/locations';
import { CharacterAppearanceList } from '../../Characters/CharacterAppearanceList';
import { Loading } from '../../Loading';
import { LocationDetailsComponent } from '../LocationDetailsComponent';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export function LocationsData () {
	const { locationName } = useParams();
	const [data, setData] = useState({} as ILocations);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			setLoading(true);
			try{
				if(locationName){
					const data = await getLocationByName(locationName);
					setData(data);
				}else{
					navigate(-1);
				}
			}catch(e: any){
				toast(e.response.data);
			}
			setLoading(false);
		})();
	}, []);
	return (
		<Box w='90%' m='25px auto' position='relative'>
			{loading && <Loading />}
			{!loading && <Box>
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