import "./DeleteModal.scss";
import React, { useState } from "react";
import axios from "axios";

const DeleteModal = ({ warehouseId, onClose }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleDelete = async () => {
      try {
        // Make an API request to delete the warehouse
        await axios.delete(`/api/warehouses/${warehouseId}`);
        
        // Handle successful deletion (e.g., show a success message)
        console.log('Warehouse deleted successfully');
        
        // Close the modal
        onClose();
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error deleting warehouse:', error);
      }
    };
  
    const handleCloseModal = () => {
      // Close the modal
      onClose();
    };
  
    return (
      <>
        {/* Button or link to open the modal */}
        <button onClick={() => setShowModal(true)}>Delete Warehouse</button>
  
        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Delete Washington  warehouse?</h2>
              <p>Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
              <div className="modal-actions">
                <button onClick={handleDelete}>Cancel</button>
                <button onClick={handleCloseModal}>Delete</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
export default DeleteModal;