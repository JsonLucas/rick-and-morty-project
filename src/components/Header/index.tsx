import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Header() {
	const navigate = useNavigate();
	return (
		<Box className='header'>
			<Box className='header-links' onClick={() => navigate('/')}>Characters</Box>
			<Box className='header-links' onClick={() => navigate('/locations')}>Locations</Box>
			<Box className='header-links' onClick={() => navigate('/episodes')}>Episodes</Box>
		</Box>
	);
}