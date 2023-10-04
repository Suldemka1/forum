import { FC, useEffect, useState, useRef } from "react"
import { Box } from "@chakra-ui/react"
import { OksFilter, OksList, TDataStatus } from "@/features"
import { useOksData } from "@/entities"

const Sidebar: FC = () => {
  const { data: oksData } = useOksData()
  const [dataVariant, setDataVariant] = useState<TDataStatus>("empty")
  const ref = useRef(null)

  useEffect(() => {
    if (oksData.length > 0) {
      setDataVariant("filled")
    }
    if (oksData.length === 0) {
      setDataVariant("empty")
    }
  }, [oksData])

  return (
    <Box ref={ref} w={"md"} position={"absolute"} top={0} right={0} bottom={0} overflow={"scroll"} className="overflow__hidden">
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <Box zIndex={602} position={"sticky"} top={0}>
          <OksFilter />
        </Box>
        <Box overflow={"scroll"} className="overflow__hidden">
          <OksList data_variant={dataVariant} />
        </Box>
      </Box>
    </Box>
  )
}

export { Sidebar }