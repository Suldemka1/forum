import { Heading, Select, Stack, useToast } from "@chakra-ui/react";
import { RegionList } from "../../../app/constants/kozhuun.js";
import { CustomerList } from "../../../app/constants/customer.js";
import { useOksFilter } from "../api/useOksFilter.js";
import { useOksData } from "../api/useOksData.js";
import { useEffect } from "react";

const OksFilter = () => {
  const toast = useToast();
  const { filters, setFilter, removeFilter } = useOksFilter();
  const { setData } = useOksData();

  useEffect(() => {
    setData();
  }, [filters]);

  return (
    <Stack direction={"column"} gap={5}>
      <Heading fontSize={24}>Поиск по параметрам</Heading>

      <Select
        onChange={(e) => {
          if (e.target.value != "Не выбрано") {
            console.log(e.target.value)
            setFilter("region", e.target.value);
            toast({
              title: "Выбран регион",
              description: e.target.value,
              status: "info",
              duration: 3000,
              position: "top-left",
              isClosable: true,
            });
          } else {
            removeFilter("region");
          }
        }}
      >
        <option value={"Не выбрано"}>Не выбрано</option>
        {RegionList?.map((item: { name: string }) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </Select>

      <Select
        onChange={(e) => {
          if (e.target.value != "Не выбрано") {
            setFilter("type", e.target.value);
            toast({
              title: "Выбран тип ОКС",
              description: e.target.value,
              status: "info",
              duration: 3000,
              position: "top-left",
              isClosable: true,
            });
          } else {
            removeFilter("type");
          }
        }}
      >
        <option value={"Не выбрано"}>Не выбрано</option>
        <option>Строительство</option>
        <option>Ремонт</option>
      </Select>

      <Select
        onChange={(e) => {
          if (e.target.value != "Не выбрано") {
            setFilter("customer", e.target.value);
            toast({
              title: "Выбран заказчик",
              description: e.target.value,
              status: "info",
              duration: 3000,
              position: "top-left",
              isClosable: true,
            });
          }
          else {
            removeFilter("customer")
          }
        }}
      >
        <option value={"Не выбрано"}>Не выбрано</option>
        {CustomerList?.map((item: { name: string }) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </Select>

      <Select
        onChange={(e) => {
          if (e.target.value != "Не выбрано") {
            setFilter("developer", e.target.value);
            toast({
              title: "Выбран подрядчик",
              description: e.target.value,
              status: "info",
              duration: 3000,
              position: "top-left",
              isClosable: true,
            });
          } else {
            removeFilter("developer");
          }
        }}
      >
        <option value={"Не выбрано"}>Не выбрано</option>
        <option>ООО рога и копыта</option>
        <option>ООО санки и лыжи</option>
      </Select>
    </Stack>
  );
};

export { OksFilter };
