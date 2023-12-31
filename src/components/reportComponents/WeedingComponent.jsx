import { useEffect, useState } from "react";
import WeedingModal from "../../Modals/WeedingModal";
import SharedListItem from "../ListItems/SharedListItem";
import { useSelector } from "react-redux";

const WeedingComponent = ({ item }) => {
  const { weedings } = useSelector((store) => store.weedings);
  const [weeding, setWeeding] = useState({});
  const [opened, setOpened] = useState(false);
  const closeModal = () => {
    setOpened(false);
  };
  const openModal = () => {
    setOpened(true);
  };

  useEffect(() => {
    setWeeding(
      weedings.find((weeding) => weeding.worker_matricule === item.matricule)
    );
  }, [weedings]);

  return (
    <>
      <WeedingModal
        weeder={item}
        opened={opened}
        closeModal={closeModal}
        weeding={weeding}
      />
      <SharedListItem item={item} openModal={openModal} data={weeding} />
    </>
  );
};

export default WeedingComponent;
