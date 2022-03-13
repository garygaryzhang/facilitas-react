import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function JobPosting() {
    return (
        <header style={HeaderStyle}>


            <div style={splitScreen}></div>
            <div style={topPane}></div>
            <div style={bottomPane}> </div>
        <label>Job Postings:</label><h4 className="main-title text-center">login / register page</h4><p className="main-para text-center">Business Page login</p><div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in - </button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div><div className="buttons text-center">
                <input type="checkbox" id="scales" name="scales" checked></input> <label for="scales" color="000000">Scales</label>
                <input type="checkbox" id="scales" name="scales"></input> <label for="scales">Scales</label>


            </div>

     test
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const splitScreen =  {
    display: 'flex',
    flexDirection: 'row',
}
const topPane = {
    width: '50%',
}
const bottomPane = {
    width: '50%',
}