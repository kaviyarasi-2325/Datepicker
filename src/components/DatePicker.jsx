import React, { useState } from "react";

function Datepicker({ onSelect }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
    if (onSelect) onSelect(formatDate(e.target.value), formatTime(time));

  };

  const handleTime = (e) => {
    setTime(e.target.value);
    if (onSelect) onSelect(formatDate(date), formatTime(e.target.value));

  };

  const formatDate = (d)=>{
    if (!d) return "";
    const[y,m,day]=d.split("-");
    return `${day}-${m}-${y}`;
  }

  const formatTime = (t)=>{
    if (!t)return "";
    let [h,m] = t.split(":");
    h = parseInt(h);
    const ampm=h>=12?"PM":"AM";
    h=h%12 ||12;
    return`${h}:${m} ${ampm}`
  }
  return (
    <div className="date-box">
      <h3>Select Date & Time</h3>
      <p className="week-text">Weekdays: Mon Tue Wed Thu Fri Sat Sun</p>

      <input type="date" value={date} onChange={handleDate} className="input-field" min={new Date().toISOString().split("T")[0]}/>
      <br />
      <input type="time" value={time} onChange={handleTime} className="input-field" />
      {date && time &&(
        <p className="selected-text">
          Selected: {formatDate (date)} { formatTime (time)}</p>
      )}
    </div>
  );
}


export default Datepicker;
