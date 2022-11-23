import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Header() {
	const navigate = useNavigate();
	return (
		<Box p='10px' h='70px' w='100%' bgColor='black' display='flex' justifyContent='center' alignItems='center' 
		fontSize='19px' color='white'>
			<Box p='10px' onClick={() => navigate('/')}>Characters</Box>
			<Box p='10px' onClick={() => navigate('/locations')}>Locations</Box>
			<Box p='10px' onClick={() => navigate('/episodes')}>Episodes</Box>
		</Box>
	);
}