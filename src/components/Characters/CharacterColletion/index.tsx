import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCharacter } from "../../../hooks/useCharacter";
import { Loading } from "../../Loading";
import { CharacterCard } from "../CharacterCard";

export function CharacterCollection() {
	const { allCharacters } = useCharacter();
	const [screen, setScreen] = useState(0);
	const navigate = useNavigate();
	useEffect(() => {
		setScreen(window.innerWidth);
	}, [window.innerWidth]);
	return (
		<Box>
			{allCharacters.isLoading && <Loading />}
			{allCharacters.data && (
				<Box w="90%" m="40px auto" display="flex" justifyContent="space-around">
					{screen >= 500 && (
						<>
							<Box>
								{allCharacters.data.results.map((item, index) => {
									if (index % 2 === 0)
										return <CharacterCard data={item} key={index} />;
								})}
							</Box>
							<Box>
								{allCharacters.data.results.map((item, index) => {
									if (index % 2 !== 0)
										return <CharacterCard data={item} key={index} />;
								})}
							</Box>
						</>
					)}
					{screen < 500 && <Box>
						{allCharacters.data.results.map((item, index) =>
							<CharacterCard data={item} key={index} />
						)}
					</Box>}
				</Box>
			)}
		</Box>
	);
}
