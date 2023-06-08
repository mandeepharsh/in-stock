import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";

export default function InventoriesList({ inventories }) {
  return (
    <ul className="inventories__list">
      {inventories.map((inventory) => {
        return (
          <div key={inventory.id} className="inventories__details">
            <div className="inventories__inventories-container">
              <h4 className="inventories__details-title">INVENTORY ITEM</h4>
              <Link
                to={`/inventories/${inventory.id}`}
                className="inventories__link"
              >
                <p className="inventories__inventories">
                  {inventory.item_name}
                  <img src={rightIcon} alt="chevron-pointing-right" />
                </p>
              </Link>
            </div>

            <div className="inventories__name-container">
              <h4 className="inventories__details-title">CATEGORY</h4>
              <p className="inventories__name">{inventory.category}</p>
            </div>

            <div className="inventories__address-container">
              <h4 className="inventories__details-title">STATUS</h4>
              <p className="inventories__address">
                {inventory.status}
              </p>
            </div>

            <div className="inventories__information-container">
              <h4 className="inventories__details-title">QTY</h4>
              <p className="inventories__information-number">
                {inventory.quantity}
              </p>
              {/* <p className="inventories__information-email">
                {inventory.contact_email}
              </p> */}
            </div>

            {/* TO ADD WAREHOUSE */}
            <div className="inventories__warehouse-container">
              <h4 className="inventories__details-title">WAREHOUSE</h4>
              {/* p tag to be altered */}
              <p className="inventories__warehouse">MANHATTAN</p>
            </div>

            <div className="inventories__icons">
              <img
                src={deleteIcon}
                alt="garbage-delete-icon"
                className="inventories__icons-del"
              />
              <Link
                to={`/inventories/${inventory.id}/edit`}
                className="inventories__icons-link"
              >
                <img
                  src={editIcon}
                  alt="pencil-edit-icon"
                  className="inventories__icons-edit"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
