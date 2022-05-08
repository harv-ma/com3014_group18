import React from "react";
import Button from "../../components/system-ui/Button/Button";
import "./Profile.scss";
import { Accordion } from "react-bootstrap";

const Profile = () => {
  return (
    <main id="profile">
      <div className="profile-intro">
        <div>
          <img src="https://picsum.photos/150/150" alt="avatar" />
        </div>
        <ul>
          <li>
            Dunder Mifflin <Button label="Update" />
          </li>
          <li>
            <span>Address</span> 1725 Slough Avenute, Scantom, PA
          </li>
          <li>
            <span>Phone Number</span> 1-800-613-8840
          </li>
          <li>
            <span>Website</span> DunderMifflinPaper.com
          </li>
        </ul>
      </div>
      <div className="profile-description">
        <h3>Company Description</h3>
        <p>
          Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
          accumsan tincidunt. Nulla porttitor accumsan tincidunt. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec sollicitudin molestie
          malesuada. Donec sollicitudin molestie malesuada. Praesent sapien
          massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien
          massa, convallis a pellentesque nec, egestas non nisi. Nulla quis
          lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed
          porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Donec
          rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Nulla
          quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
          id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi.
        </p>
      </div>

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
