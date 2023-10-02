import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalFooter,
  Stack,
  Tag,
  Text,
  Image,
  Button,
  Box
} from "@chakra-ui/react"
import { FC, TouchEventHandler, useEffect, useState } from "react"
import { IOksModalComponent } from "../api"
import { Carousel } from "../../../shared/3d_carousel/ui/index"
import { config } from "react-spring"
import { ISlide } from "../../../shared/3d_carousel/api/interface"



const OksModal: FC<IOksModalComponent> = ({ data, isOpen, onClose }) => {
  // const [slides, setSlides] = useState<Array<ISlide> | undefined>()

  const startDate = new Date(data?.start).toLocaleDateString("ru-RU")
  const endDate = new Date(data?.end).toLocaleDateString("ru-RU")



  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={"6xl"}>
      <ModalOverlay />
      <ModalContent bg={"transparent"} color={"white"}>
        <ModalHeader><Heading fontSize={28}>{data?.name}</Heading></ModalHeader>
        <ModalBody display={"flex"} flexDirection={"column"} gap={5} bg={"transparent"} p={0}>

          {data?.images && <Carousel slides={data?.images} />}

          <Stack direction={"row"}>
            {
              data?.customer && (
                <Tag bg={"#1f1f50"}>
                  <Heading color={"#FFF"} fontSize={20} px={4} py={2}>
                    {data?.customer}
                  </Heading>
                </Tag>
              )
            }

            {
              data?.developer && (
                <Tag bg={"#1f1f50"}>
                  <Heading color={"#FFF"} fontSize={20} px={4} py={2}>
                    {data?.developer}
                  </Heading>
                </Tag>
              )
            }
          </Stack>
          <Tag w={"fit-content"}>
            <Stack direction={"row"} alignItems={"center"} py={2}>

              {data?.region && (
                <>
                  <Image src="/icons/location.png" w={6} />
                  <Text>{data?.region},</Text>
                </>
              )}

              {data?.locality && (
                <>
                  <Text>населенный пункт</Text>
                  <Text>{data?.locality},</Text>
                </>
              )}
              {data?.street && (
                <>
                  <Text>улица</Text>
                  <Text>{data?.street},</Text>
                </>
              )}
              {data?.house && (
                <>
                  <Text>дом</Text>
                  <Text>{data?.house}</Text>
                </>
              )}
            </Stack>
          </Tag>
        </ModalBody>
        <ModalFooter bg={"white"}>
          <Stack w={"full"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={10}>
            <Stack direction={"row"} alignItems={"center"}>
              {data?.start && (
                <Tag bg={"#1f1f50"} p={[2, 3]}>
                  <Text color={"#FFF"} fontSize={16}>Дата начала: {startDate}</Text>
                </Tag>
              )}
              {data?.end && (
                <Tag bg={"#1f1f50"} p={[2, 3]}>
                  <Text color={"#FFF"} fontSize={16}>Дата окончания: {endDate}</Text>
                </Tag>
              )}
            </Stack>


            <Button onClick={onClose}>Закрыть</Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { OksModal }