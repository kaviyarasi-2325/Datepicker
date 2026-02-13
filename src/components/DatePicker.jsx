import React, { useState } from "react";

function DatePicker({ onSelect }) {
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
    <div>
      <h3>Select Date & Time</h3>
      <p>Weekdays: Mon Tue Wed Thu Fri Sat Sun</p>

      <input type="date" value={date} onChange={handleDate} />
      <br />
      <input type="time" value={time} onChange={handleTime} />
    </div>
  );
}

export default DatePicker;
