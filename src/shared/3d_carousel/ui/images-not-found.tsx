import { Box, Button, Heading, Input, useToast, Image } from "@chakra-ui/react";
import { FC } from "react";

const EmptyImageData: FC = () => {
  const toast = useToast()
  return (
    <Box h={"full"} >
      <Box h={"full"} minH={500} display={"flex"} flexDirection={"column"} gap={4} alignItems={"center"} justifyContent={"center"}>
        <Heading as={"p"} fontSize={28} fontWeight={700}>К сожалению у нас нет фотографий, но вы можете предложить свои</Heading>
        <label htmlFor="file-upload">
          <Button as={"p"}>Загрузить фотографии</Button>
        </label>
        <Input id="file-upload" type="file" display={"none"} onChange={() => {
          toast({
            title: 'Спасибо вам за ваше предложение',
            description: "Мы обязательно ознакомимся и воспользуемся",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: "top-left"
          })
        }} />
      </Box>
    </Box>
  );
};

export { EmptyImageData };
