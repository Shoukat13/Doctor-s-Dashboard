import React from "react";
import "./PatientList.css";

const PatientList = ({ patients }) => {
  return (
    <div className="patient-list">
      <h3 className="patient-list__header">Patients</h3>
      <div className="patient-list__content">
        {patients.map((patient, index) => (
          <div className={`patient-item ${patient.name === "Jessica Taylor" && "patient_item--active"}`} key={index}>
            <img src={patient.profile_picture} alt={patient.name} className="patient-item__image" />
            <div className="patient-item__details">
              <h4 className="patient-item__name">{patient.name}</h4>
              <p className="patient-item__info">{patient.gender}, {patient.age} years</p>
            </div>
            <img src = "/icons/horiz_dots.jpg" alt= "horiz dots"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
