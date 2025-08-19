import { useEffect, useRef } from "react";

export const OpportunitySlider = ({
  isOpen,
  onClose,
  club,
  setIsSliderDetailOpen,
}) => {
  // Use a ref to capture the slider element for focus management
  const sliderRef = useRef(null);

  // Focus the slider when it opens for accessibility
  useEffect(() => {
    if (isOpen) {
      sliderRef.current?.focus();
    }
  }, [isOpen]);

  // Handle outside clicks to close the slider
  const handleOutsideClick = (event) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Set up event listener for outside clicks
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Don't render if the slider is not open or no club is selected
  if (!isOpen || !club) {
    return null;
  }

  return (
    <div
      ref={sliderRef}
      className={`fixed m-2 top-2 rounded-3xl right-2 h-[97%] w-1/4 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 p-6 md:p-8 flex flex-col items-center justify-center space-y-4 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      tabIndex="-1" // Make it focusable
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x text-gray-600"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      {/* Profile image container */}
      <div className="rounded-full overflow- shadow-lg">
        <img
          src="/src/assets/profile/ROBBIE.png"
          alt="Sport Corp Logo"
          className="h-24 w-auto"
        />
      </div>

      <div className="text-center mt-4">
        <h3 className="text-3xl font-bold">{club.clubName}</h3>
        <p className="text-sm text-gray-500">Online</p>
      </div>

      {/* Info badges */}
      <div className="flex flex-wrap justify-center m2-4">
        {club.sponsorships.map((sponsorship, index) => (
          <span
            key={index}
            className="flex items-center space-x-1 text-xs  px-3 py-1 rounded-full font-semibold"
          >
            <img
              src="/src/assets/badges/SPONSORSHIP.png"
              alt="Sport Corp Logo"
              className="h-7"
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
          <span>{club?.players}</span>
        </span>
      </div>
      <div className="flex flex-wrap text-black text-sm space-x-2">
        <div className="flex items-center space-x-2">
          <span>{club?.spending}</span>
        </div>
        <div className="flex items-center space-x-2 text-black">
          <span>&#8226;{` ${club?.followers} Followers`}</span>
        </div>
      </div>

      <button
        onClick={() => setIsSliderDetailOpen(true)}
        className="underline text-primary"
      >
        View Detailed Spendings
      </button>

      <hr className="w-full border-primary border-0.5" />

      <h4 className="font-semibold text-lg ">Active Offers</h4>

      {/* Placeholder for no active offers */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/src/assets/misc/BOX.png"
          alt="Sport Corp Logo"
          className=""
        />

        <p className="text-gray-600 font-semibold text-center">
          It looks like you haven't received an offer <br /> to this supplier
          yet.
        </p>
      </div>

      <button className="w-full flex items-center justify-center space-x-2 bg-primary text-white p-3 rounded-lg font-semibold mt-auto hover:bg-primary/80 transition-colors">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8278_327)">
            <path
              d="M7.83337 11.3332L9.16671 12.6665C9.29803 12.7978 9.45393 12.902 9.62551 12.9731C9.79709 13.0441 9.98099 13.0807 10.1667 13.0807C10.3524 13.0807 10.5363 13.0441 10.7079 12.9731C10.8795 12.902 11.0354 12.7978 11.1667 12.6665C11.298 12.5352 11.4022 12.3793 11.4733 12.2077C11.5443 12.0361 11.5809 11.8522 11.5809 11.6665C11.5809 11.4808 11.5443 11.2969 11.4733 11.1253C11.4022 10.9537 11.298 10.7978 11.1667 10.6665M9.83337 9.33318L11.5 10.9998C11.7653 11.2651 12.125 11.4141 12.5 11.4141C12.8751 11.4141 13.2348 11.2651 13.5 10.9998C13.7653 10.7346 13.9143 10.3749 13.9143 9.99985C13.9143 9.62477 13.7653 9.26506 13.5 8.99985L10.9134 6.41318C10.5384 6.03865 10.03 5.82827 9.50004 5.82827C8.97004 5.82827 8.46171 6.03865 8.08671 6.41318L7.50004 6.99985C7.23482 7.26506 6.87511 7.41406 6.50004 7.41406C6.12497 7.41406 5.76526 7.26506 5.50004 6.99985C5.23482 6.73463 5.08583 6.37492 5.08583 5.99985C5.08583 5.62477 5.23482 5.26506 5.50004 4.99985L7.37337 3.12651C7.98154 2.51994 8.77464 2.13355 9.62714 2.0285C10.4796 1.92344 11.3428 2.10573 12.08 2.54651L12.3934 2.73318C12.6772 2.90451 13.0147 2.96393 13.34 2.89985L14.5 2.66651M14.5 1.99985L15.1667 9.33318H13.8334M2.50004 1.99985L1.83337 9.33318L6.16671 13.6665C6.43192 13.9317 6.79163 14.0807 7.16671 14.0807C7.54178 14.0807 7.90149 13.9317 8.16671 13.6665C8.43192 13.4013 8.58092 13.0416 8.58092 12.6665C8.58092 12.2914 8.43192 11.9317 8.16671 11.6665M2.50004 2.66651H7.83337"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_8278_327">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <span>Make an Offer</span>
      </button>
    </div>
  );
};
