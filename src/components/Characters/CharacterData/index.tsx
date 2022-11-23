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
				console.log(e);
			}
		}
		navigate('/');
	});
	return (
		<Box w='90%' m='25px auto'>
			{isLoading && <Loading />}
			{data && <Box>
				<Box display='flex' p='15px 0px 15px 0px' color='white' w='90px' alignItems='center' fontSize='21px' cursor='pointer' onClick={() => navigate(-1)}>
					<IoIosArrowBack size={20} /> Voltar
				</Box>
				<CharacterDetailsComponent character={data.character} isCharacterDetailsPage={true} />
				<Box>
					<Text className="label-section">Origin Location Data</Text>
					<LocationDetailsComponent location={data.originLocation} />
				</Box>
				<Box mt='20px'>
					<Text className="label-section">Last Seen Location Data</Text>
					<LocationDetailsComponent location={data.lastLocation} />
				</Box>
				<Box mt='20px'>
					<Text className="label-section">All Episode Appearances</Text>
					<EpisodeAppearanceList episodeUrls={data.character.episode} />
				</Box>
			</Box>}
		</Box>
	);
}