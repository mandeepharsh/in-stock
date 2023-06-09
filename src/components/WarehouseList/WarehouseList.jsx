import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function WarehouseList({ warehouses }) {
  const [modal, setModal] = useState(false);
  const [warehouse, setWarehouse] = useState(false);

  const toggleModal = (warehouse) => {
    setModal(!modal);
    setWarehouse(warehouse);
  };

  return (
    <>
       {modal && (<DeleteModal warehouse={warehouse}/>)}

 
    <ul className="warehouses__list">
      {warehouses.map((warehouse) => {
        return (
          <div key={warehouse.id} className="warehouses__details">
            <div className="warehouses__warehouse-container">
              <h4 className="warehouses__details-title">WAREHOUSE</h4>
              <Link
                to={`/warehouses/${warehouse.id}`}
                className="warehouses__link"
              >
                <p className="warehouses__warehouse">
                  {warehouse.warehouse_name}
                  <img src={rightIcon} alt="chevron-pointing-right" />
                </p>
              </Link>
            </div>

            <div className="warehouses__name-container">
              <h4 className="warehouses__details-title">CONTACT NAME</h4>
              <p className="warehouses__name">{warehouse.contact_name}</p>
            </div>

            <div className="warehouses__address-container">
              <h4 className="warehouses__details-title">ADDRESS</h4>
              <p className="warehouses__address">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
            </div>

            <div className="warehouses__information-container">
              <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
              <p className="warehouses__information-number">
                {warehouse.contact_phone}
              </p>
              <p className="warehouses__information-email">
                {warehouse.contact_email}
              </p>
            </div>

            <div className="warehouses__icons">
              <img onClick={()=>toggleModal(warehouse)}
                src={deleteIcon}
                alt="garbage-delete-icon"
                className="warehouses__icons-del"
              />

              <Link
                to={`/warehouses/${warehouse.id}/edit`}
                className="warehouses__icons-link"
              >
                <img
                  src={editIcon}
                  alt="pencil-edit-icon"
                  className="warehouses__icons-edit"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </ul>
    </>
  );
}
