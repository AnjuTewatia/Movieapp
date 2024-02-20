import React from "react";

const BookingDetails = ({ bookingDetails }) => {
  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <ul>
        {bookingDetails.map((booking, index) => (
          <li key={index}>
            <strong>{booking.userName}</strong> - Seats:{" "}
            {booking.selectedSeats.join(", ")}
          </li>
        ))}
      </ul>
      <p>Total Seats: {bookingDetails.length * 8}</p>
      <p>
        Booked Seats:{" "}
        {bookingDetails.reduce(
          (total, booking) => total + booking.selectedSeats.length,
          0
        )}
      </p>
      <p>
        Available Seats:{" "}
        {46 -
          bookingDetails.reduce(
            (total, booking) => total + booking.selectedSeats.length,
            0
          )}
      </p>
    </div>
  );
};

export default BookingDetails;
