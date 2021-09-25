import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" />
          <Route path="/addPortfolio" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
