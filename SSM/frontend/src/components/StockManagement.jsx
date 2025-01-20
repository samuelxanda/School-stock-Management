import { useState } from "react";
import { Search, Filter, Trash, Edit } from "lucide-react";

const StockManagement = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const stockItems = [
    { id: 1, name: "Laptop", category: "Electronics", department: "IT", quantity: 10 },
    { id: 2, name: "Desk", category: "Furniture", department: "HR", quantity: 5 },
    { id: 3, name: "Notebook", category: "Stationery", department: "Admin", quantity: 50 },
    { id: 4, name: "Projector", category: "Electronics", department: "Operations", quantity: 3 },
    { id: 5, name: "Chair", category: "Furniture", department: "IT", quantity: 8 },
  ];

  const categories = ["All", "Electronics", "Furniture", "Stationery"];
  const departments = ["All", "IT", "HR", "Admin", "Operations"];

  // Filter stock items based on selected category and department
  const filteredStock = stockItems.filter((item) => {
    return (
      (categoryFilter === "All" || item.category === categoryFilter) &&
      (departmentFilter === "All" || item.department === departmentFilter) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className=" bg-gray-50">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Stock Management</h1>

      {/* Filter and Search Bar */}
      <div className="flex justify-between items-center mb-6 space-x-6">
        {/* Category Filter */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-72 flex flex-col space-y-2">
          <label htmlFor="category" className="text-gray-700 font-semibold">
            Category
          </label>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-500" />
            <select
              id="category"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Department Filter */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-72 flex flex-col space-y-2">
          <label htmlFor="department" className="text-gray-700 font-semibold">
            Department
          </label>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-500" />
            <select
              id="department"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-80 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search stock items..."
            className="p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="text-gray-500" />
        </div>
      </div>

      {/* Stock Items Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="table-auto w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Quantity</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map((item) => (
              <tr
                key={item.id}
                className="text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                <td className="border px-6 py-4">{item.name}</td>
                <td className="border px-6 py-4">{item.category}</td>
                <td className="border px-6 py-4">{item.department}</td>
                <td className="border px-6 py-4">{item.quantity}</td>
                <td className="border px-6 py-4 flex space-x-3">
                  <Edit className="text-blue-600 cursor-pointer" />
                  <Trash className="text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManagement;
