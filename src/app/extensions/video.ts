import { VideoPayload } from "./types";

const VideoExtension = {
  name: "Video",
  type: "response",
  match: ({ trace }: VideoPayload) => trace.type === "Show_Video",
  render: ({ trace, element }: VideoPayload) => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      trace.payload.src
    );

    iframe.setAttribute("autoplay", "true");
    iframe.setAttribute("controls", "");
    iframe.addEventListener("ended", function () {
      console.log("it ended");
      window.voiceflow.chat.interact({ type: "complete" });
    });
    element.appendChild(iframe);
  },
};

export default VideoExtension;
