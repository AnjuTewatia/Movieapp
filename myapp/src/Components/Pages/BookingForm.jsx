import React, { useState } from "react";

const BookingForm = ({ onBook }) => {
  const [userName, setUserName] = useState("");
  const [numTickets, setNumTickets] = useState(1);

  const handleBookClick = () => {
    onBook(userName, numTickets);
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <label>Name:</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Number of Tickets:</label>
      <select
        value={numTickets}
        onChange={(e) => setNumTickets(parseInt(e.target.value))}
      >
        {[...Array(8).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <button onClick={handleBookClick} disabled={!userName || numTickets <= 0}>
        Book
      </button>
    </div>
  );
};

export default BookingForm;
