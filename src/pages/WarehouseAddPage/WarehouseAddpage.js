// tools
import { useState } from "react";
import axios from "axios";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";
import { URL } from "../../utils/api";

// styling
import "./WarehouseAddPage.scss";

const WarehouseAddpage = () => {
const initialValues = {
    warehouseName :"",
    streetAddress : "",
    city: "",
    country :"",
    contactName : "",
    position : "",
    phoneNumber : "",
    email: ""      
}

const [values,setValues] = useState(initialValues);

const onChangeHandler = (event) =>{
    const {name,value} = event.target;
    setValues({
        ...values,
        [name]: value
    });
};

const addWarehouseHandler = () =>{
    axios.post(URL,values)
    .then((response) => console.log(response))
}
console.log(values)
  return (
    <div className="warehouse-add-page">
      <div className="warehouse-add-page__title">
        <img className="warehouse-add-page__icon" src={arrowback} alt="arrow back icon" />
        <h1 className="warehouse-add-page__heading">Add New Warehouse</h1>
      </div>
      <hr className="warehouse-add__divider"/>
      <form className="warehouse-add__form"
            onSubmit={addWarehouseHandler} >
        <div className="warehouse-add__fieldset">
          <h2 className="warehouse-add__fieldset-heading">Warehouse Details</h2>
          <label className="warehouse-add__label">
            Warehouse Name
            <input className="warehouse-add__input" 
                   name = "warehouseName"
                   placeholder="Warehouse Name"
                   value ={values.warehouseName}
                   onChange={onChangeHandler}
                    />
          </label>
          <label className="warehouse-add__label">
            Street Address
            <input className="warehouse-add__input" 
                   name = "streetAddress"
                   placeholder="Street Address" 
                   value = {values.streetAddress}
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
                   name="contactName" 
                   placeholder="Contact Name" 
                   value={values.contactName}
                   onChange={onChangeHandler}
                   />
          </label>
          <label className="warehouse-add__label">
            Position
            <input className="warehouse-add__input" 
                   name="position"
                   placeholder="Position" 
                   value={values.position}
                   onChange={onChangeHandler} 
                   />
          </label>
          <label className="warehouse-add__label">
            Phone Number
            <input className="warehouse-add__input" 
                   name="phoneNumber"
                   placeholder="Phone Number"
                   value={values.phoneNumber}
                   onChange={onChangeHandler}
                    />
          </label>
          <label className="warehouse-add__label">
            Email
            <input className="warehouse-add__input" 
                   name="email"
                   placeholder="Email" 
                   value={values.email}
                   onChange={onChangeHandler} 
                   />
          </label>
        </div>

        <div className="warehouse-add-page__button-group">
          <button type="button" className="warehouse-add-page__button warehouse-add-page__button--cancel">Cancel</button>
          <button type="sumbit" className="warehouse-add-page__button warehouse-add-page__button--add">+ Add Warehouse</button>
        </div>
      </form>
    </div>
  );
};

export default WarehouseAddpage;
