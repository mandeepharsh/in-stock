// tools
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

// assets
import arrowback from "../../assets/icons/arrow_back-24px.svg";

// api
import { URLWarehouses } from "../../utils/api";

// styling
// import "./WarehouseEditPage.scss";
import WarehouseEditForm from "../../components/WarehouseEditForm/WarehouseEditForm";

export default function WarehouseEditPage() {
  // Grab Id by Params
  const { id } = useParams();
  const navigate = useNavigate();
  // State variables
  const [warehouse, setWarehouse] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // get warehouse deets from database
  useEffect(() => {
    axios
      .get(`${URLWarehouses}/${id}`)
      .then((response) => {
        setWarehouse(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <span>Loading.....</span>;
  }

  return (
    <div className="warehouse-edit-page">
      <div className="warehouse-edit-page__title">

        <Link to="/">
          <img
            className="warehouse-edit-page__icon"
            src={arrowback}
            alt="arrow back icon"
            onClick={() => navigate("-1")}
          />
        </Link>
        <h1 className="warehouse-edit-page__heading">Edit Warehouse</h1>
      </div>

      <hr className="warehouse-edit__divider" />
      <WarehouseEditForm warehouse={warehouse} />
    </div>
  );
}
