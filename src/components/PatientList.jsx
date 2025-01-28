import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientList = ({ onPatientSelect }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patient data from the API
    const fetchPatients = async () => {
      const credentials = btoa("coalition:skills-test"); // Encode credentials
      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${credentials}`, // Add Authorization header
            },
          }
        );
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <section className="patient-list-section">
      <h2>Patients</h2>
      <ul className="patient-list">
        {patients.map((patient) => (
          <li key={patient.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPatientSelect(patient); // Pass the selected patient object
              }}
            >
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
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientList;