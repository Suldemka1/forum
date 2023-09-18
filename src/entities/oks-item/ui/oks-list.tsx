import { Box, Heading, Text } from "@chakra-ui/react";
import { FC, useId } from "react";
//@ts-ignore
import ChakraCarousel from "../../../shared/carousel/ui/carousel.jsx"
import { useOksData } from "../api/useOksData.js";


const OksList: FC = () => {
  const { data } = useOksData()
  const id = useId()
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      overflowY={"scroll"}
      className="overflow__hidden"
      zIndex={600}
    >
      {
        data?.map((item,index) => {
          
          return (
            <Box
              bgColor={"blue.500"}
              color={"whiteAlpha.900"}
              borderRadius={8}
              p={4}
              cursor={"pointer"}
              zIndex={600}
              key={String(id).concat(String(index))}
            >
              <Heading
                as={"p"}
                fontSize={20}
                textOverflow={"ellipsis"}
                lineHeight={"5"}
              >
                {item.name}
              </Heading>
              <Text>{item.customer}</Text>
            </Box>
          )
        })
      }
    </Box>

  );
};

export { OksList };
