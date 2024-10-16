import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { inject } from '@vercel/analytics';
import { SpeedInsights } from "@vercel/speed-insights/next"
 

inject();
// eslint-disable-next-line react-refresh/only-export-components
const InitializeAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
};

const speedInsightsConfig = {
  token: "YOUR_SPEED_INSIGHTS_TOKEN",
  enabled: import.meta.env.MODE === "production",
};

SpeedInsights(speedInsightsConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InitializeAOS />
    <App />
  </React.StrictMode>
);
