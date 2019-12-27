import React from "react";
import Board from "./components/Board";
import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="App-main">
        <Board />
      </div>
    </>
  );
};

export default App;
