import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../../../hooks/useLocation";
import { Loading } from "../../Loading";
import { LocationCard } from "../LocationCard";

export function LocationCollection() {
	const { allLocations } = useLocation();
	const [screen, setScreen] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		setScreen(window.innerWidth);
	}, [window.innerWidth]);
	return (
		<Box bgColor='black'>
			{allLocations.isLoading && <Loading />}
			{allLocations.data && <Box w='90%' m='40px auto' display='flex' justifyContent='space-around'>
				{screen >= 500 && <>
					<Box>
						{allLocations.data.results.map((item, index) => {
							if (index % 2 === 0) return (<LocationCard data={item} key={index} />);
						}
						)}
					</Box>
					<Box>
						{allLocations.data.results.map((item, index) => {
							if (index % 2 !== 0) return (<LocationCard data={item} key={index} />);
						}
						)}
					</Box>
				</>}
				{screen < 500 && <>
					<Box>
						{allLocations.data.results.map((item, index) => <LocationCard data={item} key={index} />
						)}
					</Box>
				</>}
			</Box>}
		</Box>
	);
}