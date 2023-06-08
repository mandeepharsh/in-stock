import sortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";

export default function WarehouseHeader() {
  return (
    <>
      <div className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__cta">
          <div className="warehouses__search">
            <input
              type="text"
              name="search"
              id="search"
              className="warehouses__search-input"
              placeholder="Search..."
            />
          </div>
          {/* To link to add page  */}
          <Link to="/warehouses/add">
            <button className="warehouses__add">+ Add New Warehouse</button>
          </Link>
        </div>
      </div>

      <div className="warehouses__table-fields">
        <div className="warehouses__table-field">
          <h4 className="warehouses__table-header">WAREHOUSE</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="warehouses__table-field">
          <h4 className="warehouses__table-header">ADDRESS</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="warehouses__table-field">
          <h4 className="warehouses__table-header">CONTACT NAME </h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="warehouses__table-field">
          <h4 className="warehouses__table-header">CONTACT INFORMATION</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="warehouses__table-field warehouses__table-field--position">
          <h4 className="warehouses__table-header">ACTIONS</h4>
        </div>
      </div>
    </>
  );
}
