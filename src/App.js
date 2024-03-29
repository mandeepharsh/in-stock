import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import "./App.scss";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// pages
import WarehousePage from "./pages/WarehousesPage/WarehousePage";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";
import InventoriesDetailsPage from "./pages/InventoriesDetailsPage/InventoriesDetailsPage";
import InventoriesEditPage from "./pages/InventoriesEditPage/InventoriesEditPage";
import InventoriesAddPage from "./pages/InventoriesAddPage/InventoriesAddPage";


function App() {
  return (
    <Router>
      <Header/>
          <Routes>
          <Route path="/" element={<WarehousePage/>}/>
          <Route path="/warehouses/add" element={<WarehouseAddPage/>}/>
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage/>} />
          <Route path="/warehouses/:id/edit" element={<WarehouseEditPage/>} />
          <Route path="/inventories" element={<InventoriesPage/>}/>
          <Route path="/inventories/add" element={<InventoriesAddPage/>}/>
          <Route path="/inventories/:id" element={<InventoriesDetailsPage/>}/>
          <Route path="/inventories/:id/edit" element={<InventoriesEditPage/>}/>
        </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
