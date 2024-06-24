"use client";
import React, { DOMElement, useEffect } from "react";
import { CalendarExtension, FormExtension } from "../extensions";

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
      const datePickerScript = document.createElement("script");
      datePickerScript.setAttribute('src', "https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.4/dist/js/datepicker-full.min.js")
      
      document.head.appendChild(datePickerScript)
      
      if (document.getElementById(scriptId)) return;

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.async = true;
      
      document.body.appendChild(script);

      script.onload = () => {
        scriptLoaded = true; // Set flag to true when script is loaded 
        window.voiceflow.chat.load({
          verify: { projectID: "65fc3f0268f42ebfd841e8d4" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          autostart: true,
          assistant: {
            extensions: [FormExtension, CalendarExtension],
            stylesheet: "https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.4/dist/css/datepicker.min.css"
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
