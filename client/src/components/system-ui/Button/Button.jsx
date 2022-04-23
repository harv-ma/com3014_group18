import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({ label, to }) => {
  const navigate = useNavigate();

  return (
    <button
      className="button"
      onClick={() => {
        navigate(to);
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
