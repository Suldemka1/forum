import { FC, useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { ChakraCarousel } from "../../carousel";
import { IImageViewer } from "../api/interface";

const ImageViewer: FC<IImageViewer> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>(String(images[0]?.directus_files_id));

  useEffect(() => {
    setSelectedImage(images[0]?.directus_files_id);
  }, [images]);

  return (
    <>
      <Image src={`https://gisoks.ru/cms/assets/${selectedImage}`} h={500} fit={"cover"} />
      <Box minH={200}>
        <ChakraCarousel gap={32}>
          {images?.map((item: any) => (
            <Box key={item}>
              <Image
                draggable={false}
                src={`https://gisoks.ru/cms/assets/${item?.directus_files_id}`}
                maxH={200}
                minH={200}
                fit={"cover"}
                onClick={() => {
                  setSelectedImage(item?.directus_files_id);
                }}
              />
            </Box>
          ))}
        </ChakraCarousel>
      </Box>
    </>
  );
};

export { ImageViewer };
