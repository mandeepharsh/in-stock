// tools
import { useState } from "react";
import axios from "axios";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";
import { URLWarehouses, URLInventories } from "../../utils/api";

// styling
import "./InventoriesAddPage.scss";

export default function InventoriesAddPage() {

  //setup state for warehouse
  const [warehouses, setWarehouses] = useState([]);
  const [hasError, setHasError] = useState(false);

  // const warehouses = [1,2,34]


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



// const addInventoryItemHandler = () =>{
//     axios.post({URLInventories}, values)
//     .then((response) => console.log(response))
//     .catch((error) =>{
//       console.log(error)
//     })
// }



axios
  .get({URLWarehouses})
  .then((response) => {
    setWarehouses(response.data);
    console.log(warehouses);
})
  .catch(() => {
  setHasError(true);
});

//Loading state
if (!warehouses) {
  return <span>Loading.....</span>
}


//Error state  
if (hasError) {
  return <span>Data connection unavailable, please try again later.. </span>
}



  return (
    <div className="inventory-add-page">

      <div className="inventory-add-page__title">
        <img className="inventory-add-page__icon" src={arrowback} alt="arrow back icon" />
        <h1 className="inventory-add-page__heading">Add New Inventory Item</h1>
      </div>

      {/* <form className="inventory-add__form"
            onSubmit={addInventoryItemHandler} > */}

      <form className="inventory-add__form"
             >  


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
            <select name="category" id="category" className="inventory-add__categories">
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </label>

          <h2 className="inventory-add__fieldset-heading">Item Availabilty</h2>

          <label className="inventory-add__label">
            Status 
          </label>

            {/* <input type="radio" id="in" name="status" value="true"/><label className="inventory-add__label--status" htmlFor="in" >In Stock</label>
            <input type="radio" id="out" name="status" value="false"/><label className="inventory-add__label--status" htmlFor="out">Out of Stock</label> */}
          
            <input type="radio" id="in" name="status" value="true"/>
            <input type="radio" id="in" name="status" value="true"/>


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
            <select name="warehouse" id="warehouse" className="inventory-add__warehouses">
              {warehouses.map((warehouse) => {
                return (
                  <option value={warehouse}>{warehouse}</option>
                )
              })}
            </select>
          </label> 
        </div>

        <div className="warehouse-add-page__button-group">
          <button type="button" className=" warehouse-add-page__button-cancel">Cancel</button>
          <button type="sumbit" className=" warehouse-add-page__button-add">+ Add Item</button>
        </div>

      </form>
      <input type="radio" id="in" name="status" value="true"/><label htmlFor="in" >In Stock</label><br></br>
      <input type="radio" id="out" name="status" value="false"/><label htmlFor="out">Out of Stock</label>

    </div>
  );
};
