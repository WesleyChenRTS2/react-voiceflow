"use client";
import React, { useEffect } from "react";

import PropertyPayload from "./PropertyDetails";

const ChatbotLoader = () => {
  // Moved sendPayload outside of useEffect to keep it stable
  const sendPayload = () => {
    window.voiceflow.chat.interact({
      type: "intent",
      payload: PropertyPayload,
    });
  };

  useEffect(() => {
    const scriptId = "voiceflow-chatbot-widget";
    let scriptLoaded = false; // Flag to indicate if the script was successfully loaded

    const handleEvent = (event: any) => {
      if (event.data === `{"type":"voiceflow:open"}`) {
        setTimeout(() => {
          sendPayload();
          // Removing the event listener here might not be necessary if you're doing cleanup on unmount
          window.removeEventListener("message", handleEvent, false);
        }, 500);
      }
      // if new page url, send payload
    };

    const initializeChatbot = () => {
      if (document.getElementById(scriptId)) return;

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        scriptLoaded = true; // Set flag to true when script is loaded
        window.voiceflow.chat.load({
          verify: { projectID: "65c28643f8f741f729ac81e7" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });

        window.addEventListener("message", handleEvent, false);
      };
    };

    initializeChatbot();

    return () => {
      window.removeEventListener("message", handleEvent);
      if (scriptLoaded) {
        // Remove the script if it was added
        const script = document.getElementById(scriptId);
        if (script) {
          document.body.removeChild(script);
        }
      }
    };
  }, []);

  return null;
};

export default ChatbotLoader;
