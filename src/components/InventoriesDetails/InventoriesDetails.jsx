//Styling
import "./InventoriesDetails.scss";

//Import Tools
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { URLInventories } from "../../utils/api";

//Import Icons
import arrow from "../../assets/icons/arrow_back-24px.svg";
import pencil from "../../assets/icons/edit-24px.svg";

export default function InventoriesDetails() {
  //State variables for Inventory Item
  const [inventory, setInventory] = useState({});
  const [hasError, setHasError] = useState(false);

  //Grab ID with useParams
  let { id } = useParams();

  //Get single inventory item from databases
  useEffect(() => {
    axios
      .get(`${URLInventories}/${id}`)
      .then((response) => {
        setInventory(response.data);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  //Loading state
  if (!inventory) {
    return <span>LOADING</span>;
  }

  //Error state
  if (hasError) {
    return <span>Inventory Item with ID: {id} not found </span>;
  }

  console.table(inventory);

  //Destructure our state variable
  const { item_name, description, category, status, quantity } = inventory;

  return (
    <main className="inventory">
      <section className="inventory__header">
        <div className="inventory__header-container">
          <Link to="/inventories" className="inventory__header-return">
            <img
              src={arrow}
              alt="left-arrow-to-home"
              className="inventory__header-arrow"
            />
          </Link>
          <h1 className="inventory__header-title">{item_name}</h1>
        </div>
        <Link to={`/inventory/${id}/edit`} className="inventory__header-link">
          <img
            src={pencil}
            className="inventory__header-pencil"
            alt="pencil-to-edit-inventory-item"
          />
          <span className="inventory__header-edit">Edit</span>
        </Link>
      </section>

      <section className="inventory__info">
        <div className="inventory__info-left">
          <div className="inventory__info-container">
            <h4 className="inventory__info-title">ITEM DESCRIPTION:</h4>
            <span className="inventory__info-description">{description}</span>
          </div>

          <div className="inventory__info-container">
            <h4 className="inventory__info-title">CATEGORY:</h4>
            <span className="inventory__info-category">{category}</span>
          </div>
        </div>

        <div className="inventory__info-right">
          <div className="inventory__info-stats">
            <div className="inventory__info-box">
              <h4 className="inventory__info-title">STATUS:</h4>
              <span
                className={`inventory__info-status ${
                  status === "In Stock"
                    ? "inventory__info-status--instock"
                    : "inventory__info-status--outstock"
                }`}
              >
                {status}
              </span>
            </div>

            <div className="inventory__info-box">
              <h4 className="inventory__info-title">QUANTITY:</h4>
              <span className="inventory__info-quantity">{quantity}</span>
            </div>
          </div>

          <div className="inventory__info-container">
            <h4 className="inventory__info-title">WAREHOUSE:</h4>
            <span className="inventory__info-warehouse">{category}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
