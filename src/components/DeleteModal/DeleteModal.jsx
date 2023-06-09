import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";


export default function DeleteModal({warehouse}) {

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
            <h1 className="warehouse__modal-header">Delete Manhattan warehouse?</h1>
            <p className="warehouse__modal-message">
              Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to
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