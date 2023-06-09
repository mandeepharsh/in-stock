import { useState} from "react";

const InventoryEditForm = ({itemDetails,warehousesNames}) => {

  const initialValues = {
   itemName : itemDetails.item_name,
   description : itemDetails.description,
   category : itemDetails.category,
   status : itemDetails.status,
   quantity : itemDetails.quantity
  }

  const[values,setValues] = useState(initialValues)

  const onChangeHandler = (event) =>{
    const {name,value} = event.target;
    setValues({
        ...values,
        [name]: value
    });
};




  return (
    <form className="inventories-edit__form"> 
    <div className="inventories-edit__fieldset">
    <h2 className="inventories-edit__fieldset-heading">Item Details</h2>  
    <label className="inventories-edit__label">
    Item Name 
      <input className="inventories-edit__input"
             name="itemName"
             value={values.itemName}
             onChange={onChangeHandler}
      />
    </label>    

    <label className="inventories-edit__label">
      Description
      <textarea className="inventories-edit__input"
                name="description"
                value={values.description}
                onChange={onChangeHandler}
      />
    </label>   
    
            <label className="inventory-add__label">
            Category
            <select name="category"
             value={values.category}
             onChange={onChangeHandler}
            id="category" className="inventory-add__categories">
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
 
      <input type="radio" 
             id="inStock"
             name="itemStatus" 
             value="In Stock"
             checked={values.status === "In Stock"}
             onChange={onChangeHandler}
               />
      <input type="radio" 
             id="OutofStock"
             name="itemStatus" 
             value="In Stock"
             checked={values.status === "OutofStock"}
             onChange={onChangeHandler}
               />

    </div>   
        

    <label className="inventory-add__label">
            Category
            <select name="category"
             value={values.warehouses}
             onChange={onChangeHandler}
            id="category" className="inventory-add__categories">
              {warehousesNames.map((warehouse)=>{return <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option> })}
            </select>
          </label>  
   

    <div className="inventories-edit__button-group">
        <button type="button"
                className=" inventories-edit__button-cancel"
                >Cancel</button>
        <button type="sumbit"
                className=" inventories-edit__button-add"
                >Save</button>
      </div>
      </div>   
   </form>
  )
}

export default InventoryEditForm
