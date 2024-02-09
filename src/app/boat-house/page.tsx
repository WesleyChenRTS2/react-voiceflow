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

      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Welcome to our bot site!</h1>
        <p className="mb-4">To begin:</p>
        <ol className="list-decimal space-y-2 pl-5 mb-4">
          <li>Open up the chat conversation window in the bottom right.</li>
          <li>Ask questions!</li>
        </ol>
        <p className="mb-2">Questions you can ask the bot:</p>
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
        <br />
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          For this demo, we've included the JSON of the property down below!
        </p>

        <p>
          If you have an unexpected or negative experience, leave your feedback{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1wEQW6jaXRww33q0BNddRjIcqpMD8tT_OErQz7sSzxow/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            here
          </a>
          !
        </p>
      </div>

      <JsonDisplay data={PropertyPayload} />
    </div>
  );
};

export default BoatHouse;
