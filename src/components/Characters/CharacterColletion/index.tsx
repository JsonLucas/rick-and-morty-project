import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCharactersWithPagination } from "../../../api/characters";
import { useCharacter } from "../../../hooks/useCharacter";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { ApiCharactersResponse, ICharacter } from "../../../interfaces/characters";
import { StatePropsType } from "../../../interfaces/req-res-protocols";
import { Loading } from "../../Loading";
import { Pagination } from "../../Pagination";
import { CharacterCard } from "../CharacterCard";

export function CharacterCollection() {
	const [page, setPage] = useState(1);
	const { allPageCharacters, allPageCharactersRequest } = useCharacter(page); 
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<StatePropsType>();
	const { getPaginateIndex } = useLocalStorage();
	const navigate = useNavigate();
	useEffect(() => {
		const { data } = allPageCharacters;
		if(data) {
			setLoading(false);
			setData(data);
		}
	}, [allPageCharacters.isLoading]);
	return (
		<Box>
			{loading && <Loading />}
			{!loading && data && (<>
				<Box className="register-collection">
					{window.innerWidth >= 500 && (
						<>
							<Box>
								{data.results.map((item, index) => {
									if (index % 2 === 0)
										return <CharacterCard data={item as ICharacter} key={index} />;
								})}
							</Box>
							<Box>
								{data.results.map((item, index) => {
									if (index % 2 !== 0)
										return <CharacterCard data={item as ICharacter} key={index} />;
								})}
							</Box>
						</>
					)}
					{window.innerWidth < 500 && <Box>
						{data.results.map((item, index) =>
							<CharacterCard data={item as ICharacter} key={index} />
						)}
					</Box>}
				</Box>
			</>
			)}
			{data && <Box display={loading ? 'none' : ''}>
				<Pagination numPages={data.info.pages} setLoading={setLoading} setPage={setPage} setData={setData} 
				requestFn={allPageCharactersRequest} /></Box>}
		</Box>
	);
}
