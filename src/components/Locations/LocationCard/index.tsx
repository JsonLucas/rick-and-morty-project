import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ILocations } from "../../../interfaces/locations";

interface props {
	data: ILocations
}

export function LocationCard({ data }: props) {
	const navigate = useNavigate();
	return (
		<Box className="card" m='auto auto 10px'>
			<Box fontSize='25px' w='100%' cursor='pointer' color='white' fontWeight='bold'>
				<Text onClick={() => navigate(`/locations/${data.name}`)}>{data.name}</Text>
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