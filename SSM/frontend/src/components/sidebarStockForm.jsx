import { useState } from 'react';

const sidebarStockForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    department: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const actions = 'Default Action'; // Define actions programmatically if needed
    onSubmit({ ...formData, actions });
    onClose();
    setFormData({ name: '', category: '', department: '', quantity: '' });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 z-50`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Add Item</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition duration-200"
          aria-label="Close Sidebar"
        >
          <span className="text-2xl">&times;</span>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="Item Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <input
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="e.g., Electronics"
            required
          />
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-600"
          >
            Department
          </label>
          <input
            id="department"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="e.g., Logistics"
            required
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-600"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="e.g., 50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default sidebarStockForm;
