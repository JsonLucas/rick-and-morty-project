import { Box, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ICharacter } from '../../../interfaces/characters';

interface props{
	data: ICharacter
}

export function CharacterCard({data}: props) {
	const navigate = useNavigate();
	return (
		<Box mb='10px' borderRadius='10px' display='flex' onClick={() => navigate(`/characters/${data.name}`)}>
			<Image src={data.image} maxW='150px' maxH='150px' borderRadius='10px 0px 0px 10px' />
			<Box className='card shorten-card-width'>
				<Box>
					<Text className='card-content' fontWeight='bold'>{data.name}</Text>
				</Box>
				<Box className='label'>
					Last known location:
					<Text className='card-content'>
						{data.location.name}
					</Text>
				</Box>
				<Box className='label'>
					First seen in:
					<Text className='card-content'>
						{data.origin.name}
					</Text>
				</Box>
			</Box>
		</Box>
	);
}