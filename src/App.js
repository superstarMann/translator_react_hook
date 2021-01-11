import React from "react";
import Screen from "./Screen";
import Lang from "./context";
import translations from "./translation";
function App() {
  return (
    <Lang defaultLang = "en" translations={translations}>
    <Screen/>
    </Lang>
  );
}

export default App;
