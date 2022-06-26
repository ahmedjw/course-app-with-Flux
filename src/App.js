import React from "react";
import Header from "./components/common/Header";
import RouterWraper from "./Routes/Router";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <RouterWraper />
    </div>
  );
}

export default App;
