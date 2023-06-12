//Tooling
import axios from "axios";
import { URLWarehouses } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//styling

import "./WarehouseInvList.scss"

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

  useEffect(() => {
    axios
      .get(`${URLWarehouses}/${id}/inventories`)
      .then((response) => {
        setInventories(response.data);
      })
      .catch(() => {
        setHasError(true);
      })
  }, []);

  if (inventories.length < 0) {
    return <h1>Please wait loading inventory</h1>;
  }

  //Error state  
  if (hasError) {
    return <span>Warehouse inventory for warehouse with ID: {id} not found </span>
  }

  return (

    <section className="inventory-warehouse">
      <ul className="inventory-warehouse__list">
        {inventories.map((inventory) => {
          return (
            <div key={inventory.id} className="inventory-warehouse__details">
              <div className="inventory-warehouse__container-left">
                <div className="inventory-warehouse__item-container">
                  <h4 className="inventory-warehouse__details-title">INVENTORY ITEM</h4>
                  <Link
                    to={`/inventories/${inventory.id}`}
                    className="inventory-warehouse__link"
                  >
                    <p className="inventory-warehouse__item">
                      {inventory.item_name}
                      <img src={rightIcon} alt="chevron-pointing-right" />
                    </p>
                  </Link>
                </div>
                <div className="inventory-warehouse__category-container">
                  <h4 className="inventories-warehouse__details-title">CATEGORY</h4>
                  <p className="inventories-warehouse__category">{inventory.category}</p>
                </div>
              </div>
              <div className="inventory-warehouse__container-right">
                <div className="inventory-warehouse__status-container">
                  <h4 className="inventory-warehouse__details-title">STATUS</h4>
                  <p
                    className={`inventory-warehouse__status ${
                      inventory.status === "In Stock"
                        ? "inventory-warehouse__status--instock"
                        : "inventory-warehouse__status--outstock"
                    }`}
                  >
                    {inventory.status}
                  </p>
                </div>
                <div className="inventory-warehouse__quantity-container">
                  <h4 className="inventory-warehouse__details-title">QTY</h4>
                  <p className="inventory-warehouse__quantity">{inventory.quantity}</p>
                </div>
              </div>
              <div className="inventory-warehouse__actions">
                <a href="" className="inventory-warehouse__actions-link">
                  <img
                    src={deleteIcon}
                    alt="garbage-delete-icon"
                    className="inventory-warehouse__actions-del"
                  />
                </a>
                <Link
                  to={`/inventories/${inventory.id}/edit`}
                  className="inventory-warehouse__actions-link"
                >
                  <img
                    src={editIcon}
                    alt="pencil-edit-icon"
                    className="inventory-warehouse__actions-edit"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  )
}
