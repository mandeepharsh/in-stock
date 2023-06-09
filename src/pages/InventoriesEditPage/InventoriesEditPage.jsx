import { Link } from "react-router-dom"

// assests
import arrowback from "../../assets/icons/arrow_back-24px.svg"

// styling
import "./InventoriesEditPage.scss"

const InventoriesEditPage = () => {
  return (
    <section className="inventories-edit-page"> 
         <div className="inventories-edit-page__title">
       <Link to="/inventories"> <img className="inventories-edit-page__icon"
         src={arrowback} alt="arrow back icon" /></Link>
        <h1 className="inventories-edit-page__heading">Edit Inventory Item</h1>
      </div>
      <hr className="inventories-edit-page__divider"/>
   
     <form className="inventories-edit__form"> 
      <div className="inventories-edit__fieldset">
      <h2 className="inventories-edit__fieldset-heading">Item Details</h2>  
      <label className="inventories-edit__label">
      Item Name 
        <input className="inventories-edit__input"
               name="itemName"
        />
      </label>    

      <label className="inventories-edit__label">
        Description
        <textarea className="inventories-edit__input"
               name="description"
        />
      </label>   
      
      <label className="inventories-edit__label">
        Category
        <select>
        </select>
      </label> 
      </div>
      <hr className="inventories-edit-page__divider"/>
       <div className="inventories-edit__fieldset">
      <h2 className="inventories-edit__fieldset-heading">Item Availability</h2> 

      <div className="inventories-edit__label">
       Status
        <input type="radio"  name="stockStatus" id="inStock"  />
        <label for="inStock">In Stock</label>
        <input type="radio" name="stockStatus" id="outOfStock"/>
        <label for="inStock">Out of Stock</label>
      </div>   
          
     <label>
       <select></select>
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



    </section>
  )
}

export default InventoriesEditPage
