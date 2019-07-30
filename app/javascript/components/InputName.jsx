import React from "react";

const InputName = () => {
  return (
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Name</label>
      <input
        type="text"
        className="form-control"
        value={props.name}
        onChange={e => props.onChangeName(e.target.value)}
      />
    </div>
  );
};

export default InputName;
