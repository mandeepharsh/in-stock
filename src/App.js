import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
// import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
// import WarehousesPage from "../src/pages/WarehousesPage/WharehousesPage";
// import WarehouseAddPage from "../src/pages/WarehouseAddPage/WharehouseAddPage";
// import WarehouseEditPage from "../src/pages/WarehouseEditPage/WharehouseEditPage";
// import WarehouseDetailsPage from "../src/pages/WarehouseDetailsPage/WharehouseDetailsPage";
// import InventoriesPage from "../src/pages/InventoriesPage/InventoriesPage";
// import InventoriesAddPage from "../src/pages/InventoriesAddPage/InventoriesAddPage";
// import InventoriesEditPage from "../src/pages/InventoriesEditPage/InventoriesEditPage";
// import InventoriesDetailsPage from "../src/pages/InventoriesDetailsPage/InventoriesDetailsPage";

function App() {
  return (
    <Router>
      {/* <Header/>
      <Routes>
        <Route path="/" element={<WarehousesPage/>}/>
        <Route path="/warehouses/" element={<WarehousesPage/>}/>
        <Route path="/warehouses/add" element={<WarehouseAddPage/>}/>
        <Route path="/warehouses/:id" element={<WarehouseDetailsPage/>} />
        <Route path="/warehouses/:id/edit" element={<WarehouseEditPage/>} />
        <Route path="/inventories" element={<InventoriesPage/>}/>
        <Route path="/inventories/add" element={<InventoriesAddPage/>}/>
        <Route path="/inventories/:id" element={<InventoriesDetailsPage/>}/>
        <Route path="/inventories/:id/edit" element={<InventoriesEditPage/>}/>
      </Routes>*/}
      <Footer />
    </Router>
  );
}

export default App;
