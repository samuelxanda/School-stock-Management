import {
  Box,
  AlertCircle,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Initialize Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Mock data for stock levels chart
  const stockData = {
    labels: ["Books", "Uniforms", "Laptops", "Stationery", "Sports Gear"],
    datasets: [
      {
        label: "Stock Levels",
        data: [120, 80, 30, 150, 50],
        backgroundColor: "#4F46E5",
        borderRadius: 8,
      },
    ],
  };

  // Mock data for trends chart
  const trendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders Placed",
        data: [25, 35, 45, 50, 65, 70],
        backgroundColor: "#10B981",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="bg-gray-100">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Key Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-7">
        {/* Total Stock Items */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <Box className="text-blue-600 w-10 h-10" />
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">
              Total Items
            </h2>
            <p className="text-gray-500 text-sm">1,250</p>
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <AlertCircle className="text-yellow-600 w-10 h-10" />
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">
              Low Stock Alerts
            </h2>
            <p className="text-gray-500 text-sm">15</p>
          </div>
        </div>

        {/* Items Out of Stock */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <Box className="text-red-600 w-10 h-10" />
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">
              Out of Stock
            </h2>
            <p className="text-gray-500 text-sm">5</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <ShoppingCart className="text-green-600 w-10 h-10" />
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">
              Recent Orders
            </h2>
            <p className="text-gray-500 text-sm">42</p>
          </div>
        </div>

        {/* Pending Deliveries */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <Truck className="text-purple-600 w-10 h-10" />
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">
              Pending Deliveries
            </h2>
            <p className="text-gray-500 text-sm">8</p>
          </div>
        </div>

        {/* Suppliers Count */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <Users className="text-orange-600 w-10 h-10" />
          <div>
            <h2 className="text-gray-700 text-lg font-semibold">
              Active Suppliers
            </h2>
            <p className="text-gray-500 text-sm">12</p>
          </div>
        </div>
      </div>

      {/* Visualization Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock Levels Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Stock Levels
          </h2>
          <Bar data={stockData} options={{ responsive: true }} />
        </div>

        {/* Recent Trends Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Trends
          </h2>
          <Bar data={trendsData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
