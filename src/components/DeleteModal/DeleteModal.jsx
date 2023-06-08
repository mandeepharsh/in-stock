import { useState } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";

export default function DeleteModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <a onClick={toggleModal} className="warehouse__button">
        <img
          src={deleteIcon}
          alt="garbage-delete-icon"
          className="warehouses__icons-del"
        />
      </a>
      {modal && (
        <div className="warehouse__modal">
          <div className="warehouse__modal-overlay" onClick={toggleModal}></div>
          <div className="warehouse__modal-content">
            <a className="warehouse__modal-actions--x" onClick={toggleModal}>
              <img
                src={closeIcon}
                alt="x-close-icon"
                className="warehouse__modal-icon"
              />
            </a>
            <h1 className="warehouse__modal-header">Delete Manhattan warehouse?</h1>
            <p className="warehouse__modal-message">
              Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to
              undo this action.
            </p>
            <div className="warehouse__modal-actions">
              <button className="warehouse__modal-actions--close" onClick={toggleModal}>
                Cancel
              </button>
              <button className="warehouse__modal-actions--delete">Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}