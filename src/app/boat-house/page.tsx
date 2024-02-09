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
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-xl font-semibold mb-4">
          Questions You Can Ask the Bot
        </h1>
        <ul className="list-disc space-y-2 pl-5">
          <li className="text-md">Make reservation</li>
          <li className="text-md">Give feedback</li>
          <li className="text-md">Get weather</li>
          <li className="text-md">
            Ask about Twiddy vacation rental FAQ questions, for example:
          </li>
          <ul className="list-disc space-y-1 pl-8">
            <li className="text-md">Cancellation policy</li>
            <li className="text-md">Check-in & checkout time</li>
            <li className="text-md">Things to do in OBX</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default BoatHouse;
