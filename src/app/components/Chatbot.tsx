import React, { useEffect } from "react";

declare global {
  interface Window {
    voiceflow: any; // Declare a new property on the window object for the chatbot
  }
}

const Chatbot = () => {
  return <div className="top-4 left-4 inline-block"></div>;
};

export default Chatbot;
