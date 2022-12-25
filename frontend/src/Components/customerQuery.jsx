import React from "react";
import { useEffect, useState,useRef } from "react";
import '../Styles/customer.css';


function CustomerQuery() {
    const [query, setQuery] = useState([]);
    const [formCss, setformCss] = useState("form-inactive"); // CSS
    const [issueContainer, setissueContainer] = useState("");//CSS
    const type = useRef();
    const issue = useRef();
    const [roomNo,setRoomNo] = useState();
    const [issueDesc,setIssueDesc] = useState("");


    useEffect(async() => {
            const data1 = await fetch(`${window.location.origin}/api/readt`);
            const full = await data1.json()
            console.log(full);
            setQuery(full);
    }, []);

   

    async function raiseIssue(){
        const date = new Date();
        const det = {"type":type.current.value,"roomID":String(roomNo),"Ticket":issue.current.value,"status":"In Progress","date":date,"description":issueDesc};
        console.log(det);
         await fetch(`${window.location.origin}/api/raiseticket`,{
            headers : {
              "Content-type" : "application/json"
            },
            method : "POST",
            body : JSON.stringify(det)
          }).then(data => data.json()).then(fin => console.log(fin));
        setformCss("form-inactive");setissueContainer("");
    }

    return (
        <div className="container">
            <div className={issueContainer}>
                <h4 className="text-center p-3 border-5 border-bottom border-primary">CUSTOMER ISSUES</h4>
                {
                    query.map((q) => {
                        if (q.status == "Solved")
                            return (
                                <div className="complain alert alert-success d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-row justify-content-between w-100">
                                        <i className="icon fa fa-check"></i>
                                        <div className="issue-details d-flex flex-row justify-content-between">
                                            <h5>Type:{q.type}</h5>
                                            <h5>Room No:{q.room_no}</h5>
                                            <h5>Type of Issue:{q.issue}</h5>
                                            <h5>Raise on: {q.date}</h5>
                                        </div>
                                    </div>
                                    <h5>Issue: {q.description}</h5>
                                </div>
                            )
                        else if (q.status == "In Progress")
                            return (
                                <div className="complain alert alert-warning d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-row justify-content-between w-100">
                                        <i className="icon fas fa-spinner"></i>
                                        <div className="issue-details d-flex flex-row justify-content-between">
                                            <h5>Type:{q.type}</h5>
                                            <h5>Room No:{q.room_no}</h5>
                                            <h5>Type of Issue:{q.issue}</h5>
                                            <h5>Raise on: {q.date}</h5>
                                        </div>
                                    </div>
                                    <h5>Issue: {q.description}</h5>
                                </div>
                            )
                    })
                }
                <button className="add btn btn-primary" onClick={() => {setformCss("form-active"),setissueContainer("issue-container-blur")}}><i className="fa-solid fa-plus"></i></button>
            </div>

            <div className={formCss}>
                <div className="d-flex flex-row justify-content-between">
                    <select ref={type} className="select-form form-select w-25">
                        <option value="SOLO">SOLO</option>
                        <option value="TWIN">TWIN</option>
                        <option value="DELUXE">DELUXE</option>
                        <option value="SUPER DELUXE">SUPER DELUXE</option>
                        <option value="SUITE">SUITE</option>
                        <option value="VILLA">VILLA</option>
                    </select>
                    <input className="w-25" type="number" placeholder="Room No" onChange={(evt)=>setRoomNo(evt.target.value)}/>
                    <select ref={issue} className="form-select w-25">
                        <option value="ELECTRICAL">ELECTRICAL</option>
                        <option value="PLUMBING">PLUMBING</option>
                        <option value="FOOD">FOOD </option>
                        <option value="SANITATION">SANITATION</option>
                    </select>
                </div>
                <textarea className="w-100" placeholder="Issue Details" onChange={(evt)=>setIssueDesc(evt.target.value)}/>
                <button className="submit w-25 btn btn-info" onClick={raiseIssue}>RAISE TICKET</button>
            </div>
        </div >
    )
}

export default CustomerQuery;