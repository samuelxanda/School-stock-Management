import { useState } from "react";
import { PlusCircle, Edit, Trash, Search } from "lucide-react";

const StaffManagement = () => {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Teacher",
      department: "Math",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Admin",
      department: "HR",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
  };

  return (
    <div className="bg-gray-100">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Staff Management</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search staff..."
          className="p-2 border rounded-lg flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="text-gray-600" />
      </div>

      {/* Add Staff Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center mb-4">
        <PlusCircle className="mr-2" />
        Add Staff
      </button>

      {/* Staff List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff
                .filter((member) =>
                  member.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((member) => (
                  <tr
                    key={member.id}
                    className="border-b hover:bg-gray-50 text-gray-600"
                  >
                    <td className="px-4 py-2">{member.name}</td>
                    <td className="px-4 py-2">{member.role}</td>
                    <td className="px-4 py-2">{member.department}</td>
                    <td className="px-4 py-2">{member.email}</td>
                    <td className="px-4 py-2">{member.phone}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button className="text-blue-600 hover:underline">
                        <Edit size={16} />
                      </button>
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleDelete(member.id)}
                      >
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;
