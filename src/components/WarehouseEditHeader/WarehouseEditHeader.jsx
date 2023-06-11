import { Link, useNavigate } from "react-router-dom";
// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";

import "../../pages/WarehouseEditPage/WarehouseEditPage.scss";

export default function WarehouseEditHeader() {
  const navigate = useNavigate();

  return (
    <>
      <div className="warehouse-edit__header">
        <Link to="/" className="warehouse-edit__return">
          <img
            className="warehouse-edit__icon"
            src={arrowback}
            alt="arrow back icon"
            onClick={() => navigate(-1)}
          />
        </Link>
        <h1 className="warehouse-edit__title">Edit Warehouse</h1>
      </div>

      <hr className="warehouse-edit__divider" />
    </>
  );
}
