import { FC, useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { ChakraCarousel } from "../../carousel"
import { IImageViewer } from "../api/interface";

const ImageViewer: FC<IImageViewer> = ({ images }) => {

  const [selectedImage, setSelectedImage] = useState<string>()
  useEffect(() => {
    setSelectedImage(images[0])
  }, [])

  return (
    <>
      <Image src={selectedImage} h={500} fit={"cover"} />
      <Box minH={200}>
        <ChakraCarousel gap={32}>
          {
            images?.map((item: string) => <Box key={item}>
              <Image
                draggable={false}
                src={item}
                maxH={200} minH={200}
                fit={"cover"}
                onClick={() => {
                  setSelectedImage(item)
                }}
              />
            </Box>)
          }
        </ChakraCarousel>
      </Box>
    </>
  )
}

export { ImageViewer }