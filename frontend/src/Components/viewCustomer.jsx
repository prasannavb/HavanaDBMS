import React, { useRef, useState } from "react";
import "../Styles/costumer.css";


function Viewcustomer() {
  let [fetchBin, setfetchBin] = useState(false);
  let [data, setData] = useState([]); // For CARDS
  //let [ip, setip] = useState(); // For DATE
  let ip =useRef();
  let type = useRef(); // TYPE OF ROOM

  async function fetchDetails() {
    const op = {
      type: type.current.value,
      detail:ip.current.value ,
    };
    await fetch(`${window.location.href}/api/viewcustomer`, {
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
         
          <div className="card c1 p-5 ">
            <div className="row">
              <div className="col-6">
                <h5 className="p-1">Name: {item.name}</h5>
                <h5 className="p-1">Aadhar: {item.aadhar}</h5>
                <h5 className="p-1">Phone Number: {item.phoneNumber}</h5>
              </div>
              <div className="col-6">
              {/*<h5 className="p-1">Stay Details: {item.stayDetails}</h5>*/}
              </div>
            </div>
          </div>
      
        );
      }) 
    ); 
    setfetchBin(true);
  }
  return (
    <div id="page2">
    <div className="view-container">
      <div className="input-controls">
        <input
          className="view-date"
          type="text"
          ref={ip}
        />
        <select ref={type} className="view-select-form form-select w-25">
          <option value="addhar">AADHAR</option>
          <option value="name">NAME</option>
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

export default Viewcustomer;