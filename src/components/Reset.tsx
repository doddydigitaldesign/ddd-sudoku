import React from "react";

interface Props {
  dispatch: any;
}

const Reset: React.FC<Props> = props => {
  const { dispatch } = props;
  const resetAction = {
    type: "RESET_BOARD"
  };
  const onClickReset = () => {
    dispatch(resetAction);
  };
  return (
    <button id="reset" className="btn" onClick={onClickReset}>
      Reset board
    </button>
  );
};

export default Reset;
