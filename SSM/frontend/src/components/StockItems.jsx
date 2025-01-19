
const StockItems = () => {
  // Example stock items (this should be fetched from your API)
  const stockItems = [
    { StockID: 1, StockName: 'Laptop', Quantity: 50, UnitPrice: 1000 },
    { StockID: 2, StockName: 'Chair', Quantity: 200, UnitPrice: 50 },
    { StockID: 3, StockName: 'Apple', Quantity: 1000, UnitPrice: 1 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Stock Items</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Stock Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {stockItems.map((item) => (
            <tr key={item.StockID}>
              <td className="px-4 py-2">{item.StockName}</td>
              <td className="px-4 py-2">{item.Quantity}</td>
              <td className="px-4 py-2">{item.UnitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockItems;
