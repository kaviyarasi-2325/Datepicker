import DatePicker from "./components/DatePicker";

function App() {
  const handleSelect = (date, time) => {
    console.log("Selected:", date, time);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Date</h2>
      <DatePicker onSelect={handleSelect} />

      <h2>Meeting Date</h2>
      <DatePicker onSelect={handleSelect} />
    </div>
  );
}

export default App;
