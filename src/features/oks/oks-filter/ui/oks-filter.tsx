import { Box, Select, Stack } from "@chakra-ui/react";
import { useOksFilter } from "../api";
import { FC, useId } from "react";
import { IOksFilterComponent } from "../api/interface";

const OksFilter: FC<IOksFilterComponent> = () => {
  const { setQueryParams, removeQueryParamByName, filters, setSelectedValueOnFilter } = useOksFilter();
  const id = useId()

  return (
    <Box py={2}>
      <Stack direction={"column"} gap={5}>
        {
          filters.map((item, index) => {
            return (
              <Select
                key={`${id}-${index}-${item.filter_name}`}
                bg={"white"}
                value={filters[index].selectedValue}

                onChange={(e) => {

                  setSelectedValueOnFilter(item.filter_name, e.target.value)
                  if (e.target.value != "Не выбрано") {
                    setQueryParams(item.filter_name, e.target.value);
                  } else {
                    removeQueryParamByName(item.filter_name);
                  }

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
