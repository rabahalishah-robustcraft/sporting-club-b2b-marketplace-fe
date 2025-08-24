import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// A mock component for SiteHeader since the original path is not available
const SiteHeader = ({ title }) => (
  <div className="bg-white p-4 shadow-sm">
    <h1 className="text-2xl font-bold">{title}</h1>
  </div>
);

// Dummy data to simulate content for different pages
const pagesData = {
  "club-details-page": {
    heading: "Club Details",
    subheading: "Edit club information and manage member settings.",
  },
  "business-details-page": {
    heading: "Business Details",
    subheading:
      "Update business information, hours of operation, and contact details.",
  },
};

const PagesContent = () => {
  const [selectedPageId, setSelectedPageId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const title = "Page Management";

  const { register, handleSubmit, reset } = useForm();

  // Effect to reset the form with new data whenever a page is selected
  useEffect(() => {
    if (selectedPageId) {
      const page = pagesData[selectedPageId];
      if (page) {
        reset(page);
      }
    }
  }, [selectedPageId, reset]);

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    // Here you would typically send the data to a backend API to save the changes
  };

  // Handle "Discard All Changes" button click
  const handleDiscard = () => {
    // Reset the form to the original data for the selected page
    const page = pagesData[selectedPageId];
    handleCloseEdit();
    if (page) {
      reset(page);
    }
    console.log("Changes discarded.");
  };

  // Handle "Close" button click to exit the edit view
  const handleCloseEdit = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedPageId(null);
      setIsClosing(false);
    }, 500); // Match this duration with your CSS animation duration
  };

  // Function to render a single page list item
  const renderPageItem = (id, text) => (
    <div
      key={id}
      id={id}
      onClick={() => setSelectedPageId(id)}
      className={`flex flex-row justify-between px-4 lg:px-6 text-lg font-normal ${
        id === selectedPageId ? "bg-primary text-white" : "bg-slate-50"
      } p-4 ml-4 mr-4 -mb-4 rounded-xl cursor-pointer hover:bg-primary hover:text-white transition-colors`}
    >
      <div>{text}</div>
      <div>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18.5L15 12.5L9 6.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <div className={`${selectedPageId && "flex flex-row"} h-full`}>
      <style>
        {`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-out-right {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }

        .slide-out-right {
          animation: slide-out-right 0.5s ease-in forwards;
        }
        `}
      </style>
      <div>
        <SiteHeader title={title} />

        <div>
          {/* Left Panel: Pages List */}
          <div>
            <div className=" gap-2">
              <div className="space-y-4 mt-4">
                <div className="text-3xl font-medium lg:px-6">Pages</div>
                <div className="px-4 lg:px-6">
                  Edit front-end content, titles, and labels across the
                  platform.
                </div>
                <div>
                  <div className="mb-8">
                    {renderPageItem("club-details-page", "Club Details Page")}
                  </div>

                  {renderPageItem(
                    "business-details-page",
                    "Business Details Page"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedPageId && (
        <div
          id="slider"
          className={`flex w-full flex-1 flex-col bg-white rounded-lg shadow-xl p-6 ${
            isClosing ? "slide-out-right" : "slide-in-right"
          }`}
        >
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-200">
            <h2 className="text-2xl font-semibold">
              {pagesData[selectedPageId]?.heading} Page
            </h2>
            <button
              onClick={handleCloseEdit}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form using react-hook-form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* Heading Field */}
            <div className="flex flex-col gap-2">
              <p>
                Edit front-end content, titles, and labels across the platform.
              </p>
              <label htmlFor="heading" className="text-md font-medium">
                Heading
              </label>
              <input
                id="heading"
                type="text"
                {...register("heading")}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subheading Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subheading" className="text-md font-medium">
                Subheading
              </label>
              <textarea
                id="subheading"
                {...register("subheading")}
                className="border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={handleDiscard}
                className="px-6 py-2 border text-white bg-red-500 rounded-md hover:bg-red-400 transition-colors cursor-pointer"
              >
                Discard All Changes
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-pointer"
              >
                Save and Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PagesContent;
