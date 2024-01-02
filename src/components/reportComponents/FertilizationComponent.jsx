import React, { useEffect, useState } from "react";
import SharedListItem from "../ListItems/SharedListItem";
import { useSelector } from "react-redux";
import FertilizerModal from "../../Modals/FertilizerModal";

const FertilizationComponent = ({ item }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const { fertilizations } = useSelector((store) => store.fertilizations);

  const [fertilization, setFertilization] = useState({});

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  useEffect(() => {
    setFertilization(
      fertilizations.find(
        (fertilization) => fertilization?.worker_matricule === item.matricule
      )
    );
  }, [fertilizations]);

  return (
    <>
      <FertilizerModal
        modalOpened={modalOpened}
        closeModal={closeModal}
        fertilization={fertilization}
      />
      <SharedListItem item={item} openModal={openModal} data={fertilization} />
    </>
  );
};

export default FertilizationComponent;
