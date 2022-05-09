import React, { useState, useEffect } from "react";
import Button from "../../components/system-ui/Button/Button";
import "./Profile.scss";
import { Accordion } from "react-bootstrap";
import { getProfile } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProfile()
      .then((res) => {
        setData(res.data);

        if (res.data?.userType != "CANDIDATE") {
          navigate("/employer-area");
        }
      })
      .catch((err) => {
        navigate("/login");
        // toast.error(err.response?.data?.message ?? err.message);
      });
  }, []);

  const candidate = data?.candidate;

  var jobStatus;

  switch (candidate?.jobSearchStatus) {
    case "ACTIVELY_APPLYING":
      jobStatus = "Actively Applying";
      break;
    // TODO: fill in the rest
    default:
      jobStatus = "Unknown";
  }

  return (
    <main id="profile">
      <div className="profile-intro">
        <div>
          <img
            src={data?.avatarUrl ? data?.avatarUrl : "default.png"}
            alt="avatar"
          />
        </div>
        <ul>
          <li>
            {candidate?.firstName} {candidate?.lastName}
          </li>
          <li>
            <span>Occupation</span> {candidate?.occupation}
          </li>
          <li>
            <span>Phone Number</span> {data?.phoneNumber}
          </li>
          <li>
            <span>Job Search Status</span> {jobStatus}
          </li>
        </ul>
      </div>
      {candidate?.bio ? (
        <div className="profile-description">
          <h3>Biography</h3>
          <p>{candidate?.bio}</p>
        </div>
      ) : (
        <div className="profile-description">
          <h3>Biography</h3>
          <p>This user has yet to add a biography</p>
        </div>
      )}

      <div className="profile-applications">
        <h3>Open Applications</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
};

export default Profile;
