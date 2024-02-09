import React from "react";
import ChatbotLoader from "../components/ChatbotLoader";
import JsonDisplay from "../components/JsonDisplay";
import PropertyPayload from "../components/PropertyDetails";

const BoatHouse = () => {
  return (
    <div
      className="m-4 shadow-lg  bg-white rounded-lg
    "
    >
      <ChatbotLoader />
      <JsonDisplay data={PropertyPayload} />
    </div>
  );
};

export default BoatHouse;
