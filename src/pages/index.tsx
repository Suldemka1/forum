import { Map } from "../entities/map";
import { BuildingsList } from "../entities/oks-item/ui/oks-list";
import { Greetings } from "../shared/greetings";

const Home = () => {
  return (
    <>
      <Map />
      <Greetings />
      <BuildingsList />
    </>
  );
};

export default Home;