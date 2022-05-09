import React, {useState, useEffect} from "react";
import "./CandidateArea.scss";
import "../JobList/JobList.scss";
import { Accordion } from "react-bootstrap";
import { deleteUser, getProfile } from "../../services/user.service";
import {toast} from "react-toastify";
import { myApplication } from "../../services/application.service";
import { Link } from "react-router-dom";

const CandidateArea = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getProfile().then(res => setProfile(res.data))
    .catch(err => toast.error(err.response?.data?.message ?? err.message))
  }, []);

  useEffect(() => {
    myApplication().then(res => setApplications(res.data))
    .catch(err => toast.error(err.response?.data?.message ?? err.message))
  }, []);

  const deleteUserData = async (userId) => {
    try {
      await deleteUser(userId);
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      navigate('/login');
      toast.success('User deleted successfully');
    }catch(err) {
      toast.error(err.response?.data?.message ?? err.message)
    }
  }
  
  return (
  <main id="EmployerArea">
    <div className="detailsBox">
      <div><img src={profile?.avatarUrl} className="img-thumbnail" alt="avatar" height="150" width="150" /></div>
      <div className="detailsText">
        <div className="title">{profile?.candidate?.firstName} {profile?.candidate?.lastName}</div>
        <div className="subtitle">Phone Number: {profile?.phoneNumber}</div>
        <div className="subtitle">Occupation: {profile?.candidate?.occupation}</div>
      </div>
      <div><Link className="btn btn-primary" to="/profile/edit" style={{textDecoration: 'none'}}>Update Details</Link></div>&emsp;
      <div><button className="btn btn-danger" onClick={() => deleteUserData(profile?.userId)}>Delete User</button></div>&emsp;
      {profile?.candidate?.resumeUrl && <div><a className="btn btn-primary" href={profile?.candidate?.resumeUrl} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>View Resume</a></div>}
    </div>
    <div className="title">About Me</div>
    <div>
      {profile?.candidate?.bio}
    </div>
    <p></p>
    <div className="title">Jobs Applications</div>
    <div className="JobsAccordion">
        <Accordion defaultActiveKey="0" alwaysOpen>
          {applications && applications.map((application, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
                <Accordion.Header>
                    <div id="container">
                        <div id="left">{application?.job?.position}</div>
                        <div id="centre">{application?.job?.location}</div>
                        <div id="right">Status:{application?.status}</div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {application?.job?.description}
                    <br></br>
                    <Link className="btn buttonAccordion" style={{textDecoration: 'none'}} to={`/jobs/${application?.job?.id}`}>View Job</Link>
                </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
    </div>
  </main>);
};

export default CandidateArea;