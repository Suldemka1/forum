import { Heading, Select, Stack, useToast } from "@chakra-ui/react";
import { RegionList } from "../../../app/constants/kozhuun.js";
import { CustomerList } from "../../../app/constants/customer.js";
import { useOksFilter } from "../api/useOksFilter.js";

const OksFilter = () => {
  const toast = useToast()
  const { setFilter } = useOksFilter()
  return (
    <Stack direction={"column"} gap={5}>
      <Heading fontSize={24}>Поиск по параметрам</Heading>

      <Select onChange={(e) => {
        setFilter("region", e.target.value)
        toast({
          title: 'Выбран регион',
          description: e.target.value,
          status: 'info',
          duration: 3000,
          position: "top-left",
          isClosable: true,
        })
      }}>
        <option>Не выбрано</option>
        {
          RegionList.map((item: { name: string }) => {
            return (
              <option
                key={item.name}
                value={item.name}>
                {item.name}
              </option>
            )
          })
        }
      </Select>

      <Select onChange={(e) => {
        setFilter("type", e.target.value)
        toast({
          title: 'Выбран тип ОКС',
          description: e.target.value,
          status: 'info',
          duration: 3000,
          position: "top-left",
          isClosable: true,
        })
      }}>
        <option>Не выбрано</option>
        <option>Строительство</option>
        <option>Ремонт</option>
      </Select>

      <Select onChange={(e) => {
        setFilter("customer", e.target.value)
        toast({
          title: 'Выбран заказчик',
          description: e.target.value,
          status: 'info',
          duration: 3000,
          position: "top-left",
          isClosable: true,
        })
      }}>
        <option>Не выбрано</option>
        {
          CustomerList.map((item: { name: string }) => {
            return (
              <option
                key={item.name}
                value={item.name}
              >
                {item.name}
              </option>
            )
          })
        }
      </Select>

      <Select onChange={(e) => {
        setFilter("developer", e.target.value)
        toast({
          title: 'Выбран подрядчик',
          description: e.target.value,
          status: 'info',
          duration: 3000,
          position: "top-left",
          isClosable: true,
        })
      }}>
        <option>Не выбрано</option>
        <option>ООО рога и копыта</option>
        <option>ООО санки и лыжи</option>
      </Select>
    </Stack>
  )
}

export { OksFilter }