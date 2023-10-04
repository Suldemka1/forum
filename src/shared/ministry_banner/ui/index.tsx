import { FC } from "react";
import { Heading, Image, Stack } from "@chakra-ui/react";
import { Banner } from "@/shared";

const MinistryBanner: FC = () => {
  return (
    <Banner zIndex={600} placement="top-left" w={"lg"} >
      <Stack direction={"row"} alignItems={"center"} gap={5}>
        <Image src="/coat.svg" height={75} />
        <Heading color={"white"} textAlign={"left"} fontSize={30} fontWeight={400} letterSpacing={3}>
          <p>Министерство строительства <br /> Республики Тыва</p>
        </Heading>
      </Stack>
    </Banner>
  )
}

export { MinistryBanner }