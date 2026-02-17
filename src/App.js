import DatePicker from  "./components/Datepicker"
import "./App.css";
function App() {
  const handleSelect = (date, time) => {
    console.log("Selected:", date, time);
  };

  return (
    <div className="app-container">
      <h2>Booking Date</h2>
      <DatePicker onSelect={handleSelect} />

    
    </div>
  );
}

export default App;
