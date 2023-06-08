//Impiort tools
import { URL } from "../../utils/api";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

//Import Components
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseHeader from "../../components/WarehousesHeader/WarehouseHeader";

export default function WarehousePage() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setWarehouses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!warehouses) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <section className="warehouses">
        <WarehouseHeader />
        <WarehouseList warehouses={warehouses} />
      </section>
    </>
  );
}
