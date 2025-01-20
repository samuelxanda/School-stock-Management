import PropTypes from 'prop-types';
import { useState } from 'react';
import { Menu, User, Box, ChevronLeft, ChevronRight } from 'lucide-react'; // Import necessary icons

const Sidebar = ({ setSelectedTab }) => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage sidebar collapse

  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-primary text-white flex flex-col transition-all duration-300 h-full`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 hover:bg-blue-600 flex items-center justify-center mt-4 transition-all"
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? (
          <ChevronRight size={24} className="text-white" />
        ) : (
          <ChevronLeft size={24} className="text-white" />
        )}
      </button>

      {/* Title */}
      {!isCollapsed && (
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Stock Management
        </h1>
      )}

      {/* Menu Items */}
      <ul className="flex-1 space-y-2 px-2">
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-blue-600 rounded-lg transition-all"
          onClick={() => setSelectedTab('dashboard')}
        >
          <Menu size={24} />
          {!isCollapsed && <span className="ml-3 text-lg">Dashboard</span>}
        </li>
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-blue-600 rounded-lg transition-all"
          onClick={() => setSelectedTab('staffManagement')}
        >
          <User size={24} />
          {!isCollapsed && <span className="ml-3 text-lg">Staff Management</span>}
        </li>
        <li
          className="cursor-pointer flex items-center p-2 hover:bg-blue-600 rounded-lg transition-all"
          onClick={() => setSelectedTab('stockManagement')}
        >
          <Box size={24} />
          {!isCollapsed && <span className="ml-3 text-lg">Stock Management</span>}
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
