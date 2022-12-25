import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/Rooms.css';

function RoomDetails() {
    const [style, setStyle] = useState("form");
    const [formstyle, setformStyle] = useState("");
    const [custDetails, setcustDetails] = useState({});
    const [availability, setAvailability] = useState();
    const [booked, setbooked] = useState();

    function change_Style(option) {
        if (option == "close") {
            setStyle("form");
            setformStyle("");
        }
        else {
            setStyle("form_active");
            setformStyle("inactive");
        }
    }

    function show() {
        console.log(custDetails);
        if (custDetails.name == null || /[A-Za-z]/.test(custDetails.name) == false)
            setAvailability("name");
        else if (custDetails.aadhar == null || /[0-9]/.test(custDetails.aadhar) == false)
            setAvailability("aadhar");
        else if (custDetails.ph_no == null || /[0-9]/.test(custDetails.ph_no) == false)
            setAvailability("phoneNumber");
        else if (custDetails.check_in == null)
            setAvailability("check_in");
        else if (custDetails.check_out == null)
            setAvailability("check_out");
        else
            setAvailability(null);
    }

    function showmsg(type) {
        if (type == "name")
            return (<div className="alert alert-danger ip-box  alert-div" role="alert">INVALID NAME</div>)
        else if (type == "success")
            return (<div className="alert alert-success alert-div">AVAILABLE</div>)
        else if (type == "danger")
            return (<div className="alert alert-danger ip-box alert-div" role="alert">NOT AVAILABLE</div>)
        else if (type == "aadhar")
            return (<div className="alert alert-danger ip-box alert-div" role="alert">INVLAID AADHAR NUMBER</div>)
        else if (type == "phoneNumber")
            return (<div className="alert alert-danger ip-box alert-div" role="alert">INVALID PHONE NUMBER</div>)
        else if (type == "check_in")
            return (<div className="alert alert-danger ip-box alert-div" role="alert">ENTER CHECK IN DATE</div>)
        else if (type == "check_out")
            return (<div className="alert alert-danger ip-box alert-div" role="alert">ENTER CHECK OUT DATE</div>)

        setTimeout(function () {
            document.querySelectorAll(".alert-div").remove();
        }, 5000);
    }
    const getRoomMateArr = (value) => {
        return value.split(",");
    };

    const BookRoom = (evt) => {
        evt.preventDefault();

        const obj = {
            name: custDetails.name,
            aadhar: custDetails.aadhar,
            phoneNumber: custDetails.phoneNumber,
            stayDetails: [{
                startDate: new Date(custDetails.check_in),
                endDate: new Date(custDetails.check_out),
                roomType: custDetails.type,
                finalBill: custDetails.amt,
                roommates : custDetails.rmmts
            }]
        };
      
        fetch(`${window.location.href}/api/bookRoom`, {
            headers: {
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(obj)
        }).then(data => data.json()).then(fin => {
            if (fin["msg"] == "updated in db") {
                change_Style("close");
                alert("Room booking successful!");
            } else {
                alert("Some error occured! Please check data and try again!");
            }
        });
    }
    return (
        <div id="room">
            <div className={formstyle}>
                <h1 className="heading text-center bg-dark text-white border-primary">ROOM DETAILS</h1>
                <div className="container cards-div">
                    <div className="row gy-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Solo</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-info" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "single", amt: 100 }); }}>BOOK NOW</button>
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open") }}>VIEW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Twin</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-info" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ type: "double", amt: 150 }) }}>BOOK NOW</button>
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open") }}>VIEW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Deluxe</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-info" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "deluxe", amt: 250 }) }}>BOOK NOW</button>
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open") }}>VIEW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Super Deluxe</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-info" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "superDeluxe", amt: 400 }) }}>BOOK NOW</button>
                                        <Link className="btn btn-primary" to="/query">VIEW</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Suite</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-info" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "suite", amt: 700 }) }}>BOOK NOW</button>
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open") }}>VIEW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Villa</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-info" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "villa", amt: 1000 }) }}>BOOK NOW</button>
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open") }}>VIEW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style}>
                <form className="border border-4 rounded-4 form-body " >
                    <h2 className="text-center fh"><span className="form-heading">CUSTOMER DETAILS</span><button className="btn btn-close text-end close-btn" onClick={(evt) => { evt.preventDefault(); change_Style("close"); setAvailability(null) }}></button></h2>

                    {availability == true && showmsg("success")}
                    {availability == false && showmsg("danger")}
                    {availability == "name" && showmsg("name")}
                    {availability == "aadhar" && showmsg("aadhar")}
                    {availability == "ph_no" && showmsg("ph_no")}
                    {availability == "check_in" && showmsg("check_in")}
                    {availability == "check_out" && showmsg("check_out")}
                    {}
                    <label className="form-label ip-box-lable">NAME</label>
                    <input className="form-control ip-box bd " onChange={(evt) => setcustDetails({ ...custDetails, name: evt.target.value })} />
                    <label className="form-label ip-box-lable">AADHAR NUMBER</label>
                    <input className="form-control ip-box bd" type="number" onChange={(evt) => setcustDetails({ ...custDetails, aadhar: evt.target.value })} />
                    <label className="form-label ip-box-lable">CONTACT NUMBER</label>
                    <input className="form-control ip-box bd" type="number" onChange={(evt) => setcustDetails({ ...custDetails, phoneNumber: evt.target.value })} />
                    <label className="form-label ip-box-lable">CHECK IN DATE</label>
                    <input className="form-control ip-box bd" type="date" onChange={(evt) => setcustDetails({ ...custDetails, check_in: evt.target.value })} />
                    <label className="form-label ip-box-lable">CHECK OUT DATE</label>
                    <input className="form-control ip-box bd" type="date" onChange={(evt) => setcustDetails({ ...custDetails, check_out: evt.target.value })} />
                    <label className="form-label ip-box-lable">ROOM TYPE:</label>
                    <label className="badge badge-light text-secondary fs-6">{custDetails.type}</label><br />
                    <label className="form-label ip-box-lable">COST :</label>
                    <label className="badge badge-light text-secondary fs-6">${custDetails.amt}/day</label><br />
                    <label className="form-label ip-box-lable">ROOMMATES</label>
                    <input className="form-control ip-box bd " onChange={(evt) => setcustDetails({ ...custDetails, rmmts: getRoomMateArr(evt.target.value) })} />
                    {/* <button className="btn btn-outline-success text-white lef" onClick={(evt) => { evt.preventDefault(); show(); setAvailability(false) }}>CHECK AVAILABITIY</button> */}
                    <button className="btn btn-outline-success text-white sub " onClick={(evt) => { evt.preventDefault(); show(), BookRoom(evt) }}>BOOK</button>


                </form>
            </div>
        </div>
    )
}

export default RoomDetails;