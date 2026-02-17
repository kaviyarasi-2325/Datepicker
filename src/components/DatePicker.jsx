import React, { useState } from "react";

function Datepicker({ onSelect }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
    if (onSelect) onSelect(e.target.value, time);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
    if (onSelect) onSelect(date, e.target.value);
  };

  return (
    <div className="date-box">
      <h3>Select Date & Time</h3>
      <p className="week-text">Weekdays: Mon Tue Wed Thu Fri Sat Sun</p>

      <input type="date" value={date} onChange={handleDate} className="input-field"/>
      <br />
      <input type="time" value={time} onChange={handleTime} className="input-field" />
      {date && time &&(
        <p className="selected-text">
          Selected: {date} {time}</p>
      )}
    </div>
  );
}


export default Datepicker;
