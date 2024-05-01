"use client";
import React, { DOMElement, useEffect } from "react";
import { FormExtension } from "../extensions";

import PropertyPayload from "./PropertyDetails";

const stringifyPayload = (payload: any) => {
  const payloadCopy = { ...payload };
  for (const key in payloadCopy) {
    payloadCopy[key] = JSON.stringify(payloadCopy[key]);
  }
  return payloadCopy;
};

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
      console.log(event.data);
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
          verify: { projectID: "65de3c5827d6f489a7a0b7fc" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          autostart: true,
          assistant: {
            extensions: [FormExtension],
            stylesheet: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          },
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
