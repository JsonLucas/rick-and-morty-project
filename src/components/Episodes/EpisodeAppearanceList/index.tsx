import { Box, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getEpisodeByUrl } from '../../../api/episodes';
import { Loading } from '../../Loading';

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
	}, { cacheTime: 6 });
	return (
		<Box>
			{isLoading && <></>}
			{data && <Box>
				{data.map((item, index) => <Box className='episode-appearance-item' key={index}>
					<Box className="label-details">Season:&nbsp;<Text className="details-content">{item.episode}</Text></Box>
					<Box className="label-details">Name:&nbsp;<Text className="details-content">{item.name}</Text></Box>
					<Box className="label-details">Air date:&nbsp;<Text className="details-content">{item.air_date}</Text></Box>
				</Box>)}
			</Box>}
		</Box>
	);
}