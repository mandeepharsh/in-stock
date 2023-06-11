import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteInventoryModal.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DeleteInventoryModal({
  inventory,
  toggleInventoryModal,
}) {
  console.log(inventory);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function removeInventory(id) {
    axios
      .delete(`http://localhost:8080/inventories/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
    toggleInventoryModal();
    window.scroll(0, 0);
  }

  return (
    <>
      <div className="inventory__modal">
        <div className="inventory__modal-overlay"></div>
        <div className="inventory__modal-content">
          <a
            className="inventory__modal-actions--x"
            onClick={toggleInventoryModal}
          >
            <img
              src={closeIcon}
              alt="x-close-icon"
              className="inventory__modal-icon"
            />
          </a>
          <h1 className="inventory__modal-header">
            Delete {inventory.item_name} inventory item?
          </h1>
          <p className="inventory__modal-message">
            Please confirm that you’d like to delete {inventory.item_name} from
            the inventory list. You won’t be able to undo this action.
          </p>
          <div className="inventory__modal-actions">
            <button
              className="inventory__modal-actions--close"
              onClick={toggleInventoryModal}
            >
              Cancel
            </button>
            <button
              className="inventory__modal-actions--delete"
              onClick={() => removeInventory(inventory.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
