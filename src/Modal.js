import React, { useEffect } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  .modal {
    width: 390px;
    height: 180px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    padding: 10px;
    h4 {
      text-align: center;
      color: #444;
      font-size: 1.5rem;
    }
    .modal-btns {
      display: flex;
      justify-content: center;
    }
  }
`;

const Modal = ({ closeModal, userData }) => {
  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  });

  return (
    <StyledModal>
      <div ref={(node) => (modalRef = node)} className="modal">
        <h4>{userData.username}</h4>
        <p>{userData.email}</p>
        <div className="modal-btns">
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
