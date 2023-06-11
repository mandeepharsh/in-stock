// tools
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



// api
import { URLWarehouses } from "../../utils/api";

// components
import WarehouseEditForm from "../../components/WarehouseEditForm/WarehouseEditForm";
import WarehouseEditHeader from "../../components/WarehouseEditHeader/WarehouseEditHeader";

export default function WarehouseEditPage() {
  const { id } = useParams();
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
    <div className="warehouse-edit">
      <WarehouseEditHeader />
      {/* <WarehouseEditForm warehouse={warehouse} /> */}
    </div>
  );
}
