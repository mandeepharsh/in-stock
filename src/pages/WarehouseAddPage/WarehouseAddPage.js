// tools
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom"; 
import validator from "validator";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import {Link} from "react-router-dom";

// styling
import "./WarehouseAddPage.scss";

// api
import { URL } from "../../utils/api";


const WarehouseAddpage = () => {
const navigate = useNavigate();  
const initialValues = {
    warehouse_name :"",
    address : "",
    city: "",
    country :"",
    contact_name : "",
    contact_position: "",
    contact_phone : "",
    contact_email: ""      
}

const initialErrorState = {
  warehouse_name: false,
  address: false,
  city: false,
  country: false,
  contact_name: false,
  contact_position: false,
  contact_phone: false,
  contact_email: false,  
}

const [values,setValues] = useState(initialValues);
const [errors, setErrors] = useState(initialErrorState);
const [isFormSubmit, setIsFormSubmit] = useState(false);

const onChangeHandler = (event) =>{
    const {name,value} = event.target;
    setValues({
        ...values,
        [name]: value
    });
    
    setErrors({
      ...errors,
      [name]:false   
    })
};

const phnNum = (num) => {
 return  num.replace(/\D/g, '')
}


const addWarehouseHandler = (event) =>{
  event.preventDefault();
  
  const newErrors = {};
  let hasError = false;
  for (let field in values) {
    if (values[field].trim() === "") {
      newErrors[field] = true;
      hasError = true;
    } else {
      newErrors[field] = false;
    }
  }

  if (hasError) {
    setErrors(newErrors);
  } else  {
    axios.post(URL + "/add",values)
      .then((res) =>  navigate(`/warehouses/${res.data[0].id}`), setErrors(initialErrorState),setIsFormSubmit(true))
      .catch((error) => console.log(error));
  }
}
  return (
    <div className="warehouse-add-page">
      <div className="warehouse-add-page__title">
       <Link to="/"> <img className="warehouse-add-page__icon"
         src={arrowback} alt="arrow back icon" /></Link>
        <h1 className="warehouse-add-page__heading">Add New Warehouse</h1>
      </div>
      <hr className="warehouse-add__divider"/>
      <form className="warehouse-add__form"
            onSubmit={addWarehouseHandler} >
        <div className="warehouse-add__fieldset warehouse-add__fieldset--divider">
          <h2 className="warehouse-add__fieldset-heading">Warehouse Details</h2>
          <label className="warehouse-add__label">
            Warehouse Name
            <input className={`warehouse-add__input ${errors.warehouse_name  ? "warehouse-add__input--invalid" : ""}`} 
                   name = "warehouse_name"
                   placeholder="Warehouse Name"
                   value ={values.warehouse_name }
                   onChange={onChangeHandler}
                    />
           {(errors.warehouse_name ) && <span className="warehouse-add__error-message">
           <img alt="error icon" src={errorIcon}/>This field is required </span>}
          </label>
          <label className="warehouse-add__label">
            Street Address
            <input className={`warehouse-add__input ${errors.address  ? "warehouse-add__input--invalid" : ""}`}
                   name = "address"
                   placeholder="Street Address" 
                   value = {values.address}
                   onChange={onChangeHandler}
                   />  
           {(errors.address) && <span className="warehouse-add__error-message">
           <img alt="error icon" src={errorIcon}/>This field is required</span>} 
          </label>
          <label className="warehouse-add__label">
            City
            <input className={`warehouse-add__input ${errors.city   ? "warehouse-add__input--invalid" : ""}`}
                   name="city"
                   placeholder="City"
                   value={values.city}
                   onChange={onChangeHandler}
                    />
          {(errors.city ) && <span className="warehouse-add__error-message">
          <img alt="error icon" src={errorIcon}/>This field is required</span>}   
          </label>
          <label className="warehouse-add__label">
            Country
            <input className={`warehouse-add__input ${errors.country  ? "warehouse-add__input--invalid" : ""}`} 
                   name="country"
                   placeholder="Country"
                   value={values.country}
                   onChange={onChangeHandler}
                    />     
           {(errors.country ) &&
           <span className="warehouse-add__error-message">
           <img alt="error icon" src={errorIcon}/>This field is required</span>}
          </label>
        </div>
        <hr className="warehouse-add__divider warehouse-add__divider--remove"/>
        <div className="warehouse-add__fieldset">
          <h2 className="warehouse-add__fieldset-heading">Contact Details</h2>
          <label className="warehouse-add__label" >
            Contact Name
            <input className={`warehouse-add__input ${errors.contact_name  ? "warehouse-add__input--invalid" : ""}`}
                   name="contact_name" 
                   placeholder="Contact Name" 
                   value={values.contact_name}
                   onChange={onChangeHandler}
                   />
        {(errors.contact_name ) && <span className="warehouse-add__error-message">
        <img alt="error icon" src={errorIcon}/>This field is required</span>}
          </label>
          <label className="warehouse-add__label">
            Position
            <input className={`warehouse-add__input ${errors.contact_position   ? "warehouse-add__input--invalid" : ""}`} 
                   name="contact_position"
                   placeholder="Position" 
                   value={values.contact_position}
                   onChange={onChangeHandler} 
                   /> 
           {(errors.contact_position  ) && <span className="warehouse-add__error-message">
           <img alt="error icon" src={errorIcon}/>This field is required</span>}
         
          </label>
          <label className="warehouse-add__label">
            Phone Number
            <input className={`warehouse-add__input ${errors.contact_phone  ? "warehouse-add__input--invalid" : ""}`} 
                   name="contact_phone"
                   placeholder="Phone Number"
                   value={values.contact_phone}
                   onChange={onChangeHandler}
                    />
           {(errors.contact_phone ) && <span className="warehouse-add__error-message">
           <img alt="error icon" src={errorIcon}/>This field is required</span>}
           {(!validator.isMobilePhone(phnNum(values.contact_phone) ) && isFormSubmit)?   <span className="warehouse-add__error-message">
          <img alt="error icon" src={errorIcon}/>This phone number is not valid</span> : ""} 
          </label>
          <label className="warehouse-add__label">
            Email
            <input className={`warehouse-add__input  ${errors.contact_email   ? "warehouse-add__input--invalid" : ""}`} 
                   name="contact_email"
                   placeholder="Email" 
                   value={values.contact_email}
                   onChange={onChangeHandler} 
                   />
          {(errors.contact_email)&& (
          <span className="warehouse-add__error-message">
          <img alt="error icon" src={errorIcon}/>This field is required</span>)} 
         {(!validator.isEmail(values.contact_email ) && isFormSubmit)?   <span className="warehouse-add__error-message">
          <img alt="error icon" src={errorIcon}/>This email format is not valid</span> : ""} 
          </label>
        </div>

        <div className="warehouse-add-page__button-group">
          <button type="button"
                  className=" warehouse-add-page__button-cancel"
                  onClick={()=> navigate("/")}
                  >Cancel</button>
          <button type="sumbit"
                  className=" warehouse-add-page__button-add"
                  >+ Add Warehouse</button>
        </div>
      </form>
    </div>
  );
};

export default WarehouseAddpage;
