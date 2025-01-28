import React from "react";
import "./DiagnosisHistory.css"; // Import component-specific CSS

const DiagnosisHistory = () => {
  return (
    <section className="diagnosis-history">
      <h2>Diagnosis History</h2>
      <div className="diagnosis-content">
        {/* Blood Pressure Card */}
        <div className="diagnosis-card">
          <h3>Blood Pressure</h3>
          <div className="blood-pressure">
            <div className="systolic">
              <span>Systolic</span>
              <span className="value">160</span>
              <span className="status higher">Higher than Average</span>
            </div>
            <div className="diastolic">
              <span>Diastolic</span>
              <span className="value">78</span>
              <span className="status lower">Lower than Average</span>
            </div>
          </div>
          <div className="blood-pressure-chart">
            <div className="chart-labels">
              <span>Oct. 2023</span>
              <span>Nov. 2023</span>
              <span>Dec. 2023</span>
              <span>Jan. 2024</span>
              <span>Feb. 2024</span>
              <span>Mar. 2024</span>
            </div>
            <div className="chart-bars">
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "50%" }}></div>
              <div className="bar" style={{ height: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* Vitals Card */}
        <div className="diagnosis-card">
          <h3>Vitals</h3>
          <div className="vitals">
            <div className="vital">
              <span>Respiratory Rate</span>
              <span className="value">20 bpm</span>
              <span className="status normal">Normal</span>
            </div>
            <div className="vital">
              <span>Temperature</span>
              <span className="value">98.6°F</span>
              <span className="status normal">Normal</span>
            </div>
            <div className="vital">
              <span>Heart Rate</span>
              <span className="value">78 bpm</span>
              <span className="status lower">Lower than Average</span>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostic List Component */}
      <DiagnosticList />
    </section>
  );
};

// Diagnostic List Component
const DiagnosticList = () => {
  const diagnostics = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
  ];

  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((diagnostic, index) => (
            <tr key={index}>
              <td>{diagnostic.problem}</td>
              <td>{diagnostic.description}</td>
              <td>
                <span className={`status ${diagnostic.status.toLowerCase().replace(" ", "-")}`}>
                  {diagnostic.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisHistory;