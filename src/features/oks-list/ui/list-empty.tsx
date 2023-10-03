import { Box, Heading, Stack } from "@chakra-ui/react";
import { FC, useId } from "react";
import { useOksFilter } from "../../oks-filter";
import kozhuuns from "@/assets/polygons.json"

const OksListEmpty: FC = () => {
  const { filters, setQueryParams, removeQueryParamByName, removeAllQueryParams, setSelectedValueOnFilter } = useOksFilter()
  const id = useId()

  return <Stack direction={"column"} gap={5}>
    <Heading color={"white"} fontSize={24}>Нет данных по выбранному фильтру</Heading>
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
                setSelectedValueOnFilter("region", item)
                if (kozhuuns.features.find((kozhuun) => kozhuun.properties.description === item) != undefined) {
                  removeAllQueryParams()
                  setQueryParams("region", item)
                  setSelectedValueOnFilter("region", item)
                }
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
            onClick={() => {
              removeAllQueryParams()
              removeQueryParamByName("region")
            }}
          >
            Все
          </Box>
        }

      })
    }
  </Stack>
}

export { OksListEmpty }