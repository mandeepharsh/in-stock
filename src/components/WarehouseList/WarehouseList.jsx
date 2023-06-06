export default function WarehouseList() {
  return (
    <section className="warehouses">
      <div className="warehouse__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <input
          type="text"
          name="search"
          id="search"
          className="warehouses__search"
          placeholder="Search..."
        />

        <button className="warehouses__add">+ Add New Warehouse</button>
      </div>
    </section>
  );
}
