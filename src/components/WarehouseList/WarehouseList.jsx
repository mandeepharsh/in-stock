import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { URL } from "../../utils/api";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setWarehouses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!warehouses) {
    return <h1>LOADING</h1>;
  }

  return (
    <section className="warehouses">
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

          <button className="warehouses__add">+ Add New Warehouse</button>
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

      <ul className="warehouses__list">
        {warehouses.map((warehouse) => {
          return (
            <div className="warehouses__details">
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
                <h4 className="warehouses__details-title">
                  CONTACT INFORMATION
                </h4>
                <p className="warehouses__information-number">
                  {warehouse.contact_phone}
                </p>
                <p className="warehouses__information-email">
                  {warehouse.contact_email}
                </p>
              </div>

              <div className="warehouses__icons">
                <img
                  src={deleteIcon}
                  alt="garbage-delete-icon"
                  className="warehouses__icons-del"
                />
                <img
                  src={editIcon}
                  alt="pencil-edit-icon"
                  className="warehouses__icons-edit"
                />
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
