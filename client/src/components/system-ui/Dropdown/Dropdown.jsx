import React from "react";
import PropTypes from "prop-types";
import "./Dropdown.scss";

export default function Dropdown({ label, id, children, callback }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} className="dropdown" onChange={callback}>
        {children}
      </select>
    </>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  callback: PropTypes.func,
};
