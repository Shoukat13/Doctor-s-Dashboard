import React from "react";
import "./PatientProfile.css";

function PatientProfile({ patient }) {
  return (
    <div className="patient-profile">
      <img src={patient.profile_picture} alt={patient.name} className="patient-profile__image" />
      <h3 className="patient-profile__name">{patient.name}</h3>
      <p className="patient-profile__info">Date of Birth: <b>{patient.date_of_birth}</b></p>
      <p className="patient-profile__info">Gender: <b>{patient.gender}</b></p>
      <p className="patient-profile__info">Contact: <b>{patient.phone_number}</b></p>
      <p className="patient-profile__info">Emergency Contact: <b>{patient.emergency_contact}</b></p>
      <p className="patient-profile__info">Insurance: <b>{patient.insurance_type}</b></p>
      <button className="patientinfo-button">Show all Information</button>
    </div>
  );
}

export default PatientProfile;
