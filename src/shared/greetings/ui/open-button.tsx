import { FC } from "react";
import "./styles.css";
import { useGreetings } from "../api/store";
import { Button } from "@chakra-ui/react";

const GreetingsControl: FC = () => {
  const { setGreetingsOpen } = useGreetings();

  return (
    <Button
      position={"fixed"}
      onClick={setGreetingsOpen}
      className="greetings-control"
    >
      open greetings
    </Button>
  );
};

export { GreetingsControl };
