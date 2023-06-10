import {useState} from "react";
import axios from "axios";
import errorIcon from "../../assets/icons/error-24px.svg";
import "./InventoryEditForm.scss";
import { URLInventories } from "../../utils/api";
const InventoryEditForm = ({itemDetails,warehousesNames}) => {
  
  const intialWarehouse =  warehousesNames.find((warehouse)=>{
    return warehouse.warehouse_name === itemDetails.warehouse_name
  })


  const initialValues = { 
   warehousesId :intialWarehouse.id, 
   itemName : itemDetails.item_name,
   description : itemDetails.description,
   category : itemDetails.category,
   status : itemDetails.status,
   quantity : itemDetails.quantity,
   warehouse_name :itemDetails.warehouse_name
  }
  
  const initialErrorState = {
    itemName : false,
    description : false,
    quantity : false
  }

  const[values,setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrorState);
  const onChangeHandler = (event) =>{
    const {name,value} = event.target;
    setValues({
        ...values,
        [name]: value
    });
    
    setErrors({
      ...errors,
      [name]:false   
    })
};

const onSumbitHandler = (event) =>{
  event.preventDefault();
  const newErrors = {};
  let hasError = false;
  for (let field in values) {
    if (values[field] === "") {
      newErrors[field] = true;
      hasError = true;
    } else {
      newErrors[field] = false;
    }
  }
  
  if (isNaN(values.quantity)) {
    newErrors.quantity = true;
    hasError = true;
  }

  if (hasError) {
    setErrors(newErrors);
  }else{
    const changedData = {
      warehouse_id :Number(values.warehousesId), 
      item_name : values.itemName,
      description : values.description,
      category : values.category,
      status : values.status,
      quantity : values.quantity,
    }
   console.log(changedData)
    axios.put((URLInventories +"/" + itemDetails.id), changedData)
    .then((res)=>{
       console.log(res)
    })
    .catch((err) =>{
      console.log(err)
    })
  }
}  

return (
    <form className="inventories-edit__form" onSubmit={onSumbitHandler}> 
    <div className="inventories-edit__fieldset">
    <h2 className="inventories-edit__fieldset-heading">Item Details</h2>  
    <label className="inventories-edit__label">
    Item Name 
      <input className="inventories-edit__input"
             placeholder="Item Name"
             name="itemName"
             value={values.itemName}
             onChange={onChangeHandler}
      />
       {(errors.itemName) && <span className="warehouse-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>} 
    </label>    

    <label className="inventories-edit__label">
      Description
      <textarea className="inventories-edit__input"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={onChangeHandler}
      />
      {(errors.description) && <span className="warehouse-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>} 
    </label>   
    
            <label className="inventories-edit__label">
            Category
            <select name="category"
                    placeholder="Category"
                    value={values.category}
                    onChange={onChangeHandler}
                    id="category" 
                    className="inventories-edit__input">
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </label>

    </div>

    <hr className="inventories-edit-page__divider"/>

    <div className="inventories-edit__fieldset">
    <h2 className="inventories-edit__fieldset-heading">Item Availability</h2> 
    <div className="inventories-edit__item-status">
    <label className="inventories-edit__label">Status</label>
      <div>
      <input
        className="inventories-edit__radio-btn"
        type="radio"
        name="status"
        value="In Stock"
        id="instock"
        checked={values.status === "In Stock"}
        onChange={onChangeHandler}
      />
      <label htmlFor="instock">In Stock</label>
      </div>
      <div>
      <input className="inventories-edit__radio-btn "
             type="radio"
             name="status"
             value="Out of Stock"
             id="outOfStock"
             checked={values.status === "Out of Stock"}
             onChange={onChangeHandler}
      />
      <label htmlFor="outOfStock">Out of Stock</label>
      </div>
    </div>
      {(values.status === "In Stock") ? (
      <label className="inventories-edit__label">
       Quantity   
      <input placeholder="Quantity"
             className="inventories-edit__input"
             name="quantity"
             value={values.quantity}
             onChange={onChangeHandler}
      />
       {(errors.quantity && isNaN(values.quantity)) && (
        <span className="warehouse-add__error-message">
          <img alt="error icon" src={errorIcon} />
          Quantity must be a number
        </span>
      )}
      {(errors.quantity)  && !isNaN(values.quantity) && <span className="warehouse-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
    </label>) :""}

    <label className="inventories-edit__label">
            Warehouse
            <select name="warehousesId"
             value={values.warehousesId}
             onChange={onChangeHandler}
             id="category"
             className="inventories-edit__input">
              {warehousesNames.map((warehouse)=>
              {return <option key={warehouse.id} 
                              value={warehouse.id}     >
                              {warehouse.warehouse_name}
                              </option> })}
            </select>
          </label>  
      </div>   

    <div className="inventories-edit__button-group">
        <button type="button"
                className=" inventories-edit__button-cancel"
                >Cancel</button>
        <button type="sumbit"
                className=" inventories-edit__button-add"
                >Save</button>
      </div>
   </form>
  )
}

export default InventoryEditForm
