// tools
import { useState } from "react";
import axios from "axios";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";
// import { URL } from "../../utils/api";

// styling
import "./InventoriesAddPage.scss";

export default function InventoriesAddPage() {

const initialValues = {
    item_name :"",
    description : "",
    category: "",
    availability:"",
    quantity : "",
    warehouse: "",
    contact_phone : "",
    contact_email: ""      
}

const [values, setValues] = useState(initialValues);

const onChangeHandler = (event) =>{
    const {name, value} = event.target;
    setValues({
        ...values,
        [name]: value
    });
};



const addInventoryItemHandler = () =>{
    axios.post("http://inventories/", values)
    .then((response) => console.log(response))
    .catch((error) =>{
      console.log(error)
    })
}

  return (
    <div className="inventory-add-page">

      <div className="inventory-add-page__title">
        <img className="inventory-add-page__icon" src={arrowback} alt="arrow back icon" />
        <h1 className="inventory-add-page__heading">Add New Inventory Item</h1>
      </div>

      <form className="inventory-add__form"
            onSubmit={addInventoryItemHandler} >
        <div className="inventory-add__fieldset">

          <h2 className="inventory-add__fieldset-heading">Item Details</h2>

          <label className="inventory-add__label">
            Item Name
            <input className="inventory-add__input" 
                   name = "item_name"
                   placeholder="Item Name"
                   value ={values.item_name}
                   onChange={onChangeHandler}
                    />
          </label>

          <label className="inventory-add__label">
            Description
            <textarea className="inventory-add__input" 
                   name = "description"
                   placeholder="Please enter a brief item description..." 
                   value = {values.description}
                   onChange={onChangeHandler}
                   />
          </label>

          <label className="inventory-add__label">
            Category
            <select name="category" id="category" class="inventory-add__categories">
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </label>

          <h2 className="inventory-add__fieldset-heading">Item Availabilty</h2>

            <h4 className="inventory-add__label">Status </h4>
            <input type="radio" id="in" name="status" value="true"/>
            <label htmlFor="in">In Stock</label>
            <input type="radio" id="out" name="status" value="false"/>
            <label htmlFor="out">Out of Stock</label><br></br>

          <label className="inventory-add__label">
            Quantity
            <input className="inventory-add__input" 
                   name = "quantity"
                   placeholder="0"
                   value ={values.quantity}
                   onChange={onChangeHandler}
                    />
          </label>

          <label className="inventory-add__label">
            Warehouse
            <select name="warehouse" id="warehouse" class="inventory-add__warehouses">
              <option value="Manhattan">Manhattan</option>
              <option value="Washington">Washington</option>
              <option value="Jersey">Jersey</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="Seattle">Seattle</option>
              <option value="Miami">Miami</option>
              <option value="Boston">Boston</option>
            </select>
          </label> 
        </div>

        <div className="warehouse-add-page__button-group">
          <button type="button" className=" warehouse-add-page__button-cancel">Cancel</button>
          <button type="sumbit" className=" warehouse-add-page__button-add">+ Add Item</button>
        </div>

      </form>

    </div>
  );
};

