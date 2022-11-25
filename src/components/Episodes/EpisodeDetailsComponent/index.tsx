import { Box, Text } from "@chakra-ui/react";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
import { IEpisode } from "../../../interfaces/episodes";

interface props{
	episode: IEpisode,
	isEpisodeDetailsPage: boolean
}

export function EpisodeDetailsComponent({episode, isEpisodeDetailsPage}: props) {
	const navigate = useNavigate();
	const episodeDetailsPageVerification = () => {
		if(!isEpisodeDetailsPage){
			return {
				onClick: () => navigate(`/episodes/${episode.name}`), 
				cursor: 'pointer'
			}; 
		}
	}
	return (
		<Box p='10px 0px 10px 0px' {...episodeDetailsPageVerification()}>
			<Box>
				<Box className="label-details">Name:&nbsp;
					<Text className="details-content">{episode.name}</Text>
				</Box>
				<Box className="label-details">Season:&nbsp;
					<Text className="details-content">{episode.episode}</Text>
				</Box>
				<Box className="label-details">Air date:&nbsp;
					<Text className="details-content">{episode.air_date}</Text>
				</Box>
				<Box className="label-details">Registered At:&nbsp;
					<Text className="details-content">{dayjs(episode.created).format('DD/MM/YYYY')}</Text>
				</Box>
			</Box>
		</Box>
	);
}