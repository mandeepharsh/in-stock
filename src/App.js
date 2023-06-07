import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header"
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddpage"
// import Footer from "../src/components/Footer/Footer";
// import WarehousesPage from "../src/pages/WarehousesPage/WharehousesPage";
// import WarehouseAddPage from "../src/pages/WarehouseAddPage/WharehouseAddPage";
// import WarehouseEditPage from "../src/pages/WarehouseEditPage/WharehouseEditPage";
// import WarehouseDetailsPage from "../src/pages/WarehouseDetailsPage/WharehouseDetailsPage";
// import InventoryPage from "../src/pages/InventoryPage/InventoryPage";
// import InventoryAddPage from "../src/pages/InventoryAddPage/InventoryAddPage";
// import InventoryEditPage from "../src/pages/InventoryEditPage/InventoryEditPage";
// import InventoryDetailsPage from "../src/pages/InventoryDetailsPage/InventoryDetailsPage";



function App() {
  return (
    
    <Router>
      <Header/>
      <main className="mainContent">
        <WarehouseAddPage/>
      </main>
        {/* <Routes>
          <Route path="/" element={<WarehousesPage/>}/>
          <Route path="/warehouses/" element={<WarehousesPage/>}/>
          <Route path="/warehouses/add" element={<WarehouseAddPage/>}/>
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage/>} />
          <Route path="/warehouses/:id/edit" element={<WarehouseEditPage/>} />
          <Route path="/inventory" element={<InventoryPage/>}/>
          <Route path="/inventory/add" element={<InventoryAddPage/>}/>
          <Route path="/inventory/:id" element={<InventoryDetailsPage/>}/>
          <Route path="/inventory/:id/edit" element={<InventoryEditPage/>}/>
        </Routes>
      <Footer/> */}
    </Router>

  );
}

export default App;