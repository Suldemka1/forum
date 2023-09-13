import { Map } from "../entities/map";
import { Fade } from "../shared/fade";
import { Greetings } from "../shared/greetings";

const Home = () => {
  return (
    <>
      <Map />
      <Fade />
      <Greetings />
    </>
  );
};

export default Home;