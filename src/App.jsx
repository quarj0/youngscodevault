import "./App.css";
import ContentCard from "./components/ContentCard.jsx";
import { lazy, Suspense } from "react";

const Certificates = lazy(() => import("./components/Certificates")); 
const Projects = lazy(() => import("./components/Projects"));

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Certificates />
        <Projects />
      </Suspense>
      <div className="center">
        <ContentCard />
      </div>
    </div>
  );
};

export default App;
