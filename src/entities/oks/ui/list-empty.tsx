import { Box, Heading, Stack } from "@chakra-ui/react";
import { FC, useId } from "react";
import { useOksFilter } from "../api";

const OksListEmpty: FC = () => {
  const { filters, setQueryParams, removeQueryParamByName, removeAllQueryParams } = useOksFilter()
  const id = useId()
  return <Stack direction={"column"} gap={5}>
    <Heading>Нет данных по выбранному фильтру</Heading>
    {
      [...filters.find((item) => item.filter_name === "region")?.values || []]?.map((item) => {
        if (item != "Не выбрано") {
          return (
            <Box key={`${id}-${item}`} bgColor={"whitesmoke"}
              color={"#1f1f50"}
              borderRadius={8}
              p={4}
              cursor={"pointer"}
              onClick={() => {
                removeAllQueryParams()
                setQueryParams("region", item)
              }}
            >
              {item}
            </Box>
          )
        }
        else {
          return <Box key={`${id}-${item}`} bgColor={"whitesmoke"}
            color={"#1f1f50"}
            borderRadius={8}
            p={4}
            cursor={"pointer"}
            onClick={() => removeQueryParamByName("region")}
          >
            Все
          </Box>
        }

      })
    }
  </Stack>
}

export { OksListEmpty }