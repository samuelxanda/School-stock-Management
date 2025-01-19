import PropTypes from 'prop-types'; // Import PropTypes

const Sidebar = ({ setSelectedTab }) => {
  return (
    <div className="w-64 bg-primary text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
      <ul>
        <li
          className="cursor-pointer p-2 hover:bg-blue-600"
          onClick={() => setSelectedTab('dashboard')}
        >
          Dashboard
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-blue-600"
          onClick={() => setSelectedTab('staffManagement')}
        >
          Staff Management
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-blue-600"
          onClick={() => setSelectedTab('stockManagement')}
        >
          Stock Management
        </li>
      </ul>
    </div>
  );
};

// Add prop-types validation for the `setSelectedTab` function
Sidebar.propTypes = {
  setSelectedTab: PropTypes.func.isRequired, // Ensure setSelectedTab is a required function
};

export default Sidebar;
