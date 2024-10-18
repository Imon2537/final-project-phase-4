import React, { useState, useEffect } from "react";
import './VolunteerAccount.css'; // Assuming we are using a separate CSS file for styles

const VolunteerAccount = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Dummy data to mimic API response
    const dummyData = {
      username: "amber59",
      joinDate: "15th October 2024",
      jobsDone: 11,
      overallRating: 4.4,
      profilePicture: "https://via.placeholder.com/80",  // Placeholder image
      approvedJobs: [
        {
          title: "Product/process development scientist",
          description: "Represent focus yourself assume always enjoy. Crime talk people.",
          date: "2024-08-06",
          hoursWorked: 3,
          totalHours: 50
        },
        {
          title: "Product/process development scientist",
          description: "Represent focus yourself assume always enjoy. Crime talk people.",
          date: "2024-08-06",
          hoursWorked: 3,
          totalHours: 50
        }
      ],
      postedJobs: [
        {
          title: "Product/process development scientist",
          description: "Represent focus yourself assume always enjoy. Crime talk people.",
          date: "2024-08-06",
          maxHours: 50
        },
        {
          title: "Product/process development scientist",
          description: "Represent focus yourself assume always enjoy. Crime talk people.",
          date: "2024-08-06",
          maxHours: 50
        }
      ],
      completedCertificates: [
        { title: "Child psychotherapist", rating: 4.5 },
        { title: "Child psychotherapist", rating: 4.5 }
      ]
    };

    // Set the dummy data
    setUserData(dummyData);
  }, []);  // Empty dependency array ensures this runs once when the component mounts

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="volunteer-account">
      <div className="sidebar">
        <div className="user-info">
          <img className="profile-picture" src={userData.profilePicture} alt="Profile" />
          <h3>{userData.username}</h3>
          <p>Joined: {userData.joinDate}</p>
          <p>Jobs Done: {userData.jobsDone}</p>
          <p>Overall Rating: {userData.overallRating}</p>
          <div className="button-group">
            <button className="logout-button">LOGOUT</button>
            <button className="delete-button">DELETE</button>
          </div>
        </div>

        <div className="certificates">
          <h4>Completed Job Certificates</h4>
          {userData.completedCertificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h5>{cert.title}</h5>
              <p>Rating: {cert.rating}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="jobs-section approved-jobs">
          <h4>Approved Jobs ({userData.approvedJobs.length})</h4>
          {userData.approvedJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h5>{job.title}</h5>
              <p>{job.description}</p>
              <p>Date: {job.date}</p>
              <p>Hours Worked: {job.hoursWorked}/{job.totalHours}</p>
              <button className="append-hours-button">Append Hours</button>
            </div>
          ))}
        </div>

        <div className="jobs-section posted-jobs">
          <h4>Posted Jobs ({userData.postedJobs.length})</h4>
          {userData.postedJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h5>{job.title}</h5>
              <p>{job.description}</p>
              <p>Date: {job.date}</p>
              <p>Maximum Hours Required: {job.maxHours}</p>
              <button className="apply-button">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerAccount;
