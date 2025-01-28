import React from "react";
import "./PatientDetails.css"; // Import component-specific CSS

const PatientDetails = ({ patient }) => {
  if (!patient) {
    return <p>No patient selected.</p>;
  }

  return (
    <section className="patient-details-section">
      <h2>Patient Details</h2>
      <div className="patient-details-content">
        {/* Patient Info */}
        <div className="patient-info">
          <div className="patient-image">
            <img src={patient.profile_picture} alt={patient.name} />
          </div>
          <div className="patient-details">
            <span className="patient-name">{patient.name}</span>
            <span className="patient-gender-age">
              {patient.gender}, {patient.age}
            </span>
          </div>
        </div>

        {/* Patient Meta */}
        <div className="patient-meta">
          <MetaItem
            icon="fas fa-birthday-cake"
            title="Date of Birth"
            value={patient.date_of_birth}
          />
          <MetaItem
            icon="fas fa-venus-mars"
            title="Gender"
            value={patient.gender}
          />
          <MetaItem
            icon="fas fa-phone"
            title="Contact Info"
            value={patient.phone_number}
          />
          <MetaItem
            icon="fas fa-exclamation-triangle"
            title="Emergency Contacts"
            value={patient.emergency_contact}
          />
          <MetaItem
            icon="fas fa-shield-alt"
            title="Insurance Provider"
            value={patient.insurance_type}
          />
        </div>

        {/* Show All Information Button */}
        <button className="show-all-info">
          <i className="fas fa-info-circle"></i> {/* Info Icon */}
          Show All Information
        </button>
      </div>

      {/* Lab Results Component */}
      <LabResults />
    </section>
  );
};

// Reusable MetaItem Component
const MetaItem = ({ icon, title, value }) => (
  <div className="meta-item">
    <span className="meta-title">
      <i className={icon}></i> {/* Dynamic Icon */}
      {title}
    </span>
    <span className="meta-value">{value}</span>
  </div>
);

// Lab Results Component
const LabResults = () => {
  const labResults = [
    { name: "Blood Tests", downloadLink: "#" },
    { name: "CT Scans", downloadLink: "#" },
    { name: "Radiology Reports", downloadLink: "#" },
    { name: "X-Rays", downloadLink: "#" },
    { name: "Urine Test", downloadLink: "#" },
  ];

  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <div className="lab-results-list">
        {labResults.map((lab, index) => (
          <div key={index} className="lab-result-item">
            <span>{lab.name}</span>
            <a
              href={lab.downloadLink}
              className="download-button"
              download
            >
              <i className="fas fa-download"></i> Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDetails;