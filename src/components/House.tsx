import React from "react";
import BoardCell from "./BoardCell";

interface Props {}

const House: React.FC<Props> = () => {
  return (
    <>
      <BoardCell key="cell-1" />
      <BoardCell key="cell-2" />
      <BoardCell key="cell-3" />
      <BoardCell key="cell-4" />
      <BoardCell key="cell-5" />
      <BoardCell key="cell-6" />
      <BoardCell key="cell-7" />
      <BoardCell key="cell-8" />
      <BoardCell key="cell-9" />
    </>
  );
};

export default House;
