import React, { useEffect, useReducer } from "react";
import { useValidator } from "../utils/validator";
import Input from "./Input";
import { initialState, reducer } from "./InputReducer";
import Reset from "./Reset";
import { useRows } from "./useRows";

interface Props {
  mode?: string;
}

const Board: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { valid, validHouses } = useValidator(state);
  const isValid = !valid.includes(false);

  const rows: { [key: string]: any } = useRows(state);
  const renderRows = Object.keys(rows).map(row => {
    const element = rows[row];
    return (
      <div key={`${row}`} className="row">
        {element.map((val: any) => (
          <div
            key={`input-${val}`}
            id={`input-${val}`}
            className="col s1 card-panel hoverable"
          >
            <Input id={`${val}`} dispatch={dispatch} state={state[`${val}`]} />
          </div>
        ))}
      </div>
    );
  });

  // Selects all input wrappers
  const inputWrappers = document.querySelectorAll(
    "div.col.s1.card-panel.hoverable"
  );
  const validHouseIds = validHouses.flat();

  useEffect(() => {
    inputWrappers.forEach(wrapperElement => {
      if (validHouseIds.includes(wrapperElement.id.split("input-")[1])) {
        wrapperElement.classList.add("teal");
      } else {
        wrapperElement.classList.remove("teal");
      }
    });
  }, [inputWrappers, validHouseIds, validHouses]);

  if (isValid) {
    alert("You beat the game");
    inputWrappers.forEach(wrapperElement => {
      wrapperElement.classList.add("teal");
    });
  }

  return (
    <div className="container">
      <div className="row card-panel">
        <div className="col sm-6">
          <span className="blue-text text-darken-2">
            {isValid ? "Solved" : "Not solved"}
          </span>
        </div>
        <div className="col sm-6">
          <Reset dispatch={dispatch} />
        </div>
      </div>

      <form>{renderRows}</form>
    </div>
  );
};

export default Board;
