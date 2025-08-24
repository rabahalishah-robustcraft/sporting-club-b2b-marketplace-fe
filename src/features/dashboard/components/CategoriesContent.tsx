import { SiteHeader } from "@/components/site-header";
import { Pencil, Trash2, Plus, Check } from "lucide-react";
import { useState } from "react";

// Main App component
const CategoriesContent = () => {
  const initialCategories = [
    { id: 1, name: "Bakery / Pastries" },
    { id: 2, name: "Butcher / Fresh Meat & Eggs" },
    { id: 3, name: "Confectionary" },
    { id: 4, name: "Bottled Water Supplier" },
    { id: 5, name: "Sports Drink Supplier" },
    { id: 6, name: "Soft Drinks Supplier" },
    { id: 7, name: "Apparel (Playing Strip Supplier)" },
    { id: 8, name: "Merchandise (Supporters & Club Merchandise)" },
    { id: 9, name: "Sporting Equipment" },
    { id: 10, name: "Sports Machine" },
    { id: 11, name: "Signage" },
    { id: 12, name: "Trophies and Medals" },
    { id: 13, name: "Printing" },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");

  const title = "Category Management";

  // Function to handle the delete action
  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  // Function to start editing a category
  const handleEdit = (category) => {
    setEditingId(category.id);
    setEditingName(category.name);
  };

  // Function to save the edited category
  const handleSaveEdit = (id) => {
    if (editingName.trim() === "") return;
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, name: editingName } : category
      )
    );
    setEditingId(null);
    setEditingName("");
  };

  // Function to add a new custom category
  const handleAddCustomCategory = () => {
    if (newCategoryName.trim() === "") return;
    const newId = Math.max(...categories.map((c) => c.id)) + 1;
    const newCategory = { id: newId, name: newCategoryName };
    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    handleEdit(newCategory); // Automatically enter edit mode for the new category
  };

  return (
    <div>
      <SiteHeader title={title} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className=" text-3xl font-medium lg:px-6">Categories</div>
            <div className="px-4 lg:px-6">
              Manage and organize all listing categories to streamline the user
              experience.
            </div>
            <div className="px-6">
              <div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between py-3"
                  >
                    {editingId === category.id ? (
                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
                      />
                    ) : (
                      <span className="text-gray-800 font-normal text-md">
                        {category.name}
                      </span>
                    )}
                    <div className="flex items-center space-x-2">
                      {editingId === category.id ? (
                        <button
                          className="p-2 rounded-full text-green-500 hover:bg-green-100 transition-colors duration-200"
                          aria-label="Save category"
                          onClick={() => handleSaveEdit(category.id)}
                        >
                          <Check size={18} />
                        </button>
                      ) : (
                        <button
                          className="p-2 rounded-full text-gray-500 hover:bg-gray-200 transition-colors duration-200"
                          aria-label="Edit category"
                          onClick={() => handleEdit(category)}
                        >
                          <Pencil size={18} />
                        </button>
                      )}
                      <button
                        className="p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors duration-200"
                        aria-label="Delete category"
                        onClick={() => handleDelete(category.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 pt-4">
                <input
                  type="text"
                  placeholder="Add a new category"
                  className="w-1/4 px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
                  aria-label="New category input"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />

                <div className="flex space-x-2">
                  <button
                    className="p-2 rounded-full text-green-500 hover:bg-green-100 transition-colors duration-200"
                    aria-label="Add new category"
                    onClick={() => handleAddCustomCategory()}
                  >
                    <Check size={18} />
                  </button>
                  {/* The delete button here seems to be a UI remnant from the mock and is not functional in this context */}
                  <button
                    className="p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors duration-200"
                    aria-label="Delete selected category"
                    onClick={() => setNewCategoryName("")}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Add Custom Categories Button */}
              <div className="pt-4">
                <button
                  className="flex items-center justify-center w-1/4 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 font-medium"
                  onClick={handleAddCustomCategory}
                >
                  <Plus size={20} className="mr-2" />
                  Add Custom Categories
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <h1 className=" text-3xl font-medium">Suggested Categories</h1>
                <p>
                  Review and approve categories submitted by the users to add to
                  the official marketplace.
                </p>
                <div className="flex flex-wrap space-x-2 ">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className=" p-3 rounded-2xl bg-slate-50 hover:bg-slate-200 mb-4 cursor-pointer"
                      onClick={() => {
                        setNewCategoryName(category.name);
                        handleAddCustomCategory();
                      }}
                    >
                      <span className="text-gray-800 font-normal text-md">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesContent;
