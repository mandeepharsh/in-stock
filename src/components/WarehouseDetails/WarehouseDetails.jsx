//styles
import "./WarehouseDetails.scss"

//externals
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import axios from "axios";

//utils and assets
import { URL } from "../../utils/api";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import pencil from "../../assets/icons/edit-24px.svg";



export default function WarehouseDetails() {

  //setup state for warehouse
  const [warehouse, setWarehouse] = useState({});
  const [hasError, setHasError] = useState(false);

  
  
  //grab url and set id
  let {id} = useParams();


  // get warehouse deets from database
  useEffect(() => {
    axios
      // .get(`${URL}/4`)
      .get(`${URL}/${id}`)
      .then((response) => {
        setWarehouse(response.data);
    })
      .catch(() => {
      setHasError(true);
    });
  }, []);

  
  //Loading state
  if (!warehouse) {
    return <span>Loading.....</span>
  }
  

  //Error state  
  if (hasError) {
    return <span>Warehouse with ID: {id} not found </span>
  }

  const {warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email} = warehouse;



  return (
  <main className="warehouse__wrapper">
    <section className="warehouse__header">
      <div className='warehouse__header-container'>
        <Link to="/">
          <img src={arrow} alt="previous warehouse" className="warehouse__header-icons" />
        </Link>
        <h2 className="warehouse__header-text">{warehouse_name}</h2>
      </div>
      <Link to={`/warehouse/${id}/edit`} className="warehouse__header-bgrnd">
        <img src={pencil} className="warehouse__header-edit-image" alt="edit this warehouse's details" />
        <span className='warehouse__header-edit-text'>Edit</span>
      </Link>
    </section>
    <section className="warehouse__info">
      <div className='warehouse__info-address'>
        <h4 className="warehouse__info-headers">WAREHOUSE ADDRESS:</h4>
        <p className="warehouse__info-text">{address}, {city}, {country}</p>
      </div>
      <div className="warehouse__info-contact">
        <div className='warehouse__info-column warehouse__info-column--left'>
          <h4 className="warehouse__info-headers">CONTACT NAME:</h4>
          <p className="warehouse__info-text">{contact_name}</p>
          <p className="warehouse__info-text">{contact_position}</p>
        </div>
        <div className='warehouse__info-column warehouse__info-column--right'>
          <h4 className="warehouse__info-headers">CONTACT INFORMATION:</h4>
          <p className="warehouse__info-text">{contact_phone}</p>
          <p className="warehouse__info-text">{contact_email}</p>
        </div>
      </div>
    </section>
    
  </main>
  )
}