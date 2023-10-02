import { Box, Heading, Select, Stack } from "@chakra-ui/react";
import { useOksFilter } from "../api/useOksFilter";
import { FC, useId } from "react";
import { IOksFilterComponent } from "../api";

const OksFilter: FC<IOksFilterComponent> = () => {
  const { setQueryParams, removeQueryParamByName, filters, setSelectedValueOnFilter } = useOksFilter();
  const id = useId()
  return (
    <Box bg={"#040436"} p={5}>
      <Stack direction={"column"} gap={5}>
        <Heading color={"white"} fontSize={24}>Поиск по параметрам</Heading>

        {
          filters.map((item, index) => {
            return (
              <Select
                key={`${id}-${index}-${item.filter_name}`}
                bg={"white"}
                value={filters[index].selectedValue}
                onChange={(e) => {
                  if (e.target.value != "Не выбрано") {
                    setQueryParams(item.filter_name, e.target.value);
                  } else {
                    removeQueryParamByName(item.filter_name);
                  }
                  setSelectedValueOnFilter(item.filter_name, e.target.value)
                }}
              >
                {
                  [...(item.values)].map((option, index) => {
                    if (option) {
                      return <option
                        key={`${id}-${index}-${option}`}
                        value={option}
                      >
                        {option}
                      </option>
                    }
                  })
                }
              </Select>
            )
          })
        }
      </Stack>
    </Box>

  );
};

export { OksFilter };
