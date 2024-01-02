import React, { useEffect, useState } from "react";
import SharedListItem from "../ListItems/SharedListItem";
import ManualWeederModal from "../../Modals/ManualWeederModal";
import { useSelector } from "react-redux";

const ManualWeedingComponent = ({ item }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const { manualWeedings } = useSelector((store) => store.manualWeedings);

  const [manualWeeding, setManualWeeding] = useState({});

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  useEffect(() => {
    setManualWeeding(
      manualWeedings.find(
        (manualWeeding) => manualWeeding.worker_matricule === item.matricule
      )
    );
  }, [manualWeedings]);

  return (
    <>
      <ManualWeederModal
        modalOpened={modalOpened}
        closeModal={closeModal}
        manualWeeding={manualWeeding}
      />
      <SharedListItem item={item} openModal={openModal} data={manualWeeding} />
    </>
  );
};

export default ManualWeedingComponent;
