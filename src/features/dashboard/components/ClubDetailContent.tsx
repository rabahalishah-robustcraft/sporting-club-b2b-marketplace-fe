import React, { useState, useEffect } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const ClubDetailContent = ({ item }) => {
  console.log("item: ", item);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a GET API call
    const fetchUserData = () => {
      // In a real application, you would use a fetch or axios call here
      // e.g., fetch('/api/user/profile')
      const mockData = {
        name: "The Thunderbolts Athletic Club",
        profileImage: "/src/assets/profile/ROBBIE.png",
        type: "Sporting Club",
        sport: "Soccer",
        location: "Leeds, United Kingdom",
        annualSpend: "$45,678",
        clubName: "The Thunderbolts Athletic Club",
        country: "United Kingdom",
        abn: "N/A",
        city: "Leeds",
        address: "Elland Road, Leeds, UK",
        postCode: "LS1 4AP",
        numberOfPlayers: "250",
        registeredAssociation: "The FA (Football Association)",
        contactName: "David Hughes",
        mobileNumber: "07700 900350",
        email: "david.hughes@thunderboltsac.co.uk",
        socials: {
          username: "@ThunderboltsAC",
          followers: "4,500",
        },
      };

      // Simulate network delay
      setTimeout(() => {
        setUserData(mockData);
        setLoading(false);
      }, 1500);
    };

    fetchUserData();
  }, []); // The empty dependency array ensures this effect runs only once

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-700">Error fetching data.</div>
      </div>
    );
  }

  const title = "User Management";

  return (
    <div className="font-sans">
      <SiteHeader title={title} />
      <div className="p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Users &gt; The Thunderbolts Athletic Club
        </div>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 mb-6">
          <div className="flex items-start sm:items-center space-x-4">
            <img
              src={userData.profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {userData.name}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {userData.type} • {userData.sport}
              </p>
              <p className="text-gray-500 text-sm">{userData.location}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:text-right">
            <p className="text-gray-500 text-sm">Annual Spend</p>
            <p className="text-2xl font-bold text-gray-900">
              {userData.annualSpend}
            </p>
          </div>
        </div>

        {/* Club Information Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Club Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Club Name */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Club Name *
              </p>
              <p className="text-gray-800">{userData.clubName}</p>
            </div>
            {/* ABN */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">ABN</p>
              <p className="text-gray-800">{userData.abn}</p>
            </div>
            {/* Country */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Country</p>
              <p className="text-gray-800">{userData.country}</p>
            </div>
            {/* City */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">City</p>
              <p className="text-gray-800">{userData.city}</p>
            </div>
            {/* Address */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
              <p className="text-gray-800">{userData.address}</p>
            </div>
            {/* Post Code */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Post Code
              </p>
              <p className="text-gray-800">{userData.postCode}</p>
            </div>
            {/* Sport */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Sport</p>
              <p className="text-gray-800">{userData.sport}</p>
            </div>
            {/* Number of Players */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Number of Players
              </p>
              <p className="text-gray-800">{userData.numberOfPlayers}</p>
            </div>
            {/* Registered Association */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Registered Association
              </p>
              <p className="text-gray-800">{userData.registeredAssociation}</p>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contact Name */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Contact Name
              </p>
              <p className="text-gray-800">{userData.contactName}</p>
            </div>
            {/* Mobile Number */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Mobile Number
              </p>
              <p className="text-gray-800 flex items-center">
                <Phone size={16} className="text-gray-400 mr-2" />
                {userData.mobileNumber}
              </p>
            </div>
            {/* Email */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
              <p className="text-gray-800 flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                {userData.email}
              </p>
            </div>
          </div>
        </div>

        {/* Socials Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Socials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Username</p>
              <p className="text-gray-800 flex items-center">
                <Globe size={16} className="text-gray-400 mr-2" />
                {userData.socials.username}
              </p>
            </div>
            {/* Number of Followers */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Number of Followers
              </p>
              <p className="text-gray-800">{userData.socials.followers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailContent;
