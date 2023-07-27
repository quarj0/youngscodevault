
import "./App.css"; // Create this CSS file for styling
import FixedCard from "./components/FixedCard.js";
import ContentCard from "./components/ContentCard.js";
import IconsCard from "./components/IconsCard.js";

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
