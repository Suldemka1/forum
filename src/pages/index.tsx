import { Map } from "../entities/map";
import { OksDrawer } from "../entities/oks-item/ui/oks-drawer";
import { Greetings } from "../shared/greetings";

const Home = () => {
  return (
    <>
      <Map />
      <Greetings />
      <OksDrawer />
    </>
  );
};

export default Home;