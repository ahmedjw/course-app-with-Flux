import React from "react";
import Header from "./components/common/Header";
import RouterWraper from "./Routes/Router";
import { getCourseBySlug } from "./api/courseApi";

function App() {
  const a = getCourseBySlug("react-big-picture");
  console.log(a);
  return (
    <div className="container-fluid">
      <Header />
      <RouterWraper />
    </div>
  );
}

export default App;
