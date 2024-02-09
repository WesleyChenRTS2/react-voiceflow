import React, { useState } from "react";
import { EventType } from "./EventType"; // Import the enum

interface UserInfoFormProps {
  sendBotInfo: (
    name: string,
    email: string,
    propertyId: string,
    eventType: EventType
  ) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ sendBotInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [eventType, setEventType] = useState<EventType>(EventType.LandingPage);

  return (
    <div className="flex flex-col space-y-4 my-4">
      {/* <div className="flex flex-row space-x-4">
        <label className="py-2 px-4 ">Is Logged In</label>
        <input
          type="checkbox"
          checked={!!name && !!email}
          disabled={!name || !email}
          className="py-2 px-4 rounded border"
        />
      </div> */}
      {/* <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="py-2 px-4 rounded border"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="py-2 px-4 rounded border"
      /> */}

      <h4>Current page</h4>
      <select
        value={eventType}
        onChange={(e) => setEventType(e.target.value as EventType)}
        className="py-2 px-4 rounded border"
      >
        {Object.values(EventType).map((eventType) => (
          <option key={eventType} value={eventType}>
            {eventType}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Property ID"
        value={propertyId}
        onChange={(e) => setPropertyId(e.target.value)}
        className="py-2 px-4 rounded border"
        // hide if event type is not property details
        style={{
          display: eventType === EventType.PropertyDetails ? "block" : "none",
        }}
      />
      {/* display a toggle that is checked if both the email & name inputs are filled, make this toggle disabled also, give it a label of authentication*/}

      <button
        onClick={() => sendBotInfo(name, email, propertyId, eventType)}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Send data to bot
      </button>
    </div>
  );
};

export default UserInfoForm;
