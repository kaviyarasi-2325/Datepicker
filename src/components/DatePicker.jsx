import React, { useState } from 'react';
import './App.css'; 

export default function MeetingPicker() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [time, setTime] = useState('');
  const [finalOutput, setFinalOutput] = useState('');

  const monthList = [
    { name: "January", val: "01" }, { name: "February", val: "02" },
    { name: "March", val: "03" }, { name: "April", val: "04" },
    { name: "May", val: "05" }, { name: "June", val: "06" },
    { name: "July", val: "07" }, { name: "August", val: "08" },
    { name: "September", val: "09" }, { name: "October", val: "10" },
    { name: "November", val: "11" }, { name: "December", val: "12" }
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 27 }, (_, i) => 2024 + i);

  const handleOk = () => {
    if (!day || !month || !year || !time) {
      alert("Please select all fields!");
      return;
    }

    let [hours, minutes] = time.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const formattedDay = day < 10 ? `0${day}` : day;
    setFinalOutput(`Selected : ${formattedDay}-${month}-${year} ${hours}:${minutes} ${ampm}`);
  };

  return (
    <div className="meeting-container">
      <h2 className="meeting-title">Meeting Date</h2>
      
      <div className="picker-row">
        <select className="custom-select" onChange={(e) => setDay(e.target.value)}>
          <option value="">Day</option>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select className="custom-select" onChange={(e) => setMonth(e.target.value)}>
          <option value="">Month</option>
          {monthList.map(m => <option key={m.val} value={m.val}>{m.name}</option>)}
        </select>

        <select className="custom-select" onChange={(e) => setYear(e.target.value)}>
          <option value="">Year</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <div className="time-wrapper">
        <label style={{display:'block', marginBottom:'8px', fontWeight:'bold'}}>Pick Time:</label>
        <input type="time" className="time-input" onChange={(e) => setTime(e.target.value)} />
      </div>

      <button className="ok-btn" onClick={handleOk}>OK</button>

      {finalOutput && (
        <div className="result-box">
          <strong>{finalOutput}</strong>
        </div>
      )}
    </div>
  );
}
