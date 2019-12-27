export const useRows = (state: { [key: number]: number }) => {
  const arr = Object.keys(state);
  const rowSize = 9;
  const row1 = arr.filter((el, i) => i >= 0 && i < rowSize * 1);
  const row2 = arr.filter((el, i) => i >= rowSize * 1 && i < rowSize * 2);
  const row3 = arr.filter((el, i) => i >= rowSize * 2 && i < rowSize * 3);
  const row4 = arr.filter((el, i) => i >= rowSize * 3 && i < rowSize * 4);
  const row5 = arr.filter((el, i) => i >= rowSize * 4 && i < rowSize * 5);
  const row6 = arr.filter((el, i) => i >= rowSize * 5 && i < rowSize * 6);
  const row7 = arr.filter((el, i) => i >= rowSize * 6 && i < rowSize * 7);
  const row8 = arr.filter((el, i) => i >= rowSize * 7 && i < rowSize * 8);
  const row9 = arr.filter((el, i) => i >= rowSize * 8 && i < rowSize * 9);
  return { row1, row2, row3, row4, row5, row6, row7, row8, row9 };
};
