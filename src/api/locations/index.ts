import { api } from "..";
import { ApiLocationsResponse, ILocations } from "../../interfaces/locations";

export const getAllLocations = async () => {
	const { data } = await api.get<ApiLocationsResponse>('/location');
	console.log(data.results);
	return data;
}

export const getLocationByName = async (name: string) => {
	const { data } = await api.get<ApiLocationsResponse>(`/location?name=${name}`);
	const { results } = data;
	return results[0];
}
