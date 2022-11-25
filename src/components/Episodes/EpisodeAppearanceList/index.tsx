import { Box, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getEpisodeByUrl } from '../../../api/episodes';

interface props {
	episodeUrls: Array<string>
}

export function EpisodeAppearanceList({ episodeUrls }: props) {
	const { data, isLoading } = useQuery(['episode-appearances-list'], async () => {
		let data = [];
		for (let i of episodeUrls) {
			const request = await getEpisodeByUrl(i);
			data.push(request);
		}
		return data;
	}, { cacheTime: 10 });
	const navigate = useNavigate();
	return (
		<Box>
			{isLoading && <></>}
			{data && <Box className='episode-appearance-container'>
				{data.map((item, index) => <Box className='episode-appearance-item' 
				onClick={() => navigate(`/episodes/${item.name}`)} key={index}>
					<Box className="label-details">Season:&nbsp;<Text className="details-content">{item.episode}</Text></Box>
					<Box className="label-details">Name:&nbsp;<Text className="details-content">{item.name}</Text></Box>
					<Box className="label-details">Air date:&nbsp;<Text className="details-content">{item.air_date}</Text></Box>
				</Box>)}
			</Box>}
		</Box>
	);
}