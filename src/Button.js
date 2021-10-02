import React, { useState } from "react";
import Modal from "./Modal";

const Button = ({ userData }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      {showModal && <Modal closeModal={closeModal} userData={userData} />}
    </div>
  );
};

export default Button;
