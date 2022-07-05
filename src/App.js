import './App.css';
import NavigationBar from "./Component/NavigationBar"
import Intro from "./Component/Intro"
import Trending from "./Component/Trending"
import Drama from "./Component/Drama"

import "./Style/landingpage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      
      <div className="Trending">
        <Trending />
      </div>

      <div className="Drama">
        <Drama />
      </div>
    </div>
    
  );
}

export default App;
