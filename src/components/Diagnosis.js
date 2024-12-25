import React from 'react';
import './Diagnosis.css';
import MyChart from './MyChart';

function Diagnosis({ diagnosisHistory, diagnosticList }) {
  const labels = diagnosisHistory.map((entry) => `${entry.month} ${entry.year}`);
  const data = [
    {
      label: 'Systolic',
      data: diagnosisHistory.map((entry) => entry.blood_pressure.systolic.value),
      borderColor: '#FF6B6B',
      fill: false,
    },
    {
      label: 'Diastolic',
      data: diagnosisHistory.map((entry) => entry.blood_pressure.diastolic.value),
      borderColor: '#4A90E2',
      fill: false,
    },
  ];

  return (
    <div className="diagnosis">
      <h2>Diagnosis History</h2>
      <div className="diagnosis__history">
        <h3 className="history__title">Blood Pressure</h3>
        <MyChart labels={labels} data={data} />
      </div>
      <div className="diagnosis__metrics">
        <div className="resp-metric">
          <img src = "/icons/resp.jpg" className = "diagnose-image" alt = "Resp"/>
          <div className='diagnose-name'>Respiratory Rate</div>
          <div className='diagnose-value'>20 bpm</div>
          <div className='diagnose-status'>Normal</div>
        </div>
        <div className="temp-metric ">
          <img src = "/icons/temperature.jpg" className = "diagnose-image" alt = "Resp"/>
          <div className='diagnose-name'>Temperature</div>
          <div className='diagnose-value'>98.6 F</div>
          <div className='diagnose-status'>Normal</div>
        </div>
        <div className="heart-metric ">
          <img src = "/icons/heart.jpg" className = "diagnose-image" alt = "Resp"/>
          <div className='diagnose-name'>Heart Rate</div>
          <div className='diagnose-value'>78 bpm</div>
          <div className='diagnose-status'><span><img src= "/icons/ArrowDown.jpg" alt = "decreasing"/> Lower than Average</span></div>
          </div> 
      </div>
      <div className="diagnosis__list">
        <h3 className="list__title">Diagnosis List</h3>
        <table className="list__table">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Diagnosis;
