import React, { useState } from "react";
import Edit from "./Edit";
import { bookingType, RightType } from "../utils/types";
import { API_URL } from "../utils/api";

const Right = ({ data, callData, messagesEndRef }: RightType) => {
  const [updateSate, setUpdateState] = useState<number>(-1);
  const [updatedBooking, setUpdatedBooking] = useState<bookingType>(
    {} as bookingType
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  const enterEditMode = (item: bookingType) => {
    setErrorMsg("");
    setUpdateState(item.id);
  };
  const handleEdit = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedBooking),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) return setErrorMsg(data);
      reset();
      callData();
    } catch (err) {
      console.error(err);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      await fetch(`https://susan-hotel-server.glitch.me/bookings/${id}`, {
        method: "DELETE",
      });
      callData();
    } catch (err) {
      console.error(err);
    }
  };
  const reset = () => {
    setErrorMsg("");
    setUpdateState(-1);
    setUpdatedBooking({} as bookingType);
  };

  return (
    <div className="right-container">
      <h2 className="right-title">Bookings</h2>
      {data.map((item) => (
        <div key={item.id} className="bookings-container">
          <div className="bookings-box">
            <div>
              <div>title:</div>
              <div>first name:</div>
              <div>surname:</div>
              <div>email:</div>
              <div>room id: </div>
              <div>check in date: </div>
              <div>check out date: </div>
            </div>
            {updateSate === item.id ? (
              <Edit
                item={item}
                updatedBooking={updatedBooking}
                setUpdatedBooking={setUpdatedBooking}
                setErrorMsg={setErrorMsg}
              />
            ) : (
              <div>
                <div>{item.title}</div>
                <div>{item.firstName}</div>
                <div>{item.surname}</div>
                <div>
                  <span className="booking-email">{item.email}</span>
                </div>
                <div>{item.roomId}</div>
                <div>{item.checkInDate}</div>
                <div>{item.checkOutDate}</div>
              </div>
            )}
          </div>
          <div>
            {updateSate === item.id ? (
              <>
                <button
                  type="button"
                  className="green-btn btn"
                  onClick={() => handleEdit(item.id.toString())}
                >
                  Update
                </button>
                {errorMsg && <p className="error-msg">{errorMsg}</p>}
                <button type="button" className="red-btn btn" onClick={reset}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="green-btn btn"
                  onClick={() => enterEditMode(item)}
                >
                  Edit
                </button>
                <button
                  className="red-btn btn"
                  onClick={() => handleDelete(item.id.toString())}
                >
                  X
                </button>
              </>
            )}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Right;
