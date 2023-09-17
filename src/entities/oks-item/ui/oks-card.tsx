import { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react"

const BuildingCard: FC = () => {
  return (
    <Box
      bgColor={"blue.500"}
      color={"whiteAlpha.900"}
      borderRadius={8}
      p={4}
      cursor={"pointer"}
      zIndex={600}
    >
      <Heading
        as={"p"}
        fontSize={20}
        textOverflow={"ellipsis"}
        lineHeight={"5"}
      >
        Название проекта может быть длинным как здесь и не только</Heading>
      <Text>Минздрав</Text>
    </Box>
  );
};

export { BuildingCard };
