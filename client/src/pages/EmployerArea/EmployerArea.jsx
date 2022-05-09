import React, {useState, useEffect} from "react";
import "./EmployerArea.scss";
import "../JobList/JobList.scss";
import { Accordion } from "react-bootstrap";
import {toast} from "react-toastify";
import { getProfile } from "../../services/user.service";
import { getJobsMine } from "../../services/job.service";
import { Link } from "react-router-dom";
import { manageApplication } from "../../services/application.service";

const EmployerArea = () => {
    const [profile, setProfile] = useState({});
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getProfile().then(res => setProfile(res.data))
        .catch(err => toast.error(err.response?.data?.message ?? err.message))
    }, []);
    
    useEffect(() => {
        getJobsMine().then(res => setJobs(res.data))
        .catch(err => toast.error(err.response?.data?.message ?? err.message));
    }, []);

    const makeDecision = async (applicationId, status) => {
        try {
           const res = manageApplication(applicationId, status);
           toast.success((await res).data?.message);
        } catch(err) {
            toast.error(err.response?.data?.message ?? err.message)
        }
    }

  return (
  <main id="EmployerArea">
    <div className="detailsBox">
      <div><img src={profile?.avatarUrl} alt="avatar" /></div>
      <div className="detailsText">
        <div className="title">{profile?.user?.employer.companyName}</div>
        <div className="subtitle">{profile?.user?.employer?.address}</div>
        <div className="subtitle">{profile?.user?.phoneNumber}</div>
        <div className="subtitle">{profile?.user?.employer?.website}</div>
      </div>
      <div><Link className="buttonDetails" to="/profile/edit">Update Details</Link></div>
    </div>
    <div className="title">Company Description</div>
    <div>
        {profile?.user?.employer?.description}
    </div>
    <p></p>
    <div className="title">Manage Jobs</div>
    <div className="JobsAccordion">
        <Accordion defaultActiveKey="0" alwaysOpen>

            {jobs && jobs.map((job, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
            <Accordion.Header>
                <div id="container">
                    <div id="left">{job?.position}</div>
                    <div id="centre">{job?.location}</div>
                    <div id="right">{job?.applications?.length}</div>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                {job.description}
                <br></br>
                <Link className="buttonAccordion" to={`/jobs/${job?.id}/edit`} style={{textDecoration: 'none'}}>Edit Job</Link>
                <div className="ApplicantsAccordion">
                        <Accordion defaultActiveKey="0" alwaysOpen>
                            {job?.applications && job?.applications?.map((application, index) => (
                            <Accordion.Item ventKey={`${index}`} key={index}>
                            <Accordion.Header>
                                <div id="container">
                                    <div id="left">{application?.user?.candidate?.firstName} {application?.user?.candidate?.lastName}</div>
                                    <div id="right">{application?.user?.candidate?.occupation}</div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                {application?.user?.candidate?.bio}
                                <br></br>
                                <div id="container">
                                    <Link className="btn buttonAccordion" to={`/profile/${application?.user?.userId}`} style={{textDecoration: 'none'}}>See applicant</Link>
                                    <button className="buttonConfirm" onClick={() => makeDecision(application?.id, "ACCEPTED")}>Accept</button>
                                    <button className="buttonDeny" onClick={() => makeDecision(application?.id, "REJECTED")}>Deny</button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </Accordion.Body>
            </Accordion.Item>
            ))}
        </Accordion>    
    </div>
  </main>);
};

export default EmployerArea;