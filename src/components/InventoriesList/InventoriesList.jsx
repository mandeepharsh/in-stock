import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import { useState } from "react";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";

export default function InventoriesList({ inventories }) {
  const [invmodal, setInvModal] = useState(false);
  const [inventory, setInventory] = useState(false);

  const toggleInventoryModal = (inventory) => {
    setInvModal(true);
    setInventory(inventory);
  };

  return (
    <>
      {invmodal && (
        <DeleteInventoryModal
          inventory={inventory}
          toggleInventoryModal={toggleInventoryModal}
        />
      )}

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

                <div className="inventories__warehouse-container">
                  <h4 className="inventories__details-title">WAREHOUSE</h4>
                  <p className="inventories__warehouse">
                    {inventory.warehouse_name}
                  </p>
                </div>
              </div>

              <div className="inventories__actions">
                <div className="inventories__actions-link">
                  <img
                    onClick={() => toggleInventoryModal(inventory)}
                    src={deleteIcon}
                    alt="garbage-delete-icon"
                    className="inventories__actions-del"
                  />
                </div>
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
    </>
  );
}
