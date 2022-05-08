import React, {useState} from "react";
import { login, register } from "../../services/user.service";
import PropTypes from "prop-types";
import {toast} from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ isEmployer }) =>  {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        phoneNumber: '',
        userType: isEmployer ? 'EMPLOYER' : 'CANDIDATE'
    });

    const [candidateData, setCandidateData] = useState({
        firstName: '',
        lastName: '',
        occupation: ''
    });

    const [employerData, setEmployerData] = useState({
        companyName: ''
    });



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
        
            isEmployer ? setUserData({...userData, employer: employerData}) :
             setUserData({...userData, candidate: candidateData})

            console.log(userData);
            const res = await register(userData);
            localStorage.setItem('user', JSON.stringify(res.data));
            const loginRes = await login({email: userData.email, password: userData.password});
            ;localStorage.setItem('access_token', loginRes.data?.access_token);
            navigate('/', {replace: true});
            toast.success('Welcome 😊');
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
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input id="email" name="email" type="email" className="form-control" onChange={userDataInputUpdate} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input id="password" name="password" type="password" className="form-control" onChange={userDataInputUpdate} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input id="phoneNumber" name="phoneNumber" type="text" className="form-control" onChange={userDataInputUpdate} />
                                    </div>

                                    {!isEmployer && 
                                    <div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                                    <input id="firstName" name="firstName" type="text" className="form-control" onChange={candidateDataInputUpdate} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                                    <input id="lastName" name="lastName" type="text" className="form-control" onChange={candidateDataInputUpdate} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="occupation" className="form-label">Occupation</label>
                                            <input id="occupation" name="occupation" type="text" className="form-control" onChange={candidateDataInputUpdate} />
                                        </div>

                                        <p>Are you an Employer? <Link to="/employer/register">Employer sign up</Link></p>
                                    </div>}

                                    {isEmployer &&
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="companyName" className="form-label">Company Name</label>
                                            <input id="companyName" name="companyName" type="text" className="form-control" onChange={employerDataInputUpdate} />
                                        </div>
                                        <p>Are you looking for a job? <Link to="/candidate/register">Candidate sign up</Link></p>
                                    </div>
        }

                                <button disabled={loading} type="submit" className="button" id="submit">
                                        Register
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

Register.propTypes = {
    isEmployer: PropTypes.bool,
};
  

export default Register;