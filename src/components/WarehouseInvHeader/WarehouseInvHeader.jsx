import "./WarehouseInvHeader.scss"

import sortIcon from "../../assets/icons/sort-24px.svg";

export default function WarehouseInvHeader() {
  return (
    <>

      <div className="inventory__table-fields">
        <div className="inventory__table-field">
          <h4 className="inventory__table-header">INVENTORY ITEM</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventory__table-field">
          <h4 className="inventory__table-header">CATEGORY</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventory__table-field">
          <h4 className="inventory__table-header">STATUS</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventory__table-field">
          <h4 className="inventory__table-header">QTY</h4>
          <img src={sortIcon} alt="sort-icon-up-and-down-arrow" />
        </div>

        <div className="inventory__table-field inventory__table-field--position">
          <h4 className="inventory__table-header">ACTIONS</h4>
        </div>
      </div>
    </>
  );
}