export const ClubCard = ({
  clubName,
  trending,
  sponsorships,
  players,
  location,
  spending,
  listedDate,
  onViewOpportunities,
}) => {
  return (
    <div className="bg-slate-50 p-6 rounded-md shadow-md flex flex-col space-y-2 relative">
      {trending && (
        <div className="absolute top-0 right-0 mr-2">
          <img
            src="/src/assets/badges/TRENDING.png"
            alt="Sport Corp Logo"
            className="h-8"
          />
        </div>
      )}
      <h2 className="text-lg font-bold">{clubName}</h2>
      <div className="flex items-center space-x-2 flex-wrap">
        {sponsorships.map((sponsor, index) => (
          <span
            key={index}
            className="flex items-center space-x-1 text-xs  px-2 py-1 rounded-full"
          >
            <img
              src="/src/assets/badges/SPONSORSHIP.png"
              alt="Sport Corp Logo"
              className="h-6"
            />
          </span>
        ))}
        <span className="flex items-center space-x-1 text-xs text-black bg-slate-200 px-2 py-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>{players}</span>
        </span>
      </div>
      <div className="flex flex-col text-sm space-y-1 text-black">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin "
          >
            <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0Z" />
            <circle cx="12" cy="8" r="2" />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex flex-row space-x-2 text-black">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-banknote "
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
              <circle cx="12" cy="12" r="3" />
              <path d="M6 12h.01" />
              <path d="M18 12h.01" />
            </svg>
            <span>{spending}</span>
          </div>
          <div className="flex items-center space-x-2 text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-plus"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M12 14v6" />
              <path d="M9 17h6" />
            </svg>
            <span>{listedDate}</span>
          </div>
        </div>
      </div>
      <button
        onClick={onViewOpportunities}
        className="flex items-center justify-center space-x-2 text-white bg-primary rounded-md p-3 transition-colors hover:bg-primary/80 w-1/2 mt-2"
      >
        <span className="font-normal text-sm">View Opportunities</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
