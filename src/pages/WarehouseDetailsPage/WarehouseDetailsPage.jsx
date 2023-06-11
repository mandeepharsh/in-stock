import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInvHeader from "../../components/WarehouseInvHeader/WarehouseInvHeader";
import WarehouseInvList from "../../components/WarehouseInvList/WarehouseInvList";

export default function WarehouseDetailsPage() {
  return (
    <>
      <WarehouseDetails />
      <WarehouseInvHeader />
      <WarehouseInvList />
    </>
  );
}
