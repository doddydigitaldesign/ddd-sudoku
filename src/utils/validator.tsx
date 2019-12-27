import { useHouses } from "../components/houseElementsSelector";

export const useValidator = (state: { [key: number]: number }) => {
  const values = Object.values(state);
  const houses = useHouses(state);
  const valid = [];
  for (let i = 0; i < 9; i++) {
    const rows = values.filter(
      (val, index) =>
        (i > 0 && index <= i * 9 && index >= (i - 1) * 9) ||
        (i === 0 && index in [0, 1, 2, 3, 4, 5, 6, 7, 8])
    );
    // console.log(`Row(${i})`, rows);
    const cols = values.filter((val, index) => index % 9 === i);
    // console.log(`Col(${i})`, cols);
    const sumCheck =
      rows.reduce((prev, curr) => prev + curr) +
      cols.reduce((prev, curr) => prev + curr);
    if (rows.includes(0)) {
      valid.push(false);
    } else if (sumCheck / 2 !== 45) {
      valid.push(false);
    } else if (sumCheck / 2 === 45) {
      valid.push(true);
    }
  }
  const validHouses = [];
  for (const house of Object.values(houses)) {
    const houseValues = [];
    for (const key in house) {
      houseValues.push(house[key]);
    }
    const sum = houseValues.reduce((prev: number, curr: number) => prev + curr);
    console.log("house validation sum:", sum);
    if (sum === 45) {
      valid.push(true);
      validHouses.push(Object.keys(house));
    }
    if (sum !== 45) {
      valid.push(false);
    }
  }
  return { valid, validHouses };
};
