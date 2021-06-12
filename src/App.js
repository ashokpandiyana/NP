import React from "react";
import Container1fr from "./components/Container1fr";
const App = () => {
  return (
    <main>
      <div className="container-1fr">
        <Container1fr />
      </div>
      <div className="container-2fr">2fr</div>
    </main>
  );
};

export default App;
