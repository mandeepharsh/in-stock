import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

export default function InventoriesHeader() {
  return (
    <>
      <div className="inventories__header">
        <h1 className="inventories__title">Inventory</h1>
        <div className="inventories__cta">
          <div className="inventories__search">
            <input
              type="text"
              name="search"
              id="search"
              className="inventories__search-input"
              placeholder="Search..."
            />
          </div>
          <Link to="/inventories/add" className="inventories__add-link">
            <button className="inventories__add">+ Add New Item</button>
          </Link>
        </div>
      </div>

      <div className="inventories__table-fields">
        <div className="inventories__table-field">
          <h4 className="inventories__table-header">INVENTORY ITEM</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventories__table-field">
          <h4 className="inventories__table-header">CATEGORY</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventories__table-field">
          <h4 className="inventories__table-header">STATUS</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventories__table-field">
          <h4 className="inventories__table-header">QTY</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventories__table-field">
          <h4 className="inventories__table-header">WAREHOUSE</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventories__table-field inventories__table-field--position">
          <h4 className="inventories__table-header">ACTIONS</h4>
        </div>
      </div>
    </>
  );
}
