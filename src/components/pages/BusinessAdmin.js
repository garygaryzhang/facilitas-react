import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function BusinessAdmin() {
    return (
        
        
        <header style={ HeaderStyle }>

            <p className="main-para text-center">Business Staffing Requirements</p>
            <p/>
            <p className='h2'>Welcome Amazing Constructions LLP !!!</p>

            <div>
            <p className='h4'>Please specify your open positions so we can match workforce:</p>
            </div>

            <p className="main-para text-center"></p>
            <p className="main-para text-center"></p>
            <p className="main-para text-center"></p>
            <table border="1" className="table">
                <tr border ="2" >
                    <th className="th"> Number of Positions </th>
                    <th>Job Type </th>
                    <th className='th'>Payment Schedule </th>
                    <th>Job Description (ifAny) </th>
                </tr>
                <tr>
                    <td><input type="text" className = "input1" size = "5" id="scales" name="noofpositions" ></input> </td>
                    <td><label for="scales" color="000000">Carpenter</label></td>
                    <td><input type="checkbox" id="scales" name="scales" />&nbsp; Daily
                        <input type="checkbox" id="scales" name="scales" checked/>&nbsp; Weekly
                        <input type="checkbox" id="scales" name="scales" />&nbsp; Bi-Weekly</td>
                    <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
               
                </tr>
                <tr>
                    <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
                    <td><label for="scales" color="000000">Painter</label></td>
                    <td><input type="checkbox" id="scales" name="scales" checked/>
                <input type="checkbox" id="scales" name="scales" />
                <input type="checkbox" id="scales" name="scales" /></td>
               
                </tr>
                <tr>
                    <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
                <td><label for="scales" color="000000">Plumber</label></td>
                <td><input type="checkbox" id="scales" name="scales" />
                <input type="checkbox" id="scales" name="scales" checked/>
                <input type="checkbox" id="scales" name="scales" /></td>
               
                </tr>
                <tr>
                    <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
                    <td><label for="scales" color="000000">Electrician</label></td>
                    <td><input type="checkbox" id="scales" name="scales" />
                     <input type="checkbox" id="scales" name="scales" checked/>
                    <input type="checkbox" id="scales" name="scales" /></td>
               
                </tr>

                <tr>
                
                <td><input type="text" size = "200" id="scales" name="scales" ></input> </td>
                <td><label for="scales" color="000000">Mason</label></td>
                <td><input type="checkbox" id="scales" name="scales" />
                <input type="checkbox" id="scales" name="scales" />
                <input type="checkbox" id="scales" name="scales" checked/></td>
                </tr>


                
            </table>

                <div className="buttons text-center">
                <Link to="/thankyou">
                    <button className="primary-button">Submit</button>
                </Link>
               
                </div>
                
            

        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}