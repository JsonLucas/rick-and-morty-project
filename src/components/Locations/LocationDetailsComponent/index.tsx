import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { ILocations } from '../../../interfaces/locations';

interface props{
	location: ILocations
}

export function LocationDetailsComponent({location}: props) {
	return (
		<Box>
			<Box className="label-details">Name:&nbsp;
				<Text className="details-content">{location.name}</Text>
			</Box>
			<Box className="label-details">Dimension:&nbsp;
				<Text className="details-content">{location.dimension}</Text>
			</Box>
			<Box className="label-details">Type:&nbsp;
				<Text className="details-content">{location.type === '' ? 'Unknown' : location.type}</Text>
			</Box>
			<Box className="label-details">Created at:&nbsp;
				<Text className="details-content">{dayjs(location.created).format('DD/MM/YYYY')}</Text>
			</Box>
		</Box>
	);
}