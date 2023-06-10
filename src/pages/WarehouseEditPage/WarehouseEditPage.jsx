// tools
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import validator from "validator";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";

// api
import { URLWarehouses } from "../../utils/api";

// styling
import "./WarehouseEditPage.scss";

export default function WarehouseEditPage() {
  // Grab Id by Params
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValues = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  };

  const initialErrorState = {
    warehouse_name: false,
    address: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false,
  };

  // State variables
  const [warehouse, setWarehouse] = useState({});
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrorState);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  // get warehouse deets from database
  useEffect(() => {
    axios
      .get(`${URLWarehouses}/${id}`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch(() => {
        setErrors(true);
      });
  }, []);

  console.table(warehouse);

  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouse;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  // don't understand, causing errors
  const phoneNumber = (num) => {
    return num.replace(/\D/g, "");
  };

  const editWarehouseHandler = (event) => {
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
    } else {
      axios
        .post(URLWarehouses + "/" + { id }, values)
        .then(
          (res) => navigate(`/warehouses/${res.data[0].id}`),
          setErrors(initialErrorState),
          setIsFormSubmit(true)
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="warehouse-edit-page">
      <div className="warehouse-edit-page__title">
        <Link to="/">
          <img
            className="warehouse-edit-page__icon"
            src={arrowback}
            alt="arrow back icon"
          />
        </Link>
        <h1 className="warehouse-edit-page__heading">Edit Warehouse</h1>
      </div>

      <hr className="warehouse-edit__divider" />

      <form className="warehouse-edit__form" onSubmit={editWarehouseHandler}>
        <div className="warehouse-edit__fieldset warehouse-edit__fieldset--divider">
          <h2 className="warehouse-edit__fieldset-heading">
            Warehouse Details
          </h2>
          <label className="warehouse-edit__label">
            Warehouse Name
            <input
              className={`warehouse-edit__input ${
                errors.warehouse_name ? "warehouse-edit__input--invalid" : ""
              }`}
              name="warehouse_name"
              placeholder="Warehouse Name"
              value={warehouse_name}
              onChange={onChangeHandler}
            />
            {errors.warehouse_name && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
          </label>

          <label className="warehouse-edit__label">
            Street address
            <input
              className={`warehouse-edit__input ${
                errors.address ? "warehouse-edit__input--invalid" : ""
              }`}
              name="address"
              placeholder="Street address"
              value={address}
              onChange={onChangeHandler}
            />
            {errors.address && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
          </label>

          <label className="warehouse-edit__label">
            City
            <input
              className={`warehouse-edit__input ${
                errors.city ? "warehouse-edit__input--invalid" : ""
              }`}
              name="city"
              placeholder="City"
              value={city}
              onChange={onChangeHandler}
            />
            {errors.city && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
          </label>

          <label className="warehouse-edit__label">
            Country
            <input
              className={`warehouse-edit__input ${
                errors.country ? "warehouse-edit__input--invalid" : ""
              }`}
              name="country"
              placeholder="Country"
              value={country}
              onChange={onChangeHandler}
            />
            {errors.country && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
          </label>
        </div>

        <hr className="warehouse-edit__divider warehouse-edit__divider--remove" />

        <div className="warehouse-edit__fieldset">
          <h2 className="warehouse-edit__fieldset-heading">Contact Details</h2>
          <label className="warehouse-edit__label">
            Contact Name
            <input
              className={`warehouse-edit__input ${
                errors.contact_name ? "warehouse-edit__input--invalid" : ""
              }`}
              name="contact_name"
              placeholder="Contact Name"
              value={contact_name}
              onChange={onChangeHandler}
            />
            {errors.contact_name && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
          </label>

          <label className="warehouse-edit__label">
            Position
            <input
              className={`warehouse-edit__input ${
                errors.contact_position ? "warehouse-edit__input--invalid" : ""
              }`}
              name="contact_position"
              placeholder="Position"
              value={contact_position}
              onChange={onChangeHandler}
            />
            {errors.contact_position && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
          </label>

          <label className="warehouse-edit__label">
            Phone Number
            <input
              className={`warehouse-edit__input ${
                errors.contact_phone ? "warehouse-edit__input--invalid" : ""
              }`}
              name="contact_phone"
              placeholder="Phone Number"
              value={contact_phone}
              onChange={onChangeHandler}
            />
            {errors.contact_phone && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
            {!validator.isMobilePhone(phoneNumber(contact_phone)) &&
            isFormSubmit ? (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This phone number is not valid
              </span>
            ) : (
              ""
            )}
          </label>

          <label className="warehouse-edit__label">
            Email
            <input
              className={`warehouse-edit__input  ${
                errors.contact_email ? "warehouse-edit__input--invalid" : ""
              }`}
              name="contact_email"
              placeholder="Email"
              value={contact_email}
              onChange={onChangeHandler}
            />
            {errors.contact_email && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
            {!validator.isEmail(values.contact_email) && isFormSubmit ? (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This email format is not valid
              </span>
            ) : (
              ""
            )}
          </label>
        </div>

        {/* BUTTONS */}
        <div className="warehouse-edit-page__button-group">
          <button
            type="button"
            className="warehouse-edit-page__button-cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

          <button type="sumbit" className="warehouse-edit-page__button-edit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
