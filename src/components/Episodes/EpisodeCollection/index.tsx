import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEpisode } from "../../../hooks/useEpisode";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { IEpisode } from "../../../interfaces/episodes";
import { StatePropsType } from "../../../interfaces/req-res-protocols";
import { Loading } from "../../Loading";
import { Pagination } from "../../Pagination";
import { EpisodeCard } from "../EpisodeCard";

export function EpisodeCollection() {
	const [page, setPage] = useState(1);
	const { allEpisodes, allPageEpisodeRequest } = useEpisode(page);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<StatePropsType>();
	const { getPaginateIndex } = useLocalStorage();
	const navigate = useNavigate();
	useEffect(() => {
		const { data } = allEpisodes;
		if (data) {
			setLoading(false);
			setData(data);
		}
	}, [allEpisodes.isLoading]);
	return (
		<Box>
			{loading && <Loading />}
			{!loading && data && <>
				<Box className="register-collection">
					{window.innerWidth >= 500 && <>
						<Box>
							{data.results.map((item, index) => {
								if (index % 2 === 0) return (<EpisodeCard data={item as IEpisode} key={index} />);
							}
							)}
						</Box>
						<Box>
							{data.results.map((item, index) => {
								if (index % 2 !== 0) return (<EpisodeCard data={item as IEpisode} key={index} />);
							}
							)}
						</Box>
					</>}
					{window.innerWidth < 500 && <>
						<Box>
							{data.results.map((item, index) => <EpisodeCard data={item as IEpisode} key={index} />
							)}
						</Box>
					</>}
				</Box>
			</>}
			{data && <Box display={loading ? 'none' : ''}>
				<Pagination numPages={data.info.pages} setPage={setPage} setLoading={setLoading}
					setData={setData} requestFn={allPageEpisodeRequest} /></Box>}
		</Box>
	);
}