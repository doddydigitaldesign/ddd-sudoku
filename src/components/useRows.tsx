export const useRows = (state: { [key: number]: number }) => {
  const arr = Object.keys(state);
  const rowSize = 9;
  const rows: { [key: string]: any } = {};
  for (let index = 1; index <= 9; index++) {
    rows[`${index}`] = arr.filter(
      (el, i) => i >= rowSize * (index - 1) && i < rowSize * index
    );
  }
  return rows;
};
