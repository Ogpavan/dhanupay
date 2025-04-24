import React, { useState } from 'react';

// Mock admin response function (in a real-world scenario, this could be replaced with real-time messaging via WebSockets or an API)
const getAdminResponse = (userMessage) => {
  return `Admin: Received your message - "${userMessage}"`;
};

function Chat() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  // Handle the sending of a message
  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    // Add the user's message to the messages state
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'User', text: userMessage },
    ]);

    // Simulate an admin response (in a real-world scenario, this could be done via an API call)
    const adminMessage = getAdminResponse(userMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'Admin', text: adminMessage },
    ]);

    // Clear the input field
    setUserMessage('');
  };

  return (
    <div className="flex justify-center items-center h-[95vh] bg-gradient-to-r from-[#F6F0F0] to-[#D69ADE] p-1">
      <div className=" w-full max-w-lg p-6 rounded-lg shadow-xl flex flex-col h-[90vh]">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Chat with US</h1>

        {/* Messages container */}
        <div className="flex-grow overflow-y-auto space-y-4 mb-6 px-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'Admin' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs p-4 shadow-md ${
                  message.sender === 'Admin'
                    ? 'bg-gray-200 text-black rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-3xl'
                    : 'bg-indigo-600 text-white rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl'
                }`}
              >
                <p className="font-semibold">{message.sender}</p>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input section */}
        <div className="flex items-center space-x-4 border-t-2 pt-4">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
          <button
            onClick={handleSendMessage}
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
