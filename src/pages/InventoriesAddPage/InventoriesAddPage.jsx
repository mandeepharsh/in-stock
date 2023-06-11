// import styles
import "./InventoriesAddPage.scss"

//import toooling
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

// import icons 
import arrowback from "../../assets/icons/arrow_back-24px.svg"

//Import variables
import { URLInventories, URLWarehouses } from "../../utils/api"


//Import form - we should re-name since we are using in diff components
// import InventoryEditForm from "../../components/InventoryEditForm/InventoryEditForm"
import InventoryAddForm from "../../components/InventoryAddForm/InventoryAddForm"


const InventoriesAddPage = () => {
  
  const {id} = useParams(); 
  const navigate = useNavigate();
  // const [itemDetails,setItemDetails] = useState();
  const[warehouses, setWarehouses] = useState();
  const [isLoading, setIsLoading] = useState(true)
  
   
  useEffect(()=>{
    axios.get(URLWarehouses)
    .then((res)=>{const warehousesName = res.data.map(({id,warehouse_name}) =>{ return {id,warehouse_name}})
      return setWarehouses(warehousesName) 
    })
    .then(setIsLoading(false))
    .catch((err)=>{ console.log(err)})
  },[])


  // useEffect(()=>{
  //   axios.get(`${URLInventories}/{id}`)
  //   .then((res)=> {setItemDetails(res.data)
  //                  setIsLoading(false)})
  //   .catch((err)=> console.log(err))

  // },[id])

  if(isLoading){
    return <span>...Loading</span>
  }

  return (
    <section className="inventory__add"> 
         <div className="inventory__title">
        <img className="inventory__icon"
             onClick={()=> navigate(-1)}
             src={arrowback} 
             alt="arrow back icon" />
        <h1 className="inventory__heading">Edit Inventory Item</h1>
      </div>
      <hr className="inventory__divider"/>
      <InventoryAddForm warehousesNames = {warehouses}
      />
    </section>
  )
}

export default InventoriesAddPage