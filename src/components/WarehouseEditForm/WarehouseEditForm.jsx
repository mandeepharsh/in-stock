// tools
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

// assets
import errorIcon from "../../assets/icons/error-24px.svg";

// api
import { URLWarehouses } from "../../utils/api";

// styling
import "./WarehouseEditForm.scss";

const WarehouseEditForm = ({ warehouse }) => {
  const navigate = useNavigate();

  const { id } = warehouse;

  const initialValues = {
    warehouse_name: warehouse.warehouse_name,
    editress: warehouse.editress,
    city: warehouse.city,
    country: warehouse.country,
    contact_name: warehouse.contact_name,
    contact_position: warehouse.contact_position,
    contact_phone: warehouse.contact_phone,
    contact_email: warehouse.contact_email,
  };

  const initialErrorState = {
    warehouse_name: false,
    editress: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false,
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrorState);
  const [formSumbit, setformSumbit] = useState(false);

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
        .put(URLWarehouses + "/" + id, values)
        .then(
          (res) => console.log(res.data),
          setErrors(initialErrorState),
          setformSumbit(true)
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="warehouse-edit-page">
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
              value={values.warehouse_name}
              onChange={onChangeHandler}
            />
            {errors.warehouse_name && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required{" "}
              </span>
            )}
          </label>
          <label className="warehouse-edit__label">
            Street Address
            <input
              className={`warehouse-edit__input ${
                errors.editress ? "warehouse-edit__input--invalid" : ""
              }`}
              name="address"
              placeholder="Street address"
              value={values.address}
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
              value={values.city}
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
              value={values.country}
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
              value={values.contact_name}
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
              value={values.contact_position}
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
              value={values.contact_phone}
              onChange={onChangeHandler}
            />
            {errors.contact_phone && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
            {!validator.isMobilePhone(phoneNumber(values.contact_phone)) &&
            formSumbit ? (
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
              value={values.contact_email}
              onChange={onChangeHandler}
            />
            {errors.contact_email && (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This field is required
              </span>
            )}
            {!validator.isEmail(values.contact_email) && formSumbit ? (
              <span className="warehouse-edit__error-message">
                <img alt="error icon" src={errorIcon} />
                This email format is not valid
              </span>
            ) : (
              ""
            )}
          </label>
        </div>

        <div className="warehouse-edit-page__button-group">
          <button
            type="button"
            className=" warehouse-edit-page__button-cancel"
            onClick={() => navigate("-1")}
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
};

export default WarehouseEditForm;
