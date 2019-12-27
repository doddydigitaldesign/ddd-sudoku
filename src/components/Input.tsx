import React, { useLayoutEffect, useState } from "react";

interface Props {
  dispatch: any;
  state: any;
  id: string;
}

const Input: React.FC<Props> = props => {
  const { dispatch, state, id } = props;
  const [valid, setValid] = useState<boolean>(false);
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: {
        [id]: e.target.value ? parseInt(e.target.value) : 0
      }
    });
  };

  useLayoutEffect(() => {
    if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(state)) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [state]);
  const element = document.getElementById(id);
  if (valid === false) {
    element?.classList.add("invalid");
  }
  if (valid === true) {
    element?.classList.remove("invalid");
  }
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        type="number"
        id={id}
        onChange={onChangeValue}
        // formNoValidate
        value={state}
        min={1}
        max={9}
        className="input-field validate card-panel hoverable"
      />
    </>
  );
};

export default Input;
