import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InitializeAOS />
    <App />
  </React.StrictMode>
);
