import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Smile,
  Paperclip,
  Image,
  Send,
  X,
} from "lucide-react";

const Chatbox = () => {
  // A mock API data structure to simulate fetching different chat conversations
  const mockApiData = {
    chats: [
      {
        id: 1,
        name: "Butcher / Fresh Meat & Eggs Supplier",
        profileImg: "https://placehold.co/64x64/E0B0FF/3A014E?text=BP",
        status: "Online",
        messages: [
          { id: 1, sender: "other", text: "Hello", time: "6:03 PM" },
          { id: 2, sender: "me", text: "Hi there!", time: "6:04 PM" },
          {
            id: 3,
            sender: "other",
            text: "I would like to place an order for some meat and eggs. Are you open for orders?",
            time: "6:05 PM",
          },
        ],
        details: {
          type: "Business",
          specialty: "Beef Ribs",
          offers: "Offers Sponsorships",
          location: "Melbourne • 1.2 Km away",
          orders: "32 Orders Completed",
          listed: "Listed 6 Jan 2024",
          offersTitle: "Buy High Quality Fresh Meat and Eggs at a Great Price.",
          annualEstimatedCost: "$670",
          youSave: "$130",
        },
      },
      {
        id: 2,
        name: "Bakery / Pastries",
        profileImg: "https://placehold.co/64x64/C0D9B0/213D1A?text=BP",
        status: "Online",
        messages: [
          {
            id: 1,
            sender: "me",
            text: "Hello, are you available for bulk pastry orders this week?",
            time: "2:15 PM",
          },
          {
            id: 2,
            sender: "other",
            text: "Yes, we are! What kind of pastries are you looking for?",
            time: "2:17 PM",
          },
        ],
        details: {
          type: "Business",
          specialty: "Croissants",
          offers: "Wholesale Discount",
          location: "Sydney • 5.0 Km away",
          orders: "50 Orders Completed",
          listed: "Listed 1 Feb 2024",
          offersTitle: "Fresh baked pastries and custom cakes.",
          annualEstimatedCost: "$500",
          youSave: "$50",
        },
      },
      {
        id: 3,
        name: "Bottled Water Supplier",
        profileImg: "https://placehold.co/64x64/A5C9E0/1B3B5B?text=BP",
        status: "Offline",
        messages: [
          {
            id: 1,
            sender: "me",
            text: "Hi, I need a large delivery of bottled water for an event. Can you help?",
            time: "11:00 AM",
          },
        ],
        details: {
          type: "Business",
          specialty: "Bulk Water",
          offers: "Delivery Service",
          location: "Brisbane • 8.1 Km away",
          orders: "100+ Orders Completed",
          listed: "Listed 10 Mar 2023",
          offersTitle: "Affordable bottled water for events and sports clubs.",
          annualEstimatedCost: "$300",
          youSave: "$25",
        },
      },
    ],
  };

  const [activeChatId, setActiveChatId] = useState(1);
  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect hook to simulate fetching data when activeChatId changes
  useEffect(() => {
    setLoading(true);
    // Simulating a network delay
    setTimeout(() => {
      const selectedChat = mockApiData.chats.find(
        (chat) => chat.id === activeChatId
      );
      setActiveChat(selectedChat);
      setLoading(false);
    }, 500);
  }, [activeChatId]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // In a real application, this would be a POST request to the server:
    // fetch('/api/messages', { method: 'POST', body: JSON.stringify({ message: newMessage, chatId: activeChatId }) });

    const newMsg = {
      id: activeChat.messages.length + 1,
      sender: "me",
      text: newMessage,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setActiveChat((prevChat) => ({
      ...prevChat,
      messages: [...prevChat.messages, newMsg],
    }));

    setNewMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-100 font-sans">
      <div className="flex h-screen w-full bg-white  overflow-hidden">
        {/* Left Panel - Messages List */}
        <div className="w-1/4 bg-white p-6 border-r border-gray-200 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Messages</h2>
          <div className="flex space-x-2 mb-4">
            <button className="px-3 py-1 rounded-full bg-green-200 text-green-500 text-sm">
              All
            </button>
            <button className="px-3 py-1 rounded-full text-gray-500 text-sm hover:bg-gray-100">
              Unselected
            </button>
            <button className="px-3 py-1 rounded-full text-gray-500 text-sm hover:bg-gray-100">
              Starred
            </button>
            <button className="px-3 py-1 rounded-full text-gray-500 text-sm hover:bg-gray-100">
              Archived
            </button>
          </div>
          <div className="relative mb-4">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {mockApiData.chats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                  activeChat.id === chat.id ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveChatId(chat.id)}
              >
                <img
                  src={chat.profileImg}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">
                      {chat.name}
                    </span>
                    <span className="text-xs text-gray-400">4:30 PM</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {chat.messages[chat.messages.length - 1].text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Panel - Chat Window */}

        {loading || !activeChat ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-xl text-gray-700">Loading chat...</div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col p-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src={activeChat.profileImg}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{activeChat.name}</h3>
                  <p className="text-sm text-green-500">{activeChat.status}</p>
                </div>
              </div>
              <div className="flex space-x-2 text-gray-400">
                <ChevronDown size={24} className="rotate-90" />
                <ChevronDown size={24} className="rotate-90" />
                <X size={24} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              <div className="relative text-center my-4">
                <span className="bg-white px-4 text-gray-400 text-sm">Sat</span>
              </div>

              {activeChat.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender !== "me" && (
                    <img
                      src="/src/assets/profile/ROBBIE.png"
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2 self-end"
                    />
                  )}
                  <div
                    className={`max-w-md p-3 rounded-2xl ${
                      msg.sender === "me"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 text-right">{msg.time}</p>
                  </div>
                  {msg.sender === "me" && (
                    <img
                      src="/src/assets/profile/ROBBIE.png"
                      alt="Profile"
                      className="w-8 h-8 rounded-full ml-2 self-end"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-2 text-gray-500">
                <button>
                  <Smile size={24} />
                </button>
                <button>
                  <Paperclip size={24} />
                </button>
                <button>
                  <Image size={24} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Send a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors duration-200"
              >
                <Send size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Right Panel - User/Business Profile */}
        <div className="w-1/4 bg-white p-6 border-l border-gray-200 flex flex-col">
          <div className="flex justify-end mb-4">
            <button className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={activeChat.profileImg}
              alt="Profile"
              className="w-20 h-20 rounded-full mb-3"
            />
            <h3 className="text-lg font-bold">{activeChat.name}</h3>
            <p className="text-sm text-green-500">{activeChat.status}</p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500 space-y-1">
            <p>
              Specialty:{" "}
              <span className="font-semibold text-gray-800">
                {activeChat.details.specialty}
              </span>
            </p>
            <p>{activeChat.details.offers}</p>
            <p>{activeChat.details.location}</p>
            <p>
              {activeChat.details.orders} • {activeChat.details.listed}
            </p>
          </div>

          <div className="my-6 border-t border-gray-200 pt-6">
            <h4 className="font-semibold mb-3">Active Offers</h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">
                {activeChat.details.offersTitle}
              </p>
              <div className="text-xs text-gray-600 mb-1">
                <span>Annual Estimated Cost: </span>
                <span className="font-semibold text-gray-800">
                  {activeChat.details.annualEstimatedCost}
                </span>
              </div>
              <div className="text-xs text-green-600 font-semibold mb-2">
                <span>You Save: </span>
                <span>{activeChat.details.youSave}</span>
              </div>
              <a href="#" className="text-blue-500 text-sm font-medium">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
