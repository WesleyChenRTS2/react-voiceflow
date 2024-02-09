import React, { useEffect } from "react";

const ChatbotLoader = () => {
  useEffect(() => {
    // Creating a script element to load the Botpress chat widget
    const script = document.createElement("script");
    // script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.async = true; // Load script asynchronously
    document.body.appendChild(script); // Append the script to the body

    // Initialize the chatbot once the script is loaded
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "65c28643f8f741f729ac81e7" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
  }, []);

  return null; // This component does not render anything
};

export default ChatbotLoader;
