// tools
import {useState} from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

// assets
import errorIcon from "../../assets/icons/error-24px.svg";
import "./InventoryAddForm.scss";
// Api utils
import { URLInventories } from "../../utils/api";

const InventoryAddForm = ({warehousesNames}) => {


  const initialValues = { 
   warehousesId :"", 
   itemName : "",
   description : "",
   category : "",
   status :"",
   quantity : "",
   warehouse_name :""
  }
  
  const initialErrorState = {
    itemName : false,
    description : false,
    quantity : false
  }

  const[values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrorState);
  const navigate = useNavigate();  
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
    const newItemData = {
      warehouse_id :Number(values.warehousesId), 
      item_name : values.itemName,
      description : values.description,
      category : values.category,
      status : values.status,
      quantity : values.status === "Out of Stock" ? '0' : values.quantity,
    }
  //  console.log(newItemData)
    axios.post((URLInventories), newItemData)
    .then((res)=>{
       navigate(`/inventories/${res.data.id}`)
    })
    .catch((err) =>{
      console.log(err)
    })
  }
}  

return (
    <form className="inventories-add__form" onSubmit={onSumbitHandler}> 
    <div className="inventories-add__fieldset inventories-add__fieldset--divider">
    <h2 className="inventories-add__fieldset-heading">Item Details</h2>  
    <label className="inventories-add__label">
    Item Name 
      <input className="inventories-add__input"
             placeholder="Item Name"
             name="itemName"
             value={values.itemName}
             onChange={onChangeHandler}
      />
       {(errors.itemName) && <span className="inventories-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>} 
    </label>    

    <label className="inventories-add__label">
      Description
      <textarea className="inventories-add__input inventories-add__input--textarea"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={onChangeHandler}
      />
      {(errors.description) && <span className="inventories-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>} 
    </label>   
    
            <label className="inventories-add__label">
            Category
            <select name="category"
                    placeholder="Category"
                    value={values.category}
                    onChange={onChangeHandler}
                    id="category" 
                    className="inventories-add__input 
                               inventories-add__input--select">
              <option value="Accessories">Accessories</option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </label>

    </div>

    <hr className="inventories-add-page__divider"/>

    <div className="inventories-add__fieldset">
    <h2 className="inventories-add__fieldset-heading">Item Availability</h2> 
    <label className="inventories-add__label">Status</label>
    <div className="inventories-add__item-status">
      <div className="inventories-add__radio-btn-set  inventories-add__radio-btn-set--margin">
      <input
        className="inventories-add__radio-btn"
        type="radio"
        name="status"
        value="In Stock"
        id="instock"
        checked={values.status === "In Stock"}
        onChange={onChangeHandler}
      />
      <label htmlFor="instock">In Stock</label>
      </div>
      <div className="inventories-add__radio-btn-set ">
      <input className="inventories-add__radio-btn "
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
      <label className="inventories-add__label">
       Quantity   
      <input placeholder="Quantity"
             className="inventories-add__input"
             name="quantity"
             value={values.quantity}
             onChange={onChangeHandler}
      />
       {(errors.quantity && isNaN(values.quantity)) && (
        <span className="inventories-add__error-message">
          <img alt="error icon" src={errorIcon} />
          Quantity must be a number
        </span>
      )}
      {(errors.quantity)  && !isNaN(values.quantity) && <span className="inventories-add__error-message">
       <img alt="error icon" src={errorIcon}/>This field is required </span>}
    </label>) :""}

    <label className="inventories-add__label">
            Warehouse
            <select name="warehousesId"
             value={values.warehousesId}
             onChange={onChangeHandler}
             id="category"
             className="inventories-add__input
                        inventories-add__input--select">
              {warehousesNames.map((warehouse)=>
              {return <option key={warehouse.id} 
                              value={warehouse.id}     >
                              {warehouse.warehouse_name}
                              </option> })}
            </select>
          </label>  
      </div>   

    <div className="inventories-add__button-group">
        <button type="button"
                onClick={()=> navigate(-1)}
                className=" inventories-add__button-cancel"
                >Cancel</button>
        <button type="sumbit"
                className=" inventories-add__button-add"
                >Save</button>
      </div>
   </form>
  )
}

export default InventoryAddForm
