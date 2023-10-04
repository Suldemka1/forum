import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IOksCardComponent } from "../api/card";

const OksCard: FC<IOksCardComponent> = ({ ...props }) => {
  return (
    <Box
      bgColor={"whitesmoke"}
      color={"#1f1f50"}
      borderRadius={8}
      p={4}
      cursor={"pointer"}
      onClick={props.onClick}
      userSelect={"none"}
      className="oks-card"
      {...props}
    >
      <Heading
        as={"p"}
        fontSize={12}
        textOverflow={"ellipsis"}
        lineHeight={"5"}
      >
        {props.name}
      </Heading>
      <Text>{props.customer}</Text>
    </Box>
  )
}

export { OksCard }