import React from "react";
import "./EmployerArea.scss";

const EmployerArea = () => {
  return (
  <main id="employer-area">
    <div className="detailsBox">
      <div><img src="https://picsum.photos/150/150" alt="avatar" /></div>
      <div className="detailsText">
        <div className="title">(Company Name)</div>
        <div className="subtitle">Address: (Address)</div>
        <div className="subtitle">Phone Number: (Phone Number)</div>
        <div className="subtitle">Website: (Website)</div>
      </div>
      <button>Update Details</button>
    </div>
    <div className="title">Company Description</div>
    
  </main>);
};

export default EmployerArea;