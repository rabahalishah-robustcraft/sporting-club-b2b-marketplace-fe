import { useEffect, useRef, useState } from "react";
import { NotificationsDropdown } from "../notification/NotificationsDropdown";
import { Link, useNavigate, useParams } from "react-router-dom";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const params = useParams();

  const path = params["*"];

  const activeTab = path.split("/")[0];

  const data = {
    user: {
      name: "Robbie",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white p-2 shadow-sm flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/logo/SPORTS_CORP_LOGO.webp"
          alt="Sport Corp Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Right-aligned icons and user profile */}
      <div className="flex items-center space-x-2">
        {(activeTab === "club" || activeTab === "business") && (
          <Link
            to={
              activeTab === "club" ? "/club/onboarding" : "/business/onboarding"
            }
          >
            <button className="bg-[#eebf47]  text-black font-normal py-3 px-8 rounded-md hover:bg-yellow-500 transition duration-300 w-full sm:w-auto">
              Your Opportunity
            </button>
          </Link>
        )}
        <button
          onClick={() => navigate("/messages")}
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              fill="#F1F5F9"
            />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#E2E8F0"
            />
            <g clip-path="url(#clip0_8067_3632)">
              <path
                d="M28.6667 15.3335L21.3333 22.6668"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.6667 15.3335L24 28.6668L21.3333 22.6668L15.3333 20.0002L28.6667 15.3335Z"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_8067_3632">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(14 14)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleDropdown}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="#F1F5F9"
              />
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#E2E8F0"
              />
              <path
                d="M26 19.3335C26 18.2726 25.5786 17.2552 24.8284 16.5051C24.0783 15.7549 23.0609 15.3335 22 15.3335C20.9391 15.3335 19.9217 15.7549 19.1716 16.5051C18.4214 17.2552 18 18.2726 18 19.3335C18 24.0002 16 25.3335 16 25.3335H28C28 25.3335 26 24.0002 26 19.3335Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.1533 28C23.0361 28.2021 22.8679 28.3698 22.6655 28.4864C22.4631 28.6029 22.2336 28.6643 22 28.6643C21.7664 28.6643 21.5369 28.6029 21.3345 28.4864C21.1321 28.3698 20.9639 28.2021 20.8467 28"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="absolute top-2 right-2 h-2 w-2 bg-primary rounded-full"></span>
          </button>
          {isDropdownOpen && <NotificationsDropdown />}
        </div>

        <div className="flex items-center space-x-2 mr-4">
          <div className="relative" style={{ zIndex: 20 }}>
            <button
              className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden focus:outline-none"
              onClick={() => setProfileDropdownOpen?.((open: boolean) => !open)}
              type="button"
              id="profile-menu-button"
              aria-haspopup="true"
              aria-expanded={profileDropdownOpen ? "true" : "false"}
            >
              <img src="/src/assets/profile/ROBBIE.png" alt="Sport Corp Logo" />
            </button>
            {profileDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="profile-menu-button"
              >
                <Link
                  to={
                    activeTab === "club"
                      ? "/club/onboarding"
                      : "/business/onboarding"
                  }
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  My Profile
                </Link>
                <Link
                  to={"/"}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold">Robbie</span>
            <span className="text-xs text-gray-500">@robbie_the_explorer</span>
          </div>
        </div>
      </div>
    </header>
  );
};
