//Styling
import "./InventoryAddForm.scss";

// tooling
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// icons
import errorIcon from "../../assets/icons/error-24px.svg";

// Api endpoint
import { URLInventories } from "../../utils/api";


const InventoryAddForm = ({warehousesNames}) => {
  
  //initial empty form values
  const initialValues = {
   warehousesId :"",
   itemName : "",
   description : "",
   category : "",
   status :"",
   quantity : "0"
  }

  //setup error states for fields
  const initialErrorState = {
    itemName : false,
    description : false,
    quantity : false,
    warehousesId : false,
    category : false
  }

  //set initial states for rey
  const[values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrorState);

  //navigation
  const navigate = useNavigate();

  //handle inputs
  const onChangeHandler = (event) =>{
    const {name, value} = event.target;
      setValues({
        ...values,
        [name]: value
      });
    setErrors({
      ...errors,
      [name]:false
    })
  };

  //handle submit
  const onSumbitHandler = (event) => {
    
    //prevent refresh
    event.preventDefault();
    
    //error checking
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

    //make sure quantity is a number
    if (isNaN(values.quantity)) {
      newErrors.quantity = true;
      hasError = true;
    }

    if (hasError) {
      return  setErrors(newErrors);
    } else {

    //grab inputs
    const newItemData = {
      "warehouse_id": values.warehousesId,
      "item_name": values.itemName,
      "description": values.description,
      "category": values.category,
      "status": values.status,
      "quantity": Number(values.quantity)
    }

      console.log(newItemData);

      //add the item
      axios.post((URLInventories), newItemData)
      .then((res)=>{
        navigate(`/inventories/${res.data[0].id}`)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  }

return (
    <form className="inventory-add__form" onSubmit={onSumbitHandler}>
    <div className="inventory-add__fieldset inventory-add__fieldset--divider">
    <h2 className="inventory-add__fieldset-heading">Item Details</h2>
    <label className="inventory-add__label">
    Item Name
      <input className="inventory-add__input"
             placeholder="Item Name"
             name="itemName"
             value={values.itemName}
             onChange={onChangeHandler}
      />
       {(errors.itemName) && <span className="inventory-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
    </label>
    <label className="inventory-add__label">
      Description
      <textarea className="inventory-add__input inventory-add__input--textarea"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={onChangeHandler}
      />
      {(errors.description) && <span className="inventory-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
    </label>
            <label className="inventory-add__label">
            Category
            <select name="category"
                    placeholder="Category"
                    value={values.category}
                    onChange={onChangeHandler}
                    id="category"
                    className="inventory-add__input
                               inventory-add__input--select">
              <option value="">Please Select</option>
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
            {(errors.category) && <span className="inventory-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
          </label>
    </div>
    <hr className="inventory-add__divider"/>
    <div className="inventory-add__fieldset">
    <h2 className="inventory-add__fieldset-heading">Item Availability</h2>
    <label className="inventory-add__label">Status</label>
    <div className="inventory-add__item-status">
      <div className="inventory-add__radio-btn-set  inventory-add__radio-btn-set--margin">
      <input
        className="inventory-add__radio-btn"
        type="radio"
        name="status"
        value="In Stock"
        id="instock"
        checked={values.status === "In Stock"}
        onChange={onChangeHandler}
      />
      <label htmlFor="instock">In Stock</label>
      </div>
      <div className="inventory-add__radio-btn-set ">
      <input className="inventory-add__radio-btn "
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
      <label className="inventory-add__label">
       Quantity
      <input placeholder="Quantity"
             className="inventory-add__input"
             name="quantity"
             value={values.quantity}
             onChange={onChangeHandler}
      />
       {(errors.quantity && isNaN(values.quantity)) && (
        <span className="inventory-add__error-message">
          <img alt="error icon" src={errorIcon} />
          Quantity must be a number
        </span>
      )}
      {(errors.quantity)  && !isNaN(values.quantity) && <span className="inventory-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
    </label>) :""}
    <label className="inventory-add__label">
            Warehouse
            <select name="warehousesId"
             value={values.warehousesId}
             onChange={onChangeHandler}
             id="category"
             className="inventory-add__input
                        inventory-add__input--select">
              <option value="">Please Select</option>
              {warehousesNames.map((warehouse)=>
              {return <option key={warehouse.id}
                              value={warehouse.id}     >
                              {warehouse.warehouse_name}
                              </option> })}
            </select>
            {(errors.warehousesId) && <span className="inventory-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
          </label>
      </div>
    <div className="inventory-add__button-group">
        <button type="button"
                onClick={()=> navigate(-1)}
                className=" inventory-add__button-cancel"
                >Cancel</button>
        <button type="sumbit"
                className=" inventory-add__button-add"
                >Save</button>
      </div>
   </form>
  )
}
export default InventoryAddForm