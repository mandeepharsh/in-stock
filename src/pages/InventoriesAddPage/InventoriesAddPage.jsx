// tools
import { useState } from "react";
import axios from "axios";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";
import { URL } from "../../utils/api";

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
            <input className="warehouse-add__input" 
                   name = "description"
                   placeholder="Street Address" 
                   value = {values.description}
                   onChange={onChangeHandler}
                   />
          </label>
          <label className="warehouse-add__label">
            City
            <input className="warehouse-add__input"
                   name="city"
                   placeholder="City"
                   value={values.city}
                   onChange={onChangeHandler}
                    />
          </label>
          <label className="warehouse-add__label">
            Country
            <input className="warehouse-add__input" 
                   name="country"
                   placeholder="Country"
                   value={values.country}
                   onChange={onChangeHandler}
                    />
          </label>
        </div>
        <hr className="warehouse-add__divider"/>
        <div className="warehouse-add__fieldset">
          <h2 className="warehouse-add__fieldset-heading">Contact Details</h2>
          <label className="warehouse-add__label" >
            Contact Name
            <input className="warehouse-add__input"
                   name="contact_name" 
                   placeholder="Contact Name" 
                   value={values.contact_name}
                   onChange={onChangeHandler}
                   />
          </label>
          <label className="warehouse-add__label">
            Position
            <input className="warehouse-add__input" 
                   name="contact_position"
                   placeholder="Position" 
                   value={values.contact_position}
                   onChange={onChangeHandler} 
                   />
          </label>
          <label className="warehouse-add__label">
            Phone Number
            <input className="warehouse-add__input" 
                   name="contact_phone"
                   placeholder="Phone Number"
                   value={values.contact_phone}
                   onChange={onChangeHandler}
                    />
          </label>
          <label className="warehouse-add__label">
            Email
            <input className="warehouse-add__input" 
                   name="contact_email"
                   placeholder="Email" 
                   value={values.contact_email}
                   onChange={onChangeHandler} 
                   />
          </label>
        </div>

        <div className="warehouse-add-page__button-group">
          <button type="button" className=" warehouse-add-page__button-cancel">Cancel</button>
          <button type="sumbit" className=" warehouse-add-page__button-add">+ Add Warehouse</button>
        </div>
      </form>
    </div>
  );
};

