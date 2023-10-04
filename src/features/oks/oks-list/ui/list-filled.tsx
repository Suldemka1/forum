import { Stack } from "@chakra-ui/react";
import { FC, useEffect, useId } from "react";
import { useOksData, OksCard } from "@/entities";
import { useOksModal } from "@/features";

const oksCards = document.querySelectorAll(".oks-card")
const obj = new IntersectionObserver((entries) => {
  if (oksCards) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('oks-card-transition');
        return;
      }

      entry.target.classList.remove('oks-card-transition');
    })
  }
})

const OksListFilled: FC = () => {

  const { data } = useOksData();
  const { setIsModalOpen, setModalData } = useOksModal()

  const id = useId();

  useEffect(() => {
    const classes = document.querySelectorAll('.oks-card')
    if (classes) {
      classes.forEach((item) => obj.observe(item))
    }
  }, [data])

  return (
    <Stack
      direction={"column"}
      gap={5}
      overflowY={"scroll"}
      overflow={"scroll"}
      className="overflow__hidden"
      zIndex={600}
      p={5}
    >
      {
        data?.map((item, index) => {
          return (
            <OksCard
              key={`${id}-${index}`}
              name={item.name}
              customer={item.customer}
              onClick={() => {
                setIsModalOpen(true)
                setModalData(item);
              }} />
          );
        })
      }
    </Stack>
  )
}

export { OksListFilled }