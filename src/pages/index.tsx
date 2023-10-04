import { Map } from "@/entities";
import { useOksModal, OksModal } from "@/features";
import { MinistryBanner, MapZoomControl, Banner, Sidebar } from "@/shared";

const Home = () => {
  const { isModalOpen, setIsModalOpen, data: modalData } = useOksModal()

  return (
    <>
      <Map />
      <Sidebar />
      <OksModal data={modalData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Banner placement="bottom" zIndex={600} margin={"auto"} w={"full"}  >
        <MapZoomControl />
      </Banner>

      <MinistryBanner />
    </>
  );
};

export default Home;