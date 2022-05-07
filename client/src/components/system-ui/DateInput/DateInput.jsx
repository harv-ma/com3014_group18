import React from "react";
import PropTypes from "prop-types";

export default function DateInput({ label, id, placeholder, callback }) {
  return (
    <>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        key={id}
        type="date"
        className="input-input"
        id={id}
        placeholder={placeholder}
        onChange={callback}
      ></input>
    </>
  );
}

DateInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  callback: PropTypes.func,
};
