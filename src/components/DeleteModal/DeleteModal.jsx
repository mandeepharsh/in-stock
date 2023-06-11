import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";
import React, { useState } from "react";
import axios from "axios";

export default function DeleteModal({ warehouse, toggleModal }) {
  function removeWarehouse(id) {
    axios
      .delete(`http://localhost:8080/warehouses/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
    toggleModal();
  }

  return (
    <>
      <div className="warehouse__modal">
        <div className="warehouse__modal-overlay"></div>
        <div className="warehouse__modal-content">
          <a className="warehouse__modal-actions--x" onClick={toggleModal}>
            <img
              src={closeIcon}
              alt="x-close-icon"
              className="warehouse__modal-icon"
            />
          </a>
          <h1 className="warehouse__modal-header">
            Delete {warehouse.warehouse_name} warehouse?
          </h1>
          <p className="warehouse__modal-message">
            Please confirm that you’d like to delete the{" "}
            {warehouse.warehouse_name} from the list of warehouses. You won’t be
            able to undo this action.
          </p>
          <div className="warehouse__modal-actions">
            <button
              className="warehouse__modal-actions--close"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="warehouse__modal-actions--delete"
              onClick={() => removeWarehouse(warehouse.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
