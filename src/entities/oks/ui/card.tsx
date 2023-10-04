import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IOksCardComponent } from "../api/card";

const OksCard: FC<IOksCardComponent> = ({ ...props }) => {
  return (
    <Box
      bgColor={"whitesmoke"}
      color={"#1f1f50"}
      borderRadius={8}
      p={3}
      cursor={"pointer"}
      onClick={props.onClick}
      userSelect={"none"}
      className="oks-card"
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      {...props}
    >
      <Text
        overflow={"hidden"}
        noOfLines={2}
        fontWeight={700}
        lineHeight={1.2}
        height={10}
        textAlign={"left"}
        textOverflow={"ellipsis"}
      >
        {props.name}
      </Text>
      <Text textAlign={"left"} fontWeight={400}>{props.customer}</Text>
    </Box>
  )
}

export { OksCard }