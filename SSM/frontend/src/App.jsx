import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StaffManagement from './components/StaffManagement';
import StockManagement from './components/StockManagement';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setSelectedTab={setSelectedTab} />

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-50">
        {selectedTab === 'dashboard' && <Dashboard />}
        {selectedTab === 'staffManagement' && <StaffManagement />}
        {selectedTab === 'stockManagement' && <StockManagement />}
      </div>
    </div>
  );
};

export default App;
