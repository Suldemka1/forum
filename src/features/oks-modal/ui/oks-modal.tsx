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
} from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import { IOksModalComponent } from "../api/interface"
import { Carousel } from "@/shared/3d_carousel/ui/index"
import { TAppCarouselDataStatus } from "@/shared/3d_carousel"

const OksModal: FC<IOksModalComponent> = ({ data, isOpen, onClose }) => {

  const [startDate, setStartDate] = useState<string | undefined>(undefined)
  const [endDate, setEndDate] = useState<string | undefined>(undefined)

  const [isImagesPassed, setIsImagesPassed] = useState<boolean>(false)

  useEffect(() => {
    if (data && data.start != undefined) {
      setStartDate(new Date(data?.start).toLocaleDateString("ru-RU"))
    }
    else {
      setStartDate("Дата неизвестна")
    }
    if (data && data.end != undefined) {
      setEndDate(new Date(data?.end).toLocaleDateString("ru-RU"))
    }
    else {
      setEndDate("Дата неизвестна")
    }

    if (data && data.images && data.images.length > 0) {

      setIsImagesPassed(true)
    }
    else {
      setIsImagesPassed(false)
    }

  }, [data])

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size={"6xl"}>
      <ModalOverlay />
      <ModalContent bg={"transparent"} color={"white"}>
        <ModalHeader>
          <Heading fontSize={28}>{data?.name}</Heading>
        </ModalHeader>
        <ModalBody display={"flex"} flexDirection={"column"} gap={5} bg={"transparent"} p={0}>

          <Carousel
            data_status={isImagesPassed ? "filled" as TAppCarouselDataStatus : "empty" as TAppCarouselDataStatus}
          />

          <Stack direction={"row"} flexWrap={"wrap"} my={4}>
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
          </Stack>

        </ModalBody>
        <ModalFooter bg={"white"}>
          <Stack w={"full"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={10}>
            <Stack direction={"row"} alignItems={"center"}>

              <Tag bg={"#1f1f50"} p={[2, 3]}>
                <Text color={"#FFF"} fontSize={16}>Дата начала: {startDate}</Text>
              </Tag>


              <Tag bg={"#1f1f50"} p={[2, 3]}>
                <Text color={"#FFF"} fontSize={16}>Дата окончания: {endDate}</Text>
              </Tag>

            </Stack>


            <Button onClick={onClose}>Закрыть</Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { OksModal }