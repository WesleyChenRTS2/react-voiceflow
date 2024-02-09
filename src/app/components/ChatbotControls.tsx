import React from "react";

interface ChatbotControlsProps {
  showBot: () => void;
  hideBot: () => void;
}

const ChatbotControls: React.FC<ChatbotControlsProps> = ({
  showBot,
  hideBot,
}) => {
  return (
    <div className="flex flex-column">
      <div className="flex flex-row space-x-2">
        <button
          onClick={showBot}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Show Bot
        </button>
        <button
          onClick={hideBot}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Hide Bot
        </button>
      </div>
    </div>
  );
};

export default ChatbotControls;
