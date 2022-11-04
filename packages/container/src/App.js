import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <hr />
      <MarketingApp />
    </div>
  </BrowserRouter>
);

export default App;
