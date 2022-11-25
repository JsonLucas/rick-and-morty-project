import { Box, Image, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterByname } from "../../../api/characters";
import { getLocationByName } from "../../../api/locations";
import { Loading } from "../../Loading";
import { IoIosArrowBack } from 'react-icons/io';
import { LocationDetailsComponent } from "../../Locations/LocationDetailsComponent";
import { EpisodeAppearanceList } from "../../Episodes/EpisodeAppearanceList";
import { CharacterDetailsComponent } from "../CharacterDetailsComponent";
import { toast } from "react-toastify";

export function CharacterData() {
	const { characterName } = useParams();
	const navigate = useNavigate();
	const { data, isLoading } = useQuery(['character-details'], async () => {
		if (characterName) {
			try {
				const character = await getCharacterByname(characterName);
				const originLocation = await getLocationByName(character.origin.name);
				const lastLocation = await getLocationByName(character.location.name);
				return { character, originLocation, lastLocation };
			} catch (e: any) {
				toast(e.response.data);
			}
		}
		navigate('/');
	});
	return (
		<Box w='90%' m='25px auto' position='relative'>
			{isLoading && <Loading />}
			{data && <Box color='white'>
				<Box className='back-button' onClick={() => navigate(-1)}>
					<IoIosArrowBack size={20} /> Voltar
				</Box>
				<Box className="container-character-details">
					<CharacterDetailsComponent character={data.character} isCharacterDetailsPage={true} />
					<Box>
						<Box mt='20px'>
							<Text className="label-section">Origin Location Data</Text>
							<LocationDetailsComponent location={data.originLocation} />
						</Box>
						<Box mt='20px'>
							<Text className="label-section">Last Seen Location Data</Text>
							<LocationDetailsComponent location={data.lastLocation} />
						</Box>
					</Box>
					<Box mt='20px'>
						<Text className="label-section">All Episode Appearances</Text>
						<EpisodeAppearanceList episodeUrls={data.character.episode} />
					</Box>
				</Box>
			</Box>}
		</Box>
	);
}