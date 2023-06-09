import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";
// import { useState } from "react";


export default function DeleteModal({warehouse}) {
    // const [modal, setModal] = useState(false);
  
    // const toggleModal = () => {
    //   setModal(!modal);
    // };

    // if(modal) {
    //     document.body.classlist.add("active-modal")
    // } else {
    //     document.body.classlist.remove("active-modal")
    // }

  return (
    <>
        <div className="warehouse__modal">
          <div className="warehouse__modal-overlay"></div>
          <div className="warehouse__modal-content">
            <a className="warehouse__modal-actions--x">
              <img
                src={closeIcon}
                alt="x-close-icon"
                className="warehouse__modal-icon"
              />
            </a>
            <h1 className="warehouse__modal-header">Delete {warehouse.warehouse_name} warehouse?</h1>
            <p className="warehouse__modal-message">
              Please confirm that you’d like to delete the {warehouse.warehouse_name}  from the list of warehouses. You won’t be able to
              undo this action.
            </p>
            <div className="warehouse__modal-actions">
              <button className="warehouse__modal-actions--close">
                Cancel
              </button>
              <button className="warehouse__modal-actions--delete">Delete</button>
            </div>
          </div>
        </div>
    </>
  );
}