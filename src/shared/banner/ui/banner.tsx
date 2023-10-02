import { Box } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import { IBanner, IBannerPosition } from "../api/interface"

const Banner: FC<IBanner> = ({ children, placement, zIndex, w = "md" }) => {
  const [position, setPosition] = useState<IBannerPosition>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })

  useEffect(() => {
    switch (placement) {
      case "top": {
        setPosition({
          top: 0,
          right: undefined,
          left: undefined,
          bottom: undefined
        });
        break;
      }
      case "top-right": {
        setPosition({
          top: 0,
          right: 0,
          left: undefined,
          bottom: undefined
        });
        break;
      }
      case "top-left": {
        setPosition({
          top: 0,
          right: undefined,
          left: 0,
          bottom: undefined
        });
        break;
      }
      case "bottom": {
        setPosition({
          top: undefined,
          right: undefined,
          left: undefined,
          bottom: 0
        });
        break;
      }
      case "bottom-right": {
        setPosition({
          top: undefined,
          right: 0,
          left: undefined,
          bottom: 0
        });
        break;
      }
      case "bottom-left": {
        setPosition({
          top: undefined,
          right: undefined,
          left: 0,
          bottom: 0
        });
        break;
      }
      default: {
        setPosition({
          top: undefined,
          right: undefined,
          left: undefined,
          bottom: undefined
        });
      }
    }
  }, [])
  return (
    <Box
      w={w}
      position={"absolute"}
      top={position.top}
      right={position.right}
      bottom={position.bottom}
      left={position.left}
      zIndex={zIndex}
      m={10}
    >
      {children}
    </Box>
  )
}

export { Banner }