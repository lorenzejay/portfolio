import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

function Modal({ children, openModal, modalTitle }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <Button handleClick={() => setModalActive(true)}>{modalTitle}</Button>
      <div className="modal" style={{ display: modalActive === true ? "block" : "none" }}>
        <div className="modal-content">
          <span onClick={() => setModalActive(false)} style={{ cursor: "pointer" }}>
            X
          </span>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
