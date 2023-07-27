import "./App.css"; 
import FixedCard from "./components/FixedCard.jsx";
import ContentCard from "./components/ContentCard.jsx";
import IconsCard from "./components/IconsCard.jsx";

const App = () => {
  return (
    <div className="app">
      <div className="left">
        <FixedCard />
      </div>
      <div className="right">
        <ContentCard title="Specialty" content="Your specialty goes here" />
        <ContentCard title="About" content="Your about information goes here" />
        {/* Add more content cards as needed */}
      </div>
      <div className="icons">
        <IconsCard />
      </div>
    </div>
  );
};

export default App;
