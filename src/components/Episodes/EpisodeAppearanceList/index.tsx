import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getEpisodeByUrl } from '../../../api/episodes';
import { IEpisode } from '../../../interfaces/episodes';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

interface props {
	episodeUrls: Array<string>
}

export function EpisodeAppearanceList({ episodeUrls }: props) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([] as Array<IEpisode>);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			setLoading(true);
			try{
				let data = [];
				for (let i of episodeUrls) {
					const request = await getEpisodeByUrl(i);
					data.push(request);
				}
				setData(data);
			}catch(e: any){
				console.log(e);
				toast(e.response.data);
			}
			setLoading(false);
		})();
	}, []);
	return (
		<Box>
			{loading && <></>}
			{!loading && <Box className='episode-appearance-container'>
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