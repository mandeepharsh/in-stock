import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
// assests
import arrowback from "../../assets/icons/arrow_back-24px.svg"
import { URLInventories, URLWarehouses } from "../../utils/api"
// styling
import "./InventoriesEditPage.scss"
import { useEffect } from "react"


import InventoryEditForm from "../../components/InventoryEditForm/InventoryEditForm"
const InventoriesEditPage = () => {
  
  const {id} = useParams(); 

  const [itemDetails,setItemDetails] = useState();
  const[warehouses,setWarehouses] = useState();
  const [isLoading,setIsLoading] = useState(true)
  
   
  useEffect(()=>{
    axios.get(URLWarehouses)
    .then((res)=>{
      const warehousesName = res.data.map(({id,warehouse_name}) =>{ return {id,warehouse_name}})
      return setWarehouses(warehousesName)
    })
    .catch((err)=>{ console.log(err)})
  },[])


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
      <InventoryEditForm itemDetails = {itemDetails}
                         warehousesNames = {warehouses}
      />
    </section>
  )
}

export default InventoriesEditPage
