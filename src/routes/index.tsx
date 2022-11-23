import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterDetails } from "../pages/CharacterDetails";
import { Episodes } from "../pages/Episodes";
import { Characters } from "../pages/Characters";
import { Locations } from "../pages/Locations";
import { EpisodeDetails } from "../pages/EpisodeDetails";
import { LocationsDetails } from "../pages/LocationDetails";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
		<Route path='/characters' element={<></>} />
		<Route path='/characters/:characterName' element={<CharacterDetails />} />
		<Route path='/locations' element={<Locations />} />
		<Route path='/locations/:locationName' element={<LocationsDetails />} />
		<Route path='/episodes' element={<Episodes />} />
		<Route path='/episodes/:episodeName' element={<EpisodeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
