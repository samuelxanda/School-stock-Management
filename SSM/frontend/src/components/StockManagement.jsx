import React, { useState } from 'react';
import Categories from './Categories';
import StockItems from './StockItems';

const StockManagement = () => {
  const [selectedSubTab, setSelectedSubTab] = useState('categories');

  return (
    <div>
      <div className="flex mb-4">
        <button
          className={`p-2 ${selectedSubTab === 'categories' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedSubTab('categories')}
        >
          Categories
        </button>
        <button
          className={`p-2 ${selectedSubTab === 'stockItems' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedSubTab('stockItems')}
        >
          Stock Items
        </button>
      </div>

      {selectedSubTab === 'categories' && <Categories />}
      {selectedSubTab === 'stockItems' && <StockItems />}
    </div>
  );
};

export default StockManagement;
