//Tooling
import axios from "axios";
import { URLWarehouses } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//Icons
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";

export default function WarehouseInvList() {
  
  //set initial state for inv to be fetched/displayed
  const [inventories, setInventories] = useState([]);
  const [hasError, setHasError] = useState(false);


  //set id
  let {id} = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${URLWarehouses}/${id}/inventories`)
  //     .then((response) => {
  //       setInventories(response.data);
  //     })
  //     .catch(() => {
  //       setHasError(true);
  // }, []);

  if (inventories.length < 0) {
    return <h1>Please wait loaing inventory</h1>;
  }

  //Error state  
  if (hasError) {
    return <span>Warehouse inventory for warehouse with ID: {id} not found </span>
  }

  return (
    
    <ul className="inventories__list">
      {inventories.map((inventory) => {
        return (
          <div key={inventory.id} className="inventories__details">
            <div className="inventories__container-left">
              <div className="inventories__item-container">
                <h4 className="inventories__details-title">INVENTORY ITEM</h4>
                <Link
                  to={`/inventories/${inventory.id}`}
                  className="inventories__link"
                >
                  <p className="inventories__item">
                    {inventory.item_name}
                    <img src={rightIcon} alt="chevron-pointing-right" />
                  </p>
                </Link>
              </div>

              <div className="inventories__category-container">
                <h4 className="inventories__details-title">CATEGORY</h4>
                <p className="inventories__category">{inventory.category}</p>
              </div>
            </div>

            <div className="inventories__container-right">
              <div className="inventories__status-container">
                <h4 className="inventories__details-title">STATUS</h4>
                <p
                  className={`inventories__status ${
                    inventory.status === "In Stock"
                      ? "inventories__status--instock"
                      : "inventories__status--outstock"
                  }`}
                >
                  {inventory.status}
                </p>
              </div>

              <div className="inventories__quantity-container">
                <h4 className="inventories__details-title">QTY</h4>
                <p className="inventories__quantity">{inventory.quantity}</p>
              </div>

            </div>

            <div className="inventories__actions">
              <a href="" className="inventories__actions-link">
                <img
                  src={deleteIcon}
                  alt="garbage-delete-icon"
                  className="inventories__actions-del"
                />
              </a>
              <Link
                to={`/inventories/${inventory.id}/edit`}
                className="inventories__actions-link"
              >
                <img
                  src={editIcon}
                  alt="pencil-edit-icon"
                  className="inventories__actions-edit"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </ul>
  )
}
