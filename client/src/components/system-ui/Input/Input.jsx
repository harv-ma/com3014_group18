import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({ label, id, placeholder, callback, required }) => {
  return (
    <>
      <label className="input-label" htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <input
        key={id}
        className="input-input"
        id={id}
        placeholder={placeholder}
        onChange={callback}
      ></input>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  callback: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
