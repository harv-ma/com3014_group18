import React from "react";
import "./Share.scss";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import { EmailShareButton, EmailIcon } from "react-share";

const Share = ({ className }) => {
  const { pathname } = useLocation();

  return (
    <EmailShareButton url={pathname} className={className}>
      <EmailIcon size={32} round /> <span>Email</span>
    </EmailShareButton>
  );
};

Share.propTypes = {
  className: PropTypes.string,
};

export default Share;
