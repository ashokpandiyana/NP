import React from "react";
import Container1fr from "./components/Container1fr";
import Container2fr from "./components/Container2fr";
const App = () => {
  return (
    <main>
      <div className="container-1fr">
        <Container1fr />
      </div>
      <div className="container-2fr">
        <Container2fr />
      </div>
    </main>
  );
};

export default App;
