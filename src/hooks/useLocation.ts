import { useQuery } from "react-query"
import { getAllLocations, getLocationsWithPaginate } from "../api/locations";
import { ApiLocationsResponse } from "../interfaces/locations";
import { ParamRequestPage } from "../interfaces/req-res-protocols";

export const useLocation = (page: number) => {
	const { data, isLoading } = useQuery(['locations'], async () => {
		const data = await getAllLocations();
		return data;
	});

	const allPageLocationsRequest = async ({page, setLoading, setData}: ParamRequestPage<ApiLocationsResponse>) => {
		setLoading(true);
		try{
			const data = await getLocationsWithPaginate(page);
			setData(data);
		}catch(e: any){
			console.log(e);
		}
		setLoading(false);
	}

	return { 
		allLocations: { data, isLoading },
		allPageLocationsRequest 
	};
}