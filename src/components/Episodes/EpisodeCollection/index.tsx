import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEpisode } from "../../../hooks/useEpisode";
import { Loading } from "../../Loading";
import { EpisodeCard } from "../EpisodeCard";

export function EpisodeCollection() {
	const { allEpisodes } = useEpisode();
	const [screen, setScreen] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		setScreen(window.innerWidth);
	}, [window.innerWidth]);
	return (
		<Box bgColor='black'>
			{allEpisodes.isLoading && <Loading />}
			{allEpisodes.data && <Box w='90%' m='40px auto' display='flex' justifyContent='space-around'>
				{screen >= 500 && <>
					<Box>
						{allEpisodes.data.results.map((item, index) => {
							if (index % 2 === 0) return (<EpisodeCard data={item} key={index} />);
						}
						)}
					</Box>
					<Box>
						{allEpisodes.data.results.map((item, index) => {
							if (index % 2 !== 0) return (<EpisodeCard data={item} key={index} />);
						}
						)}
					</Box>
				</>}
				{screen < 500 && <>
					<Box>
						{allEpisodes.data.results.map((item, index) => <EpisodeCard data={item} key={index} />
						)}
					</Box>
				</>}
			</Box>}
		</Box>
	);
}