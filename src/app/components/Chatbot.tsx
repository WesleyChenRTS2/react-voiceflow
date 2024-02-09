import React, { useEffect } from "react";
import ChatbotLoader from "./ChatbotLoader";
import ChatbotControls from "./ChatbotControls";
import UserInfoForm from "./UserInfoForm";
import { EventType } from "./EventType"; // Import the enum
import JsonDisplay from "./JsonDisplay";
import PropertyPayload from "./PropertyDetails";
import Navbar from "./Navbar";

declare global {
  interface Window {
    voiceflow: any; // Declare a new property on the window object for the chatbot
  }
}

const Chatbot = () => {
  return <div className="top-4 left-4 inline-block"></div>;
};

export default Chatbot;
