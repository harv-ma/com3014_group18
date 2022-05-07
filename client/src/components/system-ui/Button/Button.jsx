import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({ label, to, callback }) => {
  const navigate = useNavigate();

  return (
    <button
      className="button"
      onClick={(e) => {
        if (to) {
          navigate(to);
        } else {
          callback();
        }
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
