import React, { useState } from "react";
import '../Styles/Rooms.css';
import singlephoto from "../Assets/single.jpg";
import doublephoto from "../Assets/double.jpg";
import deluxephoto from "../Assets/deluxe.jpg";
import superdeluxephoto from "../Assets/superdeluxe.jpg";
import suitephoto from "../Assets/suite.jpg";
import villaphoto from "../Assets/villa.jpg";


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
      
        fetch(`${window.location.origin}/api/bookRoom`, {
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
                                    src={singlephoto}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Hans Solo</h5>
                                    <p className="card-text">Stay single, stay cozy!Our comfortable single rooms are just the right size if you are travelling alone.<br/>
                                     Starting at <code>$100/day</code></p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "single", amt: 100 }); }}>BOOK NOW</button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src={doublephoto}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Twin Turbines</h5>
                                    <p className="card-text">Bigger rooms with upgraded amenities & nicer view. Suitable for groups needing more space, like a couple or small family. Starting at <code>$150/day</code></p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ type: "double", amt: 150 }) }}>BOOK NOW</button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src={deluxephoto}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">La Deluxia</h5>
                                    <p className="card-text">
                                    Deluxe are spacious & have a cozy and charming vintage vibe. Designed for a homely stay,it boasts of a warm upholstery. Starting at <code>$250/day</code></p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "deluxe", amt: 250 }) }}>BOOK NOW</button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src={superdeluxephoto}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Super Deluxe</h5>
                                    <p className="card-text">Super Deluxe rooms have two double beds. Both bunk style & twin style beds available with a seperate butler,just for you! Starting at <code>$400/day</code></p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "superDeluxe", amt: 400 }) }}>BOOK NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src={suitephoto}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Suite</h5>
                                    <p className="card-text">
                                    Experience the good in life with two spacious bed rooms, an elegant living room, a workstation  with all essentials.
                                    Starting at <code>$700/day</code>
                                    </p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "suite", amt: 700 }) }}>BOOK NOW</button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <img
                                    src={villaphoto}
                                    className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Villa</h5>
                                    <p className="card-text">Stand-alone houses offering maximum privacy and comfort with multiple bedrooms,  and access to a private beach. Starting at <code>$1000/day</code></p>
                                    <div className="d-flex justify-content-end btn-group">
                                        <button className="btn btn-primary" onClick={(evt) => { evt.preventDefault(); change_Style("open"); setcustDetails({ ...custDetails, type: "villa", amt: 1000 }) }}>BOOK NOW</button>
                                       
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