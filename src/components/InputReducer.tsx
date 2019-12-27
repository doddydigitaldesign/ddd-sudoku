import React from "react";
interface Action {
  type: string;
  payload?: {
    [key: string]: any;
  };
}
interface State {
  [key: number]: number;
}

const validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const initialStateFactory: (n: number) => State = (n: number) => {
  const initialState: State = {};
  for (let i = 0; i < n; i++) {
    const random = Math.random();
    if (random <= 0.1) {
      initialState[i] =
        validNumbers[Math.floor(Math.random() * validNumbers.length)];
    } else {
      initialState[i] = 0;
    }
  }

  return initialState;
};

export const initialState = initialStateFactory(81);

export const reducer: React.Reducer<any, Action> = (
  state: any = initialState,
  action: Action
) => {
  // console.log("Action:", action);
  // console.log("State:", state);
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        ...action.payload
      };
    case "RESET_BOARD":
      return initialState;
    default:
      return state;
  }
};
