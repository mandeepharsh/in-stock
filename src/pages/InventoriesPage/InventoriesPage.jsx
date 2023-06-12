//Import tools
import { URLInventories } from "../../utils/api";
import axios from "axios";
import { useState, useEffect } from "react";
import InventoriesHeader from "../../components/InventoriesHeader/InventoriesHeader";
import InventoriesList from "../../components/InventoriesList/InventoriesList";

export default function InventoriesPage() {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    axios
      .get(URLInventories)
      .then((response) => {
        setInventories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!inventories) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <section className="inventories">
        <InventoriesHeader />
        <InventoriesList inventories={inventories} />
      </section>
    </>
  );
}
