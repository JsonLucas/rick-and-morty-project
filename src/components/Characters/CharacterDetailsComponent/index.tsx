import { Box, Image, Text } from "@chakra-ui/react";
import { ICharacter } from "../../../interfaces/characters";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

interface props{
	character: ICharacter,
	isCharacterDetailsPage: boolean
}

export function CharacterDetailsComponent({character, isCharacterDetailsPage}: props) {
	const navigate = useNavigate();
	const characterDetailsPageVerification = () => {
		if(!isCharacterDetailsPage){
			return {
				onClick: () => navigate(`/characters/${character.name}`), 
				cursor: 'pointer'
			}; 
		}
	}
	return (
		<Box className="character-details" {...characterDetailsPageVerification()}>
			<Image w='100%' h='70%' src={character.image} />
			<Box>
				<Box className="label-details">Name:&nbsp;
					<Text className="details-content">{character.name}</Text>
				</Box>
				<Box className="label-details">Gender:&nbsp;
					<Text className="details-content">{character.gender}</Text>
				</Box>
				<Box className="label-details">Type:&nbsp;
					<Text className="details-content">{character.type === '' ? 'Unknown' : character.type}</Text>
				</Box>
				<Box className="label-details">Species:&nbsp;
					<Text className="details-content"> {character.species}</Text>
				</Box>
				<Box className="label-details">Status:&nbsp;
					<Text className="details-content">{character.status}</Text>
				</Box>
				<Box className="label-details">Created at:&nbsp;
					<Text className="details-content">{dayjs(character.created).format('DD/MM/YYYY')}</Text>
				</Box>
			</Box>
		</Box>
	);
}