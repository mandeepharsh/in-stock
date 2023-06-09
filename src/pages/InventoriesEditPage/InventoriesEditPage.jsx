import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
// assests
import arrowback from "../../assets/icons/arrow_back-24px.svg"
import { URLInventories } from "../../utils/api"
// styling
import "./InventoriesEditPage.scss"
import { useEffect } from "react"


import InventoryEditForm from "../../components/InventoryEditForm/InventoryEditForm"
const InventoriesEditPage = () => {
  
  const {id} = useParams(); 

  const [itemDetails,setItemDetails] = useState();
  const [isLoading,setIsLoading] = useState(true)
  

  useEffect(()=>{
    axios.get(URLInventories + "/" + id )
    .then((res)=> {setItemDetails(res.data)
                   setIsLoading(false)})
    .catch((err)=> console.log(err))
  },[id])

  if(!!isLoading){
    return <span>...Loading</span>
  }

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
