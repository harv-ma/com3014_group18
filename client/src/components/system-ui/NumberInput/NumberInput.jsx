import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NumberInput.scss";

const NumberInput = ({ label, id, placeholder, callback }) => {
  const dict = {
    salary: "number",
  };

  return (
    <>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <div className="numberinput">
        <input
          key={id}
          className="numberinput-input"
          id={id}
          placeholder={placeholder}
          onChange={callback}
          type="number"
        ></input>
        <span>£</span>
      </div>
    </>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  callback: PropTypes.func,
  type: PropTypes.string,
};

export default NumberInput;
