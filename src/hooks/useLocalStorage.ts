export const useLocalStorage = () => {
	const setPaginateIndex = (index: number) => {
		localStorage.setItem('paginateIndex', index.toString());
	} 
	const getPaginateIndex = () => {
		const jsonIndex = localStorage.getItem('paginateIndex');
		if(jsonIndex){
			return jsonIndex;
		}
		return null;
	} 

	return { setPaginateIndex, getPaginateIndex };
}