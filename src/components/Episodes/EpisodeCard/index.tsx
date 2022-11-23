import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IEpisode } from "../../../interfaces/episodes";

interface props{
	data: IEpisode
}

export function EpisodeCard({data}: props) {
	const navigate = useNavigate();
	return (
		<Box className="card" m='auto auto 10px'>
			<Box fontSize='25px' w='100%' cursor='pointer' color='white' fontWeight='bold'>
				<Text onClick={() => navigate(`/episodes/${data.name}`)}>{data.name}</Text>
			</Box>
			<Box className='label'>
				<Text className="card-content">
				</Text>
			</Box>
			<Box className='label'>
				First seen in:
				<Text className="card-content">
				</Text>
			</Box>
		</Box>
);
}