import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
// assests
import arrowback from "../../assets/icons/arrow_back-24px.svg"

// styling
import "./InventoriesEditPage.scss"
import { useEffect } from "react"


import InventoryEditForm from "../../components/InventoryEditForm/InventoryEditForm"
const InventoriesEditPage = () => {
  
  const [itemDetails,setItemDetails] = useState({});


  useEffect(()=>{
    axios.get("http://localhost:8080/inventories/2")
    .then((res)=> setItemDetails(res.data))
    .catch((err)=> console.log(err))
  },[])
 
  



  return (
    <section className="inventories-edit-page"> 
         <div className="inventories-edit-page__title">
       <Link to="/inventories"> <img className="inventories-edit-page__icon"
         src={arrowback} alt="arrow back icon" /></Link>
        <h1 className="inventories-edit-page__heading">Edit Inventory Item</h1>
      </div>
      <hr className="inventories-edit-page__divider"/>
      
      <InventoryEditForm itemDetails = {itemDetails}/>
     



    </section>
  )
}

export default InventoriesEditPage
