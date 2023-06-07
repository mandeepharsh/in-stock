// import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
// import rightIcon from "../../assets/icons/chevron_right-24px.svg";

export default function WarehouseList() {
  return (
    <section className="warehouses">
      <div className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__search">
        <input
          type="text"
          name="search"
          id="search"
          className="warehouses__search-input"
          placeholder="Search..."
        />
        <span className="warehouses__search-icon"></span>
        </div>
        <button className="warehouses__add">+ Add New Warehouse</button>
      </div>

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__warehouse-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">Manhattan</p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__name-title">CONTACT NAME</h4>
          <p className="warehouses__name">Parmin Aujla</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__address-title">ADDRESS</h4>
          <p className="warehouses__address">503 Broadway, New York, USA</p>
        </div>
        <div className="warehouses__information-container">
          <h4 className="warehouses__information-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (629) 555-0129</p>
          <p className="warehouses__information-email">paujla@instock.com</p>
        </div>

        <div className="warehouses__icons">
          <img src={deleteIcon} alt="garbage-delete-icon" />
          <img src={editIcon} alt="pencil-edit-icon" />
        </div>
      </div>

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__warehouse-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">Washington</p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__name-title">CONTACT NAME</h4>
          <p className="warehouses__name">Graeme Lyon</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__address-title">ADDRESS</h4>
          <p className="warehouses__address">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="warehouses__information-container">
          <h4 className="warehouses__information-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (647) 504-0911</p>
          <p className="warehouses__information-email">glyon@instock.com</p>
        </div>

        <div className="warehouses__icons">
          <img src={deleteIcon} alt="garbage-delete-icon" />
          <img src={editIcon} alt="pencil-edit-icon" />
        </div>
      </div>

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__warehouse-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">Jersey</p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__name-title">CONTACT NAME</h4>
          <p className="warehouses__name">Brad MacDonald</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__address-title">ADDRESS</h4>
          <p className="warehouses__address">
            300 Main Street, New Jersey, USA
          </p>
        </div>
        <div className="warehouses__information-container">
          <h4 className="warehouses__information-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (401) 377-2337</p>
          <p className="warehouses__information-email">bmcdonald@instock.com</p>
        </div>

        <div className="warehouses__icons">
          <img src={deleteIcon} alt="garbage-delete-icon" />
          <img src={editIcon} alt="pencil-edit-icon" />
        </div>
      </div>
    </section>
  );
}
