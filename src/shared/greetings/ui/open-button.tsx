import { FC } from "react";
import "./styles.css";
import { useGreetings } from "../api/store";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons"

const GreetingsControl: FC = () => {
  const { setGreetingsOpen } = useGreetings();

  return (
    <Avatar
      // position={"absolute"}
      onClick={setGreetingsOpen}
      className="greetings-control"
      // margin={[10, 5, 5, 5]}
      borderWidth={2}
      borderStyle={"solid"}
      borderColor={"black"}
      src="/boss.png"
      h={"16"}
      w={"16"}
      borderRadius={"6"}
      cursor={"pointer"}
    >
      <AvatarBadge bg="green.500"><BellIcon h={5} w={5} /></AvatarBadge>
    </Avatar>

  );
};

export { GreetingsControl };
