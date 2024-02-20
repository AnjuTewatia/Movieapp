import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SeatSelector from "./Components/Pages/SeatSelector";
import BookingForm from "./Components/Pages/BookingForm";
import BookingDetails from "./Components/Pages/BookingDetails";

function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [error, setError] = useState("");

  const handleSeatSelection = (seat) => {
    const isSeatSelected = selectedSeats.includes(seat);
    if (isSeatSelected) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBooking = (userName, numTickets) => {
    if (userName && numTickets > 0 && numTickets === selectedSeats.length) {
      const newBooking = { userName, selectedSeats };
      setBookingDetails([...bookingDetails, newBooking]);
      setSelectedSeats([]);
      setError("");
    } else {
      setError(
        "Invalid booking. Please check your details and selected seats."
      );
    }
  };

  return (
    <div className="App">
      <h1>Theater Booking System</h1>

      <h1>Movie Ticket Booking System</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="main-container">
        <SeatSelector
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelection}
        />
        <BookingForm onBook={handleBooking} />
        <BookingDetails bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}

export default App;
