import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IEpisode } from "../../../interfaces/episodes";

interface props{
	data: IEpisode
}

export function EpisodeCard({data}: props) {
	const navigate = useNavigate();
	return (
		<Box className='card extend-card-width' m='auto auto 10px' onClick={() => navigate(`/episodes/${data.name}`)}>
			<Box fontSize='15px' w='100%' cursor='pointer' color='white'>
				<Text>{data.episode}</Text>
			</Box>
			<Box fontSize='25px' w='100%' cursor='pointer' color='white' fontWeight='bold'>
				<Text>{data.name}</Text>
			</Box>
		</Box>
);
}