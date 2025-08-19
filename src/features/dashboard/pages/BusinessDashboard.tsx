import { useState } from "react";
import { FilterInput } from "../components/FilterInput";
import { ClubCard } from "../components/ClubCard";
import { NavBar } from "@/components/navBar/NavBar";
import { Sidebar } from "@/components/sideBar/SideBar";
import { OpportunitySlider } from "../components/OpportunitySlider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OpportunityDetailSlider } from "../components/OpportunityDetailSlider";

// Main App component that renders the entire dashboard
export const BusinessDashboard = () => {
  // State to manage the visibility of the opportunity slider and the selected club data
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isSliderDetailOpen, setIsSliderDetailOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(null);

  // Function to handle the "View Opportunities" button click
  const handleViewOpportunities = (clubData) => {
    setSelectedClub(clubData);
    setIsSliderOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 relative">
      {isSliderOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 backdrop-blur-lg"
          id="modal-overlay"
        ></div>
      )}
      <NavBar />
      <div className="flex flex-1 p-4 md:p-8">
        <div className="flex-1 flex flex-col space-y-8">
          {/* Pass the handler down to the MainContent component */}
          <MainContent onViewOpportunities={handleViewOpportunities} />
        </div>
        <Sidebar />
      </div>

      {/* Opportunity Slider, conditionally rendered based on state */}
      <OpportunitySlider
        isOpen={isSliderOpen}
        setIsSliderDetailOpen={setIsSliderDetailOpen}
        onClose={() => setIsSliderOpen(false)}
        club={selectedClub}
      />

      <OpportunityDetailSlider
        isOpen={isSliderDetailOpen}
        onClose={() => setIsSliderDetailOpen(false)}
        club={selectedClub}
      />
    </div>
  );
};

// Main content area with filters and club cards
const MainContent = ({ onViewOpportunities }) => {
  // Sample data for the club cards, now with added 'city' and 'sport' for filtering
  const clubData = [
    {
      clubName: "AFL club",
      trending: true,
      sponsorships: ["Sponsorships Opportunities"],
      players: "200 Players",
      city: "Melbourne",
      sport: "Football",
      spending: "$10k+ Annual Spendings",
      listedDate: "Listed 6 Jan 2024",
      freeDelivery: true,
      followers: "1k",
    },
    {
      clubName: "Soccer club",
      trending: false,
      sponsorships: ["Sponsorships Opportunities"],
      players: "200 Players",
      city: "Melbourne",
      sport: "Soccer",
      spending: "$10k+ Annual Spendings",
      listedDate: "Listed 15 Jan 2024",
      freeDelivery: false,
      followers: "2.3k",
    },
    {
      clubName: "Cricket club",
      trending: false,
      sponsorships: ["Sponsorships Opportunities"],
      players: "200 Players",
      city: "Melbourne",
      sport: "Cricket",
      spending: "$10k+ Annual Spendings",
      listedDate: "Listed 2 Feb 2024",
      freeDelivery: true,
      followers: "200k",
    },
    {
      clubName: "Rugby Union club",
      trending: false,
      sponsorships: ["Sponsorships Opportunities"],
      players: "200 Players",
      city: "Melbourne",
      sport: "Rugby",
      spending: "$10k+ Annual Spendings",
      listedDate: "Listed 18 Feb 2024",
      freeDelivery: false,
      followers: "110k",
    },
  ];

  // State for all filter values
  const [filters, setFilters] = useState({
    location: "",
    category: "",
    value: "",
    distance: "",
    freeDelivery: false,
  });

  // State for sorting
  const [sortKey, setSortKey] = useState("Default");

  console.log("sortKey value: ", sortKey);

  // Function to handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Filter and sort the clubs based on the state
  const filteredClubs = clubData
    .filter((club) => {
      // Filter by location (city)
      const locationMatch =
        filters.location === "" ||
        club.city.toLowerCase().includes(filters.location.toLowerCase());

      // Filter by category (sport)
      const categoryMatch =
        filters.category === "" ||
        club.sport.toLowerCase().includes(filters.category.toLowerCase());

      // Filter by free delivery
      const deliveryMatch =
        !filters.freeDelivery || (filters.freeDelivery && club.freeDelivery);

      // Add more filter logic here for value and distance if needed
      return locationMatch && categoryMatch && deliveryMatch;
    })
    .sort((a, b) => {
      // Sort logic
      if (sortKey === "Alphabetical") {
        return a.clubName.localeCompare(b.clubName);
      }
      if (sortKey === "Opportunity Value") {
        // Simple string comparison for now
        return a.spending.localeCompare(b.spending);
      }
      return 0; // Default case
    });

  return (
    <div className="flex flex-col space-y-6 flex-1">
      {/* Page Title and Description */}
      <div className="p-2">
        <h1 className="text-2xl font-bold">Club Details</h1>
        <p className="text-gray-600 mt-2">
          Connect with clubs in your service area and explore tailored
          opportunities based on your business category.
        </p>
      </div>

      {/* Filter Section */}
      <div className="p-2 ">
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <FilterInput
              title="Location"
              placeholder="Select a location"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            />
            <FilterInput
              title="Category"
              placeholder="Select a category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            />
            <FilterInput
              title="Opportunity Value"
              placeholder="Select a value range"
              name="value"
              value={filters.value}
              onChange={handleFilterChange}
            />
            <FilterInput
              title="Distance (km)"
              placeholder="Select distance"
              name="distance"
              value={filters.distance}
              onChange={handleFilterChange}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-sm font-semibold text-gray-700">
              Sort By
            </label>
            <Select
              name="sortKey"
              onValueChange={(value) => {
                setSortKey(value);
              }}
              value={sortKey}
              defaultValue="Default"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                  <SelectItem value="opportunity value">
                    Opportunity Value
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="checkbox"
            id="freeDelivery"
            name="freeDelivery"
            checked={filters.freeDelivery}
            onChange={handleFilterChange}
            className="rounded text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="freeDelivery" className="text-sm text-gray-700">
            Free Delivery
          </label>
        </div>
      </div>

      {/* Club Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club, index) => (
            <ClubCard
              key={index}
              clubName={club.clubName}
              trending={club.trending}
              sponsorships={club.sponsorships}
              players={club.players}
              location={`${club.sport} • ${club.city}`}
              spending={club.spending}
              listedDate={club.listedDate}
              onViewOpportunities={() => onViewOpportunities(club)}
            />
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-10 text-gray-500">
            No clubs match your criteria. Please adjust your filters.
          </div>
        )}
      </div>
    </div>
  );
};

// New component for the opportunity slider

export default BusinessDashboard;
