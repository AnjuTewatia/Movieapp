import React from 'react';

const SeatSelector = ({ selectedSeats, onSeatSelect }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = [8, 8, 8, 8, 8, 6];

  const isSeatSelected = (row, seat) => {
    return selectedSeats.includes(`${row}${seat}`);
  };

  return (
    <div className="seat-selector">
      <h2>Seat Selector</h2>
      {rows.map((row, rowIndex) => (
        <div key={row} className="seat-row">
          {Array(seatsPerRow[rowIndex])
            .fill(0)
            .map((_, seatIndex) => {
              const seat = seatIndex + 1;
              const seatId = `${row}${seat}`;
              const isSelected = isSeatSelected(row, seat);

              return (
                <div
                  key={seatId}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => onSeatSelect(seatId)}
                >
                  {seat}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
