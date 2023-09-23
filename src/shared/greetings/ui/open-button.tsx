import { FC } from "react";
import "./styles.css";
import { useGreetings } from "../api/store";
import { Button, Icon } from "@chakra-ui/react";

const GreetingsControl: FC = () => {
  const { setGreetingsOpen } = useGreetings();

  return (
    <Button
      position={"fixed"}
      onClick={setGreetingsOpen}
      className="greetings-control"
      margin={[10, 5, 5, 5]}
      borderWidth={2}
      borderStyle={"solid"}
      borderColor={"black"}
    >
      <Icon />
    </Button>
  );
};

export { GreetingsControl };
