import React from "react";
import { useRef, useState } from "react";
import "../Styles/DateQuery.css";


function Views() {
  let [fetchBin, setfetchBin] = useState(false);
  let [data, setData] = useState([]); // For CARDS
  let [date, setDate] = useState(); // For DATE
  let type = useRef(); // TYPE OF ROOM

  async function fetchDetails() {
    const op = {
      roomType: type.current.value,
      reqdDate: new Date(date),
    };
    await fetch(`${window.location.origin}/api/viewdate`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(op),
    })
      .then((data) => data.json())
      .then((fin) =>{console.log(fin); data=fin});
    console.log(data);
      setData(
      data.map((item) => {
        return (  
          <div className="card c1 p-5">
            <div className="row">
              <div className="col-6">
                <h5 className="p-1">Name: {item.name}</h5>
                <h5 className="p-1">Aadhar: {item.aadhar}</h5>
                <h5 className="p-1">Phone Number: {item.phoneNumber}</h5>
              </div>
              <div className="col-6">
              <h5 className="p-1">Check Out Date: {new Date(item.startDate).toDateString()}</h5>
                <h5 className="p-1">Check Out Date: {new Date(item.endDate).toDateString()}</h5>
                <h5 className="p-1">Room Mates: {item.roommates}</h5>
              </div>
            </div>
          </div>
      
        );
      })
    ); 
    setfetchBin(true);
  }
  return (
    <div id="page1">
    <div className="view-container">
      <div className="input-controls">
        <input
          className="view-date"
          type="date"
          onChange={(evt) => {
            setDate(evt.target.value);
          }}
        />
        <select ref={type} className="view-select-form form-select w-25">
          <option value="single">SOLO</option>
          <option value="double">TWIN</option>
          <option value="deluxe">DELUXE</option>
          <option value="superDeluxe">SUPER DELUXE</option>
          <option value="suite">SUITE</option>
          <option value="villa">VILLA</option>
        </select>
        <button className="btn btn-dark" onClick={fetchDetails}>
          FETCH
        </button>
      </div>
      {fetchBin == true && data}
    </div>
    </div>
  );
}

export default Views;