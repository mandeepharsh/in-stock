import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInvHeader from "../../components/WarehouseInvHeader/WarehouseInvHeader";
import WarehouseInvList from "../../components/WarehouseInvList/WarehouseInvList";
import "./WarehouseDetailsPage.scss"

export default function WarehouseDetailsPage() {
  return (
    <section className="warehouse-details-page">
      <WarehouseDetails />
      <WarehouseInvHeader />
      <WarehouseInvList />
    </section>
  );
}
