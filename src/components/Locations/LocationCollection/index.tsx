import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../../../hooks/useLocation";
import { ILocations } from "../../../interfaces/locations";
import { StatePropsType } from "../../../interfaces/req-res-protocols";
import { Loading } from "../../Loading";
import { Pagination } from "../../Pagination";
import { LocationCard } from "../LocationCard";

export function LocationCollection() {
	const [page, setPage] = useState(1);
	const { allLocations, allPageLocationsRequest } = useLocation(page);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<StatePropsType>();
	const navigate = useNavigate();
	useEffect(() => {
		const { data } = allLocations;
		if (data) {
			setLoading(false);
			setData(data);
		}
	}, [allLocations.isLoading]);
	return (
		<Box>
			{loading && <Loading />}
			{!loading && data && <Box className="register-collection">
				{window.innerWidth >= 500 && <>
					<Box>
						{data.results.map((item, index) => {
							if (index % 2 === 0) return (<LocationCard data={item as ILocations} key={index} />);
						}
						)}
					</Box>
					<Box>
						{data.results.map((item, index) => {
							if (index % 2 !== 0) return (<LocationCard data={item as ILocations} key={index} />);
						}
						)}
					</Box>
				</>}
				{window.innerWidth < 500 && <>
					<Box>
						{data.results.map((item, index) => <LocationCard data={item as ILocations} key={index} />
						)}
					</Box>
				</>}
			</Box>}
			{data && <Box display={loading ? 'none' : ''}>
				<Pagination numPages={data.info.pages} setLoading={setLoading} setPage={setPage} setData={setData} 
				requestFn={allPageLocationsRequest} /></Box>}
		</Box>
	);
}