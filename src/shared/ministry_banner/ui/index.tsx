import { FC } from "react";
import { Heading, Image, Stack } from "@chakra-ui/react";
import { Banner } from "@/shared";

const MinistryBanner: FC = () => {
  return (
    <Banner zIndex={600} placement="top-left" w={"lg"} >
      <Stack direction={"row"} alignItems={"center"}>
        <Image src="/coat.svg" height={59} />
        <Heading color={"white"} textAlign={"left"} fontSize={24}>
          <p>Министерство строительства <br /> Республики Тыва</p>
        </Heading>
      </Stack>
    </Banner>
  )
}

export { MinistryBanner }