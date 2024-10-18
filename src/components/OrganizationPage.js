import React from "react";
import './OrganizationPage.css'; // Assuming we are using a separate CSS file for styles


function OrganizationPage() {
  return (
    <div className="organization-page">
      {/* Sidebar: Profile Info & Jobs Completed */}
      <div className="sidebar">
        <div className="profile-section">
          <img src="https://via.placeholder.com/80" alt="Profile" className="profile-pic" />
          <p className="profile-name">Mcgee, Myers and Co</p>
          <p className="profile-email">shawphyllis@exam.com</p>
          <p className="profile-website">Website: jimenez.com</p>
          <button className="logout-btn">LOGOUT</button>
          <button className="delete-btn">DELETE</button>
        </div>

        <div className="jobs-completed">
          <h3>Jobs Completed</h3>
          <div className="completed-job">
            <p className="job-title">Child psychotherapist</p>
            <p>Completed by: hatcher72</p>
            <button className="cert-btn">Give certificate</button>
          </div>
          <div className="completed-job">
            <p className="job-title">Child psychotherapist</p>
            <p>Completed by: hatcher72</p>
            <button className="cert-btn">Give certificate</button>
          </div>
          {/* Add more completed jobs as needed */}
        </div>
      </div>

      {/* Main Content: Jobs Created & New Job Applications */}
      <div className="main-content">
        <div className="jobs-created">
          <h3>Jobs Created (2)</h3>
          <div className="job-card">
            <p className="job-title">Product/process development scientist</p>
            <p>Represent focus yourself assume always enjoy. Crime talk people. Start stay rise time.</p>
            <p>Date: 2024-08-06 • Maximum Hours required: 50</p>
            <button className="mark-completed-btn">Mark Completed</button>
            <button className="delete-btn">DELETE</button>
          </div>
          <div className="job-card">
            <p className="job-title">Product/process development scientist</p>
            <p>Represent focus yourself assume always enjoy. Crime talk people. Start stay rise time.</p>
            <p>Date: 2024-08-06 • Maximum Hours required: 50</p>
            <button className="mark-completed-btn">Mark Completed</button>
            <button className="delete-btn">DELETE</button>
          </div>
        </div>

        <div className="new-job-applications">
          <h3>New Jobs Applications (6)</h3>
          <div className="application-card">
            <p className="applicant-name">andrew62</p>
            <p>Job applying for: Product/process development scientist</p>
            <p>Date: 2024-08-06 • Overall Rating: 4.4</p>
            <button className="approve-btn">APPROVE</button>
            <button className="reject-btn">REJECT</button>
          </div>
          <div className="application-card">
            <p className="applicant-name">thomasbradley</p>
            <p>Job applying for: Product/process development scientist</p>
            <p>Date: 2024-08-06 • Overall Rating: 4.6</p>
            <button className="approve-btn">APPROVE</button>
            <button className="reject-btn">REJECT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;
