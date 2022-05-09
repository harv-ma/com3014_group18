import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findUser } from "../../services/user.service";
import './Profile.scss';
import {toast} from "react-toastify";


const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setLoading(true);
    findUser(userId).then(res => {
      if (res.data?.userType == 'EMPLOYER') {
        navigate('/');
        toast.warning('You do not have access to this page')
      }
      setProfile(res.data);
    })
    .catch(err => toast.error(err.response?.data?.message ?? err.message));
    setLoading(false);
  }, [userId]);

  return <main id="profile">
    <div className="detailsBox">
      <div><img src={profile?.avatarUrl} className="img-thumbnail" alt="avatar" height="150" width="150" /></div>
      <div className="detailsText">
        <div className="title">{profile?.candidate?.firstName} {profile?.candidate?.lastName}</div>
        <div className="subtitle">Phone Number: {profile?.phoneNumber}</div>
        <div className="subtitle">Occupation: {profile?.candidate?.occupation}</div>
      </div>
    </div>
    {profile?.candidate?.resumeUrl && <div><a className="btn btn-primary" href={profile?.candidate?.resumeUrl} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>View Resume</a></div>}
    <div className="title">About Me</div>
    <div>
      {profile?.candidate?.bio}
    </div>
  </main>;
};

export default Profile;
