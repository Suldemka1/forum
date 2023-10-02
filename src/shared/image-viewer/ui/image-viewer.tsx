import { FC } from "react";
import { Box, Image } from "@chakra-ui/react";
import { ChakraCarousel } from "../../carousel";
import { IImageViewer } from "../api/interface";

const ImageViewer: FC<IImageViewer> = ({ images }) => {
  return (
    <Box w={"100%"} p={0}>
      <ChakraCarousel gap={32}>
        {images?.map((item: any) => (
          <Box key={item} w={"100%"}>
            <Image
              draggable={false}
              src={`https://gisoks.ru/cms/assets/${item?.directus_files_id}`}

              w={"full"}

              maxH={500}
              fit={"cover"}
            />
          </Box>
        ))}
      </ChakraCarousel>
    </Box>
  );
};

export { ImageViewer };
