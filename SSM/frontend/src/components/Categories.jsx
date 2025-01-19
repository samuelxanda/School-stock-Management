
const Categories = () => {
  // Example categories (this can be fetched from your API)
  const categories = [
    { CategoryID: 1, CategoryName: 'Electronics' },
    { CategoryID: 2, CategoryName: 'Furniture' },
    { CategoryID: 3, CategoryName: 'Groceries' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.CategoryID} className="p-2 hover:bg-gray-200">
            {category.CategoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
