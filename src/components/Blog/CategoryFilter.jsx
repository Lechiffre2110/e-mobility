import React from 'react';

/**
 * Component for displaying category filter buttons.
 */
function CategoryFilter({ allCategories, selectedCategory, setSelectedCategory, t }) {
  return (
    <div className="categories mb-6">
      <div className="category-list flex space-x-4">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded ${
            !selectedCategory
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {t("blogpage.showallbutton")}
        </button>
      </div>
    </div>
  );
}

export default CategoryFilter;
