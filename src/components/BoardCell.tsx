import React from "react";
import Input from "./Input";

interface Props {}

const BoardCell: React.FC<Props> = () => {
  return (
    <div className="App-board-cell">
      <Input dispatch="none" id="test" state={{}} />
    </div>
  );
};

export default BoardCell;
