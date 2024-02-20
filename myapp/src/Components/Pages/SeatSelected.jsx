import React from "react";

const rows = ["A", "B", "C", "D", "E", "F"];
const seatsPerRow = [8, 8, 8, 8, 8, 6];

function SeatSelected({ selectedSeats, handleSeatSelect }) {
  const renderSeats = () => {
    const allSeats = [];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 1; j <= seatsPerRow[i]; j++) {
        const seatId = `${rows[i]}-${j}`;
        const isBooked = selectedSeats.includes(seatId);
        allSeats.push(
          <div
            key={seatId}
            className={`seat ${isBooked ? "booked" : ""}`}
            onClick={() => handleSeatSelect(seatId)}
          >
            {seatId}
          </div>
        );
      }
    }
    return allSeats;
  };

  return (
    <div className="seat-selector">
      <h2>Seat Selector</h2>
      <div className="seats-container">{renderSeats()}</div>
    </div>
  );
}

export default SeatSelected;
