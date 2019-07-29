import React from "react";
import { mapContextToProps } from "react-context-toolbox";

const InputName = props => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Name</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        value={props.name}
        onChange={e => props.onChangeName(e.target.value)}
      />
    </div>
  );
};

export default InputName;
//onChange = {e => this.PaymentResponse.}
