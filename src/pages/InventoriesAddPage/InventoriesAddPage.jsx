// import styles
import "./InventoriesAddPage.scss"

//import toooling
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// import icons
import arrowback from "../../assets/icons/arrow_back-24px.svg"

//Import variables
import {  URLWarehouses } from "../../utils/api"
import InventoryAddForm from "../../components/InventoryAddForm/InventoryAddForm"



const InventoriesAddPage = () => {

  //navigation
  const navigate = useNavigate();


  //set initial state
  const[warehouses, setWarehouses] = useState();
  const [isLoading, setIsLoading] = useState(true)



  //grab warehouses
  useEffect(()=>{
    axios.get(URLWarehouses)
    .then((res)=>{const warehousesName = res.data.map(({id,warehouse_name}) =>{ return {id,warehouse_name}})
      setWarehouses(warehousesName)
      setIsLoading(false)
    })
    .catch((err)=>{ console.log(err)})
  },[])

  if(isLoading){
    return <span>...Loading</span>
  }

//return header and pass off to form
  
return (
  <section className="inventory">
        <div className="inventory__title">
          <img className="inventory__icon"
                onClick={()=> navigate(-1)}
                src={arrowback}
                alt="arrow back icon" />
          <h1 className="inventory__heading">Add Inventory Item</h1>
    </div>
    <hr className="inventory__divider"/>
    <InventoryAddForm warehousesNames = {warehouses}
    />
  </section>
  )
}

export default InventoriesAddPage