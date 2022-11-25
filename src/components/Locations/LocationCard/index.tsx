import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ILocations } from "../../../interfaces/locations";

interface props {
	data: ILocations
}

export function LocationCard({ data }: props) {
	const navigate = useNavigate();
	return (
		<Box className="card extend-card-width" m='auto auto 10px' onClick={() => navigate(`/locations/${data.name}`)}>
			<Box fontSize='25px' w='100%' cursor='pointer' color='white' fontWeight='bold'>
				<Text>{data.name}</Text>
			</Box>
		</Box>
	);
}