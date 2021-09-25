import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import AddPortfolio from "../AddPortfolio/AddPortfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Portfolio /> } />
          <Route path="/addPortfolio" element={ <AddPortfolio /> } />
          <Route path="/portfolio" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
