// import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

export default function WarehouseList() {
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
            <span className="warehouses__search-icon"></span>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            Manhattan
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Parmin Aujla</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">503 Broadway, New York, USA</p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (629) 555-0129</p>
          <p className="warehouses__information-email">paujla@instock.com</p>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            Washington
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Graeme Lyon</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (647) 504-0911</p>
          <p className="warehouses__information-email">glyon@instock.com</p>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            Jersey
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Brad MacDonald</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">
            300 Main Street, New Jersey, USA
          </p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (401) 377-2337</p>
          <p className="warehouses__information-email">bmcdonald@instock.com</p>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            San Francisco
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Gary Wong</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">
            890 Brannan Street, San Francisco, USA
          </p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (239) 555-0108</p>
          <p className="warehouses__information-email">gwong@instock.com</p>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            Santa Monica
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Sharon Ng</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">520 Broadway, Santa Monica, USA</p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (270) 555-0117</p>
          <p className="warehouses__information-email">sng@instock.com</p>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            Seattle
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Daniel Bachu</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">1201 Third Avenue, Seattle, USA</p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (480) 555-0103</p>
          <p className="warehouses__information-email">dbachu@instock.com</p>
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

      <div className="warehouses__details">
        <div className="warehouses__warehouse-container">
          <h4 className="warehouses__details-title">WAREHOUSE</h4>
          <p className="warehouses__warehouse">
            Miami
            <img src={rightIcon} alt="chevron-pointing-right" />
          </p>
        </div>

        <div className="warehouses__name-container">
          <h4 className="warehouses__details-title">CONTACT NAME</h4>
          <p className="warehouses__name">Alana Thomas</p>
        </div>

        <div className="warehouses__address-container">
          <h4 className="warehouses__details-title">ADDRESS</h4>
          <p className="warehouses__address">2650 NW 5th Avenue, Miami, USA</p>
        </div>

        <div className="warehouses__information-container">
          <h4 className="warehouses__details-title">CONTACT INFORMATION</h4>
          <p className="warehouses__information-number">+1 (647) 832-2065</p>
          <p className="warehouses__information-email">athomas@instock.com</p>
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
    </section>
  );
}
