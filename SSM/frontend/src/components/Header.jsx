import { Bell, Search, User, Sun,} from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary shadow-md">
      {/* Logo */}

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md border border-gray-900"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        {/* Add Button */}
        <button className="p-2 bg-blue-500 text-white rounded-md">
          <Search size={16} />
        </button>

        {/* Notifications */}
        <button className="relative p-2">
          <Bell size={24} />
          <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">
            3
          </span>
        </button>

        {/* Dark Mode Toggle */}
        <button className="p-2">
          <Sun size={24} />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <User size={24} />
          <span className="hidden md:block">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
