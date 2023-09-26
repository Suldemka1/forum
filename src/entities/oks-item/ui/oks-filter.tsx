import { Heading, Select, Stack, useToast } from "@chakra-ui/react";
import { useOksFilter } from "../api/useOksFilter.js";

const OksFilter = () => {
  const toast = useToast();
  const { setQueryParams, removeQueryParamByName, filters } = useOksFilter();

  return (
    <Stack direction={"column"} gap={5}>
      <Heading fontSize={24}>Поиск по параметрам</Heading>

      {
        filters.map((item) => {
          return (
            <Select
              value={item.selectedValue}
              onChange={(e) => {
                if (e.target.value != "Не выбрано") {
                  setQueryParams(item.filter_name, e.target.value);
                  toast({
                    title: "Выбран подрядчик",
                    description: e.target.value,
                    status: "info",
                    duration: 3000,
                    position: "top-left",
                    isClosable: true,
                  });
                } else {
                  removeQueryParamByName(item.filter_name);
                }
              }}
            >
              <option value={"Не выбрано"}>Не выбрано</option>
              {
                [...(item.values || [])].map((item) => {
                  console.log(item)
                  return (
                    <option key={String(item)} value={String(item)}>{String(item)}</option>
                  )
                })
              }
            </Select>
          )
        })
      }
    </Stack>
  );
};

export { OksFilter };
