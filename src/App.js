import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import Diagnosis from "./components/Diagnosis";
import PatientProfile from "./components/PatientProfile";
import LabResults from "./components/LabResults";
import "./App.css";


function App() {
  const [patientData, setPatientData] = useState(null);
  const [jessicaData, setJessicaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev/", {
          auth: {
            username: "coalition",
            password: "skills-test",
          },
        });
        
        const data = response.data;
        setPatientData(data);
        const jessica = data.find((patient) => patient.name  === "Jessica Taylor")
        setJessicaData(jessica);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <PatientList patients={patientData} />
        <Diagnosis diagnosisHistory={jessicaData.diagnosis_history} diagnosticList={jessicaData.diagnostic_list} />
        <div className="profile-lab">
          <PatientProfile patient={jessicaData} />
          <LabResults labResults={jessicaData.lab_results} />
        </div>
    </div>
    </>
  );
}

export default App;
