import React, { useState } from "react";
import Header from "../components/Header";
import PatientList from "../components/PatientList";
import DiagnosisHistory from "../components/DiagnosisHistory";
import PatientDetails from "../components/PatientDetails";
import"./../index.css"

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Handle patient selection
  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="content-container">
        {/* Pass the handlePatientSelect function to PatientList */}
        <PatientList onPatientSelect={handlePatientSelect} />
        <DiagnosisHistory />
        {/* Render PatientDetails with the selected patient */}
        <PatientDetails patient={selectedPatient} />
      </div>
    </div>
  );
};

export default Dashboard;