import "./WarehouseDetails.scss"
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow_back-24px.svg";
import pencil from "../../assets/icons/edit-24px.svg";

// export default function WarehouseDetails({id}) {
  export default function WarehouseDetails() {

  

  return (
    <main className="warehouse__wrapper">
      <section className="warehouse__header">
        <div className='warehouse__header-container'>
          <Link to="/">
            <img src={arrow} alt="previous warehouse" className="warehouse__header-icons" />
          </Link>
          <h2 className="warehouse__header-text">{name}</h2>
        </div>
        <Link to={`/warehouse/${id}/edit`} className="warehouse__header-bgrnd">
          <img src={pencil} className="warehouse__header-edit-image" alt="edit this warehouse's details" />
          <span className='warehouse__header-edit-text'>Edit</span>
        </Link>
      </section>
      <section className="warehouse__info">
        <div className='warehouse__info-address'>
          <h4 className="warehouse__info-headers">Warehouse Address:</h4>
          <p className="warehouse__info-text">{address}, {city}, {country}</p>
        </div>
        <div className="warehouse__info-contact">
          <div className='warehouse__info-column warehouse__info-column--left'>
            <h4 className="warehouse__info-headers">CONTACT NAME:</h4>
            <p className="warehouse__info-text">{contact}</p>
            <p className="warehouse__info-text">{title}</p>
          </div>
          <div className='warehouse__info-column warehouse__info-column--right'>
            <h4 className="warehouse__info-headers">CONTACT INFORMATION:</h4>
            <p className="warehouse__info-text">{phone}</p>
            <p className="warehouse__info-text">{email}</p>
          </div>
        </div>
      </section>
      
    </main>
  )
}