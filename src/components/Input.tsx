import React from "react";

interface Props {
  dispatch: any;
  state: any;
  id: string;
}

const Input: React.FC<Props> = props => {
  const { dispatch, state, id } = props;
  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch({
      type: "CHANGE_VALUE",
      payload: {
        [id]: e.target.value ? parseInt(e.target.value) : 0
      }
    });
  };

  return (
    <>
      <label htmlFor={id}>#{parseInt(id) + 1}</label>
      <input
        type="number"
        id={id}
        onChange={onChangeValue}
        value={state !== 0 && state}
        min={1}
        max={9}
        className="input-field validate center-align"
      />
    </>
  );
};

export default Input;
