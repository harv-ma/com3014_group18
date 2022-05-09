import React, {useState, useEffect} from "react";
import { getProfile, updateProfile, uploadAvatar, uploadResume } from "../../services/user.service";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () =>  {
    const jobSearchStatus = ['ACTIVELY_APPLYING', 'OPEN_TO_WORK', 'NOT_SEARCHING']
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isEmployer, setEmployer] = useState(false);
    const [userData, setUserData] = useState({
        phoneNumber: ''
    });

    const [selectedResume, setSelectedResume] = useState('')
    const [selectedAvatar, setSelectedAvatar] = useState('')

    const [candidateData, setCandidateData] = useState({
        firstName: '',
        lastName: '',
        occupation: '',
        jobSearchStatus: '',
        bio: '',
    });

    const [employerData, setEmployerData] = useState({
        companyName: '',
        description: '',
        website: '',
        address: ''
    });


    useEffect(() => {
        getProfile().then(res => {
            setUserData(res.data);
            if (res.data?.userType === 'CANDIDATE') {
                setCandidateData(res.data?.candidate);
                setEmployer(false);
            } else {
                setEmployerData(res.data?.employer);
                setEmployer(true);
            }
        }).catch(err => toast.error(err.response?.data?.message ?? err.message))
    }, [])

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await updateProfile( {...userData, employer: employerData, candidate: candidateData});
            navigate(`/profile/${res.data?.userId}`, {replace: true});
            toast.success('Profile updated successfully 😊');
        } catch (error) {
            toast.error(error.response?.data?.message ?? error.message);
        }
        setLoading(false);
    }

    const userDataInputUpdate = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const employerDataInputUpdate = (e) => {
        setEmployerData({ ...employerData, [e.target.name]: e.target.value });
    };

    const candidateDataInputUpdate = (e) => {
        setCandidateData({ ...candidateData, [e.target.name]: e.target.value });
    };

    const onResumeFileChanged = (e) => {
        setSelectedResume(e.target.files[0]);
    }

    const onResumeUpload = async () => {
        const formData = new FormData();
    
        // Update the formData object
        formData.append(
          "file",
          this.selectedResume,
          this.selectedResume.name
        );
        try {
           const res = uploadResume(formData);
            toast.success(res.data?.message);
        } catch(err) {
            toast.error(err.response?.data?.message ?? err.message);
        }
    }

    const onAvatarChanged = (e) => {
        setSelectedAvatar(e.target.files[0]);
    }

    const onAvatarUpload = async () => {
        const formData = new FormData();
    
        // Update the formData object
        formData.append(
          "file",
          this.selectedAvatar,
          this.selectedAvatar.name
        );
        try {
           const res = uploadAvatar(formData);
            toast.success(res.data?.message);
        } catch(err) {
            toast.error(err.response?.data?.message ?? err.message);
        }
    }
    
    return (
        <div className="register mt-5">
            <div className="container">
                <div className="row mt-5 mb-3">
                    <div className="col-md-12 me-auto text-left">
                        <h1 className="text-center">Join Our Amazing Commuinity</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <dis className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input id="phoneNumber" name="phoneNumber" type="text" className="form-control" value={userData.phoneNumber} onChange={userDataInputUpdate} />
                                    </div>

                                    {!isEmployer && 
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                                    <input id="firstName" name="firstName" type="text" className="form-control" value={candidateData?.firstName} onChange={candidateDataInputUpdate} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                                    <input id="lastName" name="lastName" type="text" className="form-control" value={candidateData?.lastName}  onChange={candidateDataInputUpdate} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="occupation" className="form-label">Occupation</label>
                                                    <input id="occupation" name="occupation" type="text" className="form-control" value={candidateData?.occupation}  onChange={candidateDataInputUpdate} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="occupation" className="form-label">Job Search Status</label>
                                                    <select className="form-select" value={candidateData?.jobSearchStatus} onChange={candidateDataInputUpdate} name="jobSearchStatus">
                                                        {jobSearchStatus.map(type => (
                                                            <option key={type}>{type}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <textarea name="bio" className="form-control" rows="3" onChange={candidateDataInputUpdate} value={candidateData?.bio}></textarea>   


                                        <div>
                                            <input type="file" onChange={onResumeFileChanged} />
                                            <button onClick={onResumeUpload}>
                                                Upload Resume!
                                            </button>
                                        </div>

                                        <div>
                                            <input type="file" onChange={onAvatarChanged} />
                                            <button onClick={uploadAvatar}>
                                                Upload Avatar!
                                            </button>
                                        </div>
                                    </div>}

                                    {isEmployer &&
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="companyName" className="form-label">Company Name</label>
                                            <input id="companyName" name="companyName" type="text" className="form-control" onChange={employerDataInputUpdate} value={employerData.companyName} />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="website" className="form-label">Website</label>
                                                    <input id="website" name="website" type="text" className="form-control" value={employerData?.website} onChange={employerData.website} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="address" className="form-label">Address</label>
                                                    <input id="address" name="address" type="text" className="form-control" value={employerData?.address}  onChange={employerDataInputUpdate} />
                                                </div>
                                            </div>
                                        </div>
                                        <textarea name="description" className="form-control" rows="3" onChange={employerDataInputUpdate} value={employerData?.description}></textarea>   
                                    </div>
        }

                                    <button disabled={loading} type="submit" className="button mt-3" id="submit">
                                        {!loading ? 'Save Edit' : <i className="fa fa-spinner fa-spin fa-fw"></i>}
                                     </button>
                                </form>
                            </dis>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  

export default EditProfile;