import "./WarehouseInvHeader.scss"

import sortIcon from "../../assets/icons/sort-24px.svg";

export default function WarehouseInvHeader() {
  return (
    <>

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

        <div className="inventories__table-field inventories__table-field--position">
          <h4 className="inventories__table-header">ACTIONS</h4>
        </div>
      </div>
    </>
  );
}