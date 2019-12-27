const houseElementsSelector = (i: number) => {
  switch (i) {
    case 1:
      return [
        [0, 1, 2],
        [9, 10, 11],
        [18, 19, 20]
      ];
    case 2:
      return [
        [3, 4, 5],
        [12, 13, 14],
        [21, 22, 23]
      ];
    case 3:
      return [
        [6, 7, 8],
        [15, 16, 17],
        [24, 25, 26]
      ];
    case 4:
      return [
        [27, 28, 29],
        [36, 37, 38],
        [45, 46, 47]
      ];
    case 5:
      return [
        [30, 31, 32],
        [39, 40, 41],
        [48, 49, 50]
      ];
    case 6:
      return [
        [33, 34, 35],
        [42, 43, 44],
        [51, 52, 53]
      ];
    case 7:
      return [
        [54, 55, 56],
        [63, 64, 65],
        [72, 73, 74]
      ];
    case 8:
      return [
        [57, 58, 59],
        [66, 67, 68],
        [75, 76, 77]
      ];
    case 9:
      return [
        [60, 61, 62],
        [69, 70, 71],
        [78, 79, 80]
      ];
    default:
      break;
  }
};
export const useHouses = (state: { [key: number]: number }) => {
  const houseCount = 9;
  const obj: {
    [key: number]: any;
  } = {};
  const elementGetter = (arg: number[][] | undefined) => {
    if (arg) {
      const arr = arg.flat();
      const house: {
        [key: number]: number;
      } = {};
      for (let index = 0; index < arr.length; index++) {
        const elementIndex = arr[index];
        const element = state[elementIndex];
        house[elementIndex] = element;
      }
      return house;
    }
  };
  for (let i = 1; i <= houseCount; i++) {
    const houseElement = elementGetter(houseElementsSelector(i));
    obj[i] = houseElement;
  }
  return obj;
};
