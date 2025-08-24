import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const BusinessDetailContent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a GET API call for the bakery data
    const fetchUserData = () => {
      const mockData = {
        name: "The Daily Grind Bakery",
        profileImage: "/src/assets/profile/ROBBIE.png",
        type: "Business",
        industry: "Bakery / Pastries",
        location: "Leeds, United Kingdom",
        commission: "15 %",
        companyName: "The Daily Grind Bakery",
        country: "United Kingdom",
        abn: "N/A",
        city: "Leeds",
        address: "25 Briggate, Leeds, UK",
        postCode: "LS1 4AP",
        businessIndustry: "Custom Cakes, Catering, Bulk Pastries",
        contactName: "Sarah Johnson",
        mobileNumber: "07700 900351",
        email: "sarah.johnson@dailygrind.co.uk",
        serviceArea: "Leeds and surrounding areas within a 15-mile radius.",
      };

      // Simulate network delay
      setTimeout(() => {
        setUserData(mockData);
        setLoading(false);
      }, 1500);
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs once

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

  return (
    <div className="font-sans">
      <div className="p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Users &gt; The Daily Grind Bakery
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
                {userData.type} • {userData.industry}
              </p>
              <p className="text-gray-500 text-sm">{userData.location}</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:text-right">
            <p className="text-gray-500 text-sm">Commission Structure</p>
            <p className="text-2xl font-bold text-gray-900">
              {userData.commission}
            </p>
          </div>
        </div>

        {/* Business Information Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Business Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Company Name */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Company Name
              </p>
              <p className="text-gray-800">{userData.companyName}</p>
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
            {/* Industry */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Industry</p>
              <p className="text-gray-800">{userData.businessIndustry}</p>
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

        {/* Service Areas Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Service Areas</h2>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Service Area
            </p>
            <p className="text-gray-800">{userData.serviceArea}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailContent;
