import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Textarea.scss";

export default function Textarea({ label, id, callback }) {
  const max_text = 3000;
  const [text, setText] = useState(0);

  const checkLength = () => {
    return text > max_text;
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        onChange={(e) => {
          setText(e.target.value.length);
          e.target.style.height = "";
          e.target.style.height = e.target.scrollHeight + "px";
          callback(e);
        }}
        className="textarea"
      />
      <span
        className="textarea-wordcount"
        style={{ color: checkLength() ? "red" : "initial" }}
      >
        {text} / {max_text}
      </span>
    </>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  callback: PropTypes.func,
};
