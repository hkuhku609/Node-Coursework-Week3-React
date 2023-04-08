import React, { useState, useEffect } from "react";
import { EditType } from "../utils/types";

const Edit = ({
  item,
  setUpdatedBooking,
  setErrorMsg,
  updatedBooking,
}: EditType) => {
  const [booking, setBooking] = useState(item);

  useEffect(() => {
    setUpdatedBooking(booking);
  }, [booking, setUpdatedBooking]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
  };
  useEffect(() => {
    console.log(updatedBooking);
  }, [updatedBooking]);

  return (
    <div className="grid">
      <input
        type="text"
        className="update-input"
        name="title"
        value={booking.title}
        onChange={handleChange}
      />
      <input
        type="text"
        className="update-input"
        name="firstName"
        value={booking.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        className="update-input"
        name="surname"
        value={booking.surname}
        onChange={handleChange}
      />
      <input
        type="text"
        className="update-input"
        name="email"
        value={booking.email}
        onChange={handleChange}
      />
      <input
        type="text"
        className="update-input"
        name="roomId"
        value={booking.roomId}
        onChange={handleChange}
      />
      <input
        type="date"
        className="update-input"
        name="checkInDate"
        value={booking.checkInDate}
        min={booking.checkInDate}
        onChange={handleChange}
      />
      <input
        type="date"
        className="update-input"
        name="checkOutDate"
        value={booking.checkOutDate}
        min={booking.checkOutDate}
        onChange={handleChange}
      />
    </div>
  );
};

export default Edit;
